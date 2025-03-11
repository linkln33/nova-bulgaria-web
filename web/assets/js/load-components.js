// Component Loader Script
document.addEventListener('DOMContentLoaded', function() {
    // Load the introduction component
    loadComponent('introduction-container', 'components/introduction/introduction.html');
});

// Function to load HTML components
function loadComponent(targetId, componentPath) {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) {
        console.error(`Target element with ID "${targetId}" not found.`);
        return;
    }

    fetch(componentPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.status} ${response.statusText}`);
            }
            return response.text();
        })
        .then(html => {
            targetElement.innerHTML = html;
            
            // Execute any scripts in the loaded component
            const scripts = targetElement.querySelectorAll('script');
            scripts.forEach(script => {
                const newScript = document.createElement('script');
                
                // Copy all attributes
                Array.from(script.attributes).forEach(attr => {
                    newScript.setAttribute(attr.name, attr.value);
                });
                
                // Copy the content
                newScript.textContent = script.textContent;
                
                // Replace the old script with the new one
                script.parentNode.replaceChild(newScript, script);
            });
        })
        .catch(error => {
            console.error('Error loading component:', error);
            targetElement.innerHTML = `<div class="p-4 text-red-500">Failed to load component: ${error.message}</div>`;
        });
}

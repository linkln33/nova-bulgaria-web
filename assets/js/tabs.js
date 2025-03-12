// Tab functionality for Vision for the Future section
document.addEventListener('DOMContentLoaded', function() {
    // Vision for the Future tabs
    const whitepaperTabs = document.querySelectorAll('.whitepaper-tab');
    
    if (whitepaperTabs.length > 0) {
        whitepaperTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Get the section to show
                const sectionId = this.getAttribute('data-section');
                
                // Remove active class from all tabs and content sections
                document.querySelectorAll('.whitepaper-tab').forEach(t => {
                    t.classList.remove('active');
                });
                
                document.querySelectorAll('.whitepaper-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Add active class to clicked tab and corresponding content
                this.classList.add('active');
                document.getElementById(`${sectionId}-content`).classList.add('active');
            });
        });
    }
    
    // Add similar functionality for other tab sections if needed
});

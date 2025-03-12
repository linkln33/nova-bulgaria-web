/**
 * ID Card Mobile Responsiveness Script
 * Uses transform-based scaling to maintain the exact desktop layout on mobile devices
 */
document.addEventListener('DOMContentLoaded', function() {
    // Get the ID card container
    const idCardContainer = document.querySelector('#nft-id .flex.justify-center');
    const idCard = document.querySelector('#nft-id .glass.rounded-xl.relative');
    
    if (!idCardContainer || !idCard) return;
    
    // Store original dimensions
    const originalWidth = 700; // max-width of the card as defined in HTML
    
    // Function to calculate and apply the scale
    function scaleIdCard() {
        // Get the current container width
        const containerWidth = idCardContainer.clientWidth;
        
        // Calculate the scale factor (how much we need to shrink the card)
        let scaleFactor = Math.min(1, containerWidth / originalWidth);
        
        // Apply the transform scale to the ID card
        idCard.style.transform = `scale(${scaleFactor})`;
        
        // Adjust the container height to accommodate the scaled card
        // We need to maintain the aspect ratio of the original card
        const originalHeight = idCard.offsetHeight / scaleFactor;
        idCardContainer.style.height = `${originalHeight * scaleFactor}px`;
        
        // Ensure the card is centered after scaling
        idCard.style.transformOrigin = 'center top';
    }
    
    // Apply scaling on page load
    scaleIdCard();
    
    // Re-apply scaling when window is resized
    window.addEventListener('resize', scaleIdCard);
});

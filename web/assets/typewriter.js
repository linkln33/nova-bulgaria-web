const features = [
    { text: "Digital Nation on Cosmos", color: "#64ffda" },
    { text: "Bulgarian Lion Token (BGL)", color: "#ff64da" },
    { text: "NFT Digital Citizenship", color: "#64daff" },
    { text: "Decentralized Governance", color: "#deff64" },
    { text: "Blockchain Courts", color: "#64ffda" },
    { text: "Social Platform", color: "#ff64da" }
];

class Typewriter {
    constructor(element, words, waitTime = 3000, typeSpeed = 60) {
        this.element = element;
        this.words = words;
        this.waitTime = waitTime;
        this.typeSpeed = typeSpeed;
        this.currentWordIndex = 0;
        this.isDeleting = false;
        this.cursor = document.createElement('span');
        this.cursor.className = 'cursor';
        this.element.appendChild(this.cursor);
        this.type = this.type.bind(this);
    }

    type() {
        const currentWord = this.words[this.currentWordIndex];
        const text = currentWord.text;
        const color = currentWord.color;
        
        let displayText = this.element.textContent.slice(0, -1); // Remove cursor
        
        if (this.isDeleting) {
            displayText = text.substring(0, displayText.length - 1);
        } else {
            displayText = text.substring(0, displayText.length + 1);
        }

        this.element.innerHTML = `<span style="color: ${color}; text-shadow: 0 0 10px ${color}33;">${displayText}</span>`;
        this.element.appendChild(this.cursor);

        let typeSpeed = this.typeSpeed;
        
        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && displayText === text) {
            typeSpeed = this.waitTime;
            this.isDeleting = true;
        } else if (this.isDeleting && displayText === '') {
            this.isDeleting = false;
            this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
            typeSpeed = 700;
        }

        setTimeout(this.type, typeSpeed);
    }
}

// Make features available globally
window.features = features;
window.Typewriter = Typewriter;

// Initialize typewriter when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.querySelector('.typewriter');
    if (typewriterElement) {
        const typewriter = new Typewriter(typewriterElement, features);
        typewriter.type();
    }
});

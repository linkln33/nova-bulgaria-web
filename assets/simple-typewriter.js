class SimpleTypewriter {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.currentPhrase = 0;
        this.currentChar = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.pauseEnd = options.pauseEnd || 2000;
        this.pauseStart = options.pauseStart || 500;
        this.loop = options.loop !== undefined ? options.loop : true;
    }

    type() {
        const phrase = this.phrases[this.currentPhrase];
        const text = phrase.text;
        const color = phrase.color;

        // Calculate current text
        let currentText = text;
        if (this.isDeleting) {
            currentText = text.substring(0, this.currentChar--);
        } else {
            currentText = text.substring(0, this.currentChar++);
        }

        // Update DOM
        this.element.innerHTML = `
            <span style="color: ${color}; text-shadow: 0 0 10px ${color};">
                ${currentText}
            </span>
            <span class="cursor" style="background-color: ${color};"></span>
        `;

        // Calculate timing
        let timing = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        // Handle state changes
        if (!this.isDeleting && this.currentChar > text.length) {
            timing = this.pauseEnd;
            this.isDeleting = true;
            this.currentChar = text.length;
        } else if (this.isDeleting && this.currentChar < 0) {
            this.isDeleting = false;
            this.currentChar = 0;
            this.currentPhrase++;
            timing = this.pauseStart;

            if (this.currentPhrase === this.phrases.length) {
                if (this.loop) {
                    this.currentPhrase = 0;
                } else {
                    return;
                }
            }
        }

        setTimeout(() => this.type(), timing);
    }

    start() {
        this.type();
    }
}

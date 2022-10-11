class Horse {
    speed;
    position = 0;
    name;
    width = 50;
    htmlEl;

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run() {
        const velocity = Math.random();
        this.position += (1 + velocity);
        this.htmlEl.style.left = `${this.position}px`;
    }

    reset() {
        this.position = 0;
        this.htmlEl.remove();
    }

    render(hippodrome) {
        this.htmlEl = document.createElement('div');
        this.htmlEl.classList.add('horse');
        this.htmlEl.id = this.name;
        this.htmlEl.innerText = this.name;
        this.htmlEl.style.width = `${this.width}px`;
        hippodrome.appendChild(this.htmlEl);
    }
}

export default Horse;

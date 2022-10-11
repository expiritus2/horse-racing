class Game {
    hippodrome;
    winnerEl;
    isStarted = false;
    horses = [];
    winner;

    constructor(hippodrome, winnerEl) {
        this.hippodrome = hippodrome;
        this.winnerEl = winnerEl;
    }

    start(isStarted) {
        this.isStarted = isStarted;
        this.render();
    }

    reset() {
        for (const horse of this.horses) {
            horse.reset();
            horse.render(this.hippodrome);
            this.winner = undefined;
            this.winnerEl.innerText = '';
        }
    }

    setHorse(horse) {
        this.horses.push(horse);
    }

    renderHorses() {
        for(const horse of this.horses) {
            horse.render(this.hippodrome);
        }
    }

    isHorseFinished(horse) {
        return horse.position + horse.width >= window.innerWidth;
    }

    moveHorses() {
        for (const horse of this.horses) {
            horse.run();
            if (this.isHorseFinished(horse)) {
                this.isStarted = false;
                this.winner = horse.name;
            }
        }
    }

    render() {
        if (this.isStarted) {
            this.moveHorses();
            requestAnimationFrame(this.render.bind(this));
        }

        if (this.winner) {
            this.winnerEl.innerText = `${this.winner} won`;
        }
    }
}

export default Game;

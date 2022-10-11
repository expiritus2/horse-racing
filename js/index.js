import Game from './classes/Game.js';
import Horse from './classes/Horse.js';

const hippodrome = document.getElementById('hippodrome');
const startButton = document.getElementById('start-btn');
const resetButton = document.getElementById('reset-btn');
const winnerEl = document.getElementById('winner');

const game = new Game(hippodrome, winnerEl);
game.setHorse(new Horse('Pegas', 50));
game.setHorse(new Horse('Izolda', 50));
game.setHorse(new Horse('Fly', 50));
game.setHorse(new Horse('Horse', 50));
game.renderHorses();

startButton.addEventListener('click', () => {
    if(!game.isStarted && !game.winner) {
        game.start(true);
        startButton.innerText = "Stop";
    } else {
        game.start(false);
        startButton.innerText = 'Start';
    }
});

resetButton.addEventListener('click', () => {
    game.reset();
    startButton.innerText = 'Start';
});


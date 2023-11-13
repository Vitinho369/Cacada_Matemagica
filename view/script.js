import Player from '../models/Player.js';
import Obstacle from '../models/Obstacle.js';
import Question from '../models/Question.js';
import Background from '../models/Background.js';

let player;

window.addEventListener("keydown", (event) => {
    player = new Player();

    switch (event.key) {
        case 'a':
            player.draw();
            break;

        default:
            break;
    }
});
import Player from "../models/Player.js";
import Obstacle from "../models/Obstacle.js";
import Question from "../models/Question.js";
import Background from "../models/Background.js";

let player;
player = new Player();

player.draw();
window.addEventListener("keydown", (event) => {
 
  switch (event.key) {
    case 'a':
      player.jump();
      break;
    case "d":
      player.move("right");
    default:
      break;
  }
});

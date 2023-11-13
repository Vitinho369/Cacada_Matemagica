import Player from "../models/Player.js";
import Obstacle from "../models/Obstacle.js";
import Question from "../models/Question.js";
import Background from "../models/Background.js";

let player;

window.addEventListener("keydown", (event) => {
  player = new Player();

  switch (event.key) {
    case "a":
      player.move("left");
      break;
    case "d":
      player.move("right");
    default:
      break;
  }
});
player.draw();

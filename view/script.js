import Player from "../models/Player.js";
import Obstacle from "../models/Obstacle.js";
import Question from "../models/Question.js";
import Background from "../models/Background.js";

let player = new Player();
let obstacles = [new Obstacle(), new Obstacle(), new Obstacle()];
let question = new Question();

const defineOperation = () => {
  let operationProblem = document.getElementById("operations");
  operationProblem.innerText = "Qual o resultado da operação: " + question.writeOperation();
};

const generateIndexValue = () => {
  return Math.floor(Math.random() * 3);
};

let nextLevel = true;
const game = () => {
  setInterval(() => {
    let positionObst = 90;
    let indexObstValue = generateIndexValue();

    obstacles.forEach((obsT, index) => {
      obsT.draw(positionObst, 110);
      obsT.collide(player);

      if (nextLevel) {
        if (index != indexObstValue) {
          obsT.attributeValue(question.generateNumber(), positionObst, 110);
        } else {
          obsT.attributeValue(question.getResult(), positionObst, 110);
        }
      }

      positionObst += 40;
    });

  }, 200);
};

defineOperation();
game();

player.update();

window.addEventListener("keydown", (event) => {

  switch (event.key) {
    case "ArrowUp":
      // player.jump();
      player.move('up');
      break;
    case "ArrowRight":
      player.move("right");
      break;
    case "ArrowLeft":
      player.move("left");
      break;
    case "ArrowDown":
      player.move("down");
    default:
      break;
  }
});

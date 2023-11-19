import Player from "../models/Player.js";
import Obstacle from "../models/Coin.js";
import Question from "../models/Question.js";

let player = new Player();
let obstacles = [new Obstacle(), new Obstacle(), new Obstacle()];
let question = new Question();
let canvas = document.getElementById("game");
let context = canvas.getContext("2d");
let nextLevel = true;
let pontuation = -1;

const defineOperation = () => {
  let operationProblem = document.getElementById("operations");
  operationProblem.innerText =
    "Qual o resultado da operação: " + question.writeOperation();
};

const generateIndexValue = () => {
  return Math.floor(Math.random() * 3);
};

const reinitialGame = () => {
  pontuation++;
  player.reinitial();
  console.log(pontuation);
};

const drawObstacles = () => {
  let positionObst = 90;
  let indexObstValue = generateIndexValue();
  obstacles.forEach((obsT, index) => {
    obsT.setAxesX(positionObst);
    obsT.setAxesY(110);
    // obsT.collide(player);
    if (nextLevel) {
      if (index != indexObstValue) {
        obsT.attributeValue(question.generateNumber(), positionObst, 110);
      } else {
        obsT.attributeValue(question.getResult(), positionObst, 110);
      }
    }
    positionObst += 70;
  });
};

const game = () => {
  obstacles.forEach((obsT) => {
    nextLevel = player.collide(obsT);

    if (nextLevel) reinitialGame();

    drawObstacles();
    obsT.update();
  });
};

const animate = () => {
  requestAnimationFrame(animate);
  context.fillRect(0, 0, context.width, context.heigth);
  player.update();
  game();
};

window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      player.jump();
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

defineOperation();
animate();
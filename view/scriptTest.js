import Player from "../models/Player.js";
import Coinacle from "../models/Coin.js";
import Question from "../models/Question.js";

let player = new Player();
let coin = new Coinacle();
let question = new Question();
let canvas = document.getElementById("Jogo");
let context = canvas.getContext("2d");
let nextLevel = true;
let pontuation = 0;

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
  coin.reinitial();
  console.log(pontuation);
};

let positionCoin = 300;
const drawcoin = () => {
  let indexCoinValue = generateIndexValue();
//   coin.forEach((Coin, index) => {
    coin.setAxesX(positionCoin);
    coin.setAxesY(10);
    // Coin.collide(player);
    // if (nextLevel) {
    //   if (index != indexCoinValue) {
        if(nextLevel)
            coin.attributeValue(question.generateNumber(), positionCoin, 10);
    //   } else {
        // Coin.attributeValue(question.getResult(), positionCoin, 110);
    //   }
    // }
    // positionCoin += 70;
//   });
    positionCoin -=2;
    if(positionCoin < 0){
        positionCoin = 300;
    }
};

const game = () => {
//   coin.forEach((Coin) => {
    nextLevel = player.collide(coin);

    if (nextLevel) reinitialGame();

        drawcoin();
        player.update();
        coin.update();
//   });
};

const FPS = 50;
const animate = () => {

    setTimeout(() => {
        animate();
    // requestAnimationFrame(animate);
        context.clearRect(0, 0, canvas.width, canvas.height);
        game();
    }, FPS);
};

window.onload = ()=>{
    animate();
    defineOperation();
};
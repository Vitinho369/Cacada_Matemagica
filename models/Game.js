import Player from "../models/Player.js";
import Coin from "../models/Coin.js";
import Question from "../models/Question.js";
import Background from "./Background.js";

export default class Game{
    constructor(){
        this.player = new Player();
        this.coin = new Coin();
        this.question = new Question();
        this.background = new Background();
        this.canvas = document.getElementById("game");
        this.context = this.canvas.getContext("2d");
        this.nextValue = true;
        this.pontuation = 0;
        this.operationText = document.getElementById("operations");
        this.positionCoin = 300;
        this.nextCoinValue = 0;
        this.speedCoin = 2;
        this.generateValue = true;
        this.pontuationWriter = document.getElementById("pontuation");
        this.timeAnimation = 4;
        this.writeTexts();
        this.coin.attributeValue(this.question.generateNumber(), this.positionCoin, 10);
        this.messageInitial = true;
    }

    writeTexts(){
        this.operationText.innerText = "Qual o resultado da operação " + this.question.writeOperation() + "?";
        this.pontuationWriter.innerText = "Estoque de respostas Matemágicas: " + this.pontuation;
    }

    generateIndexValue(){
        return Math.floor(Math.random() * 6);
    };
    
    reinitialGame(){
       if(this.question.getResult() == this.coin.getNumber()){
            this.question = new Question();
            this.pontuation++;
            this.background.accelerate();
        }else if(this.pontuation > 0){
            this.pontuation--;
        }
        this.writeTexts();
        this.generateValue = true;
        this.nextCoinValue--;   
        this.player.reinitial();
        this.positionCoin = 300;
        this.coin.reinitial();
    };

    
    drawCoin(){
        if(this.nextCoinValue == 0)
            this.nextCoinValue = this.generateIndexValue();

        this.coin.setAxesX(this.positionCoin);
        this.coin.setAxesY(10);

        if(this.generateValue){
            this.coin.attributeValue(this.question.generateNumber(), this.positionCoin, 10);
            this.generateValue = false;
        }else if(this.nextCoinValue == 1){
            this.coin.attributeValue(this.question.getResult(), this.positionCoin, 10);
        }

        this.positionCoin -= (this.speedCoin+this.pontuation);
        if(this.positionCoin < 0){
            this.generateValue = true;
            this.positionCoin = 300;
            this.nextCoinValue--;  
        }
        this.coin.update();
  };
  
    game(){
        this.nextValue = this.player.collide(this.coin);
    
        if (this.nextValue){
            this.reinitialGame();
        } 
    
            this.background.draw();
            this.drawCoin();
            this.player.update();
    };

    runGame(){ 

        if(this.messageInitial){
            alert("Olá, você veio parar em um mundo mágico, onde você é um caçador matemágico determinado a" +
            "se tornar um mestre da Matemágica, para isso você enfrentará um desafio: caçar 20 respostas Matemágicas certas"+
            "das perguntas Matemágicas que irão aparecer durante o percurso que você fará em meio a floresta da Matemágica. Boa sorte em sua jornada caçador!");
           
            alert("Para jogar, aperte a tecla de espaço no teclado para que o caçador possa pular e coletar as respostas Matemágicas");
            this.messageInitial = false;
        }

        if(this.pontuation < 20){
            setTimeout(() => {
                this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    this.runGame();
                    this.game();
            }, 50);
        }else{
            alert("Fim de Jogo. Parabéns! Agora você recebeu o título de caçador mestre da Matemágica");
        }
    };
    
}
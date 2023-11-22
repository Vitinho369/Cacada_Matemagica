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

    //Função destinada para escrever os textos na tela que serão atualizados conforme o progresso do jogador em suas respostas
    writeTexts(){
        this.operationText.innerText = "Qual o resultado da operação " + this.question.getQuestion() + "?";
        this.pontuationWriter.innerText = "Estoque de respostas Matemágicas: " + this.pontuation;
    }

    /*Gera um novo número para que possa se saber quando a moeda contendo a respostas correta 
    irá aparecer novamente para o usuário de forma aletória*/
    generateNextCoinValue(){
        return Math.floor(Math.random() * 6);
    };
    
    /*Reinicia todo o jogo após o jogador colidir com alguma moeda, se a resposta estiver certa, 
    será aumentada a pontuação e gerada uma nova pergunta*/
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

    //Desenha as moedas na tela e promove a sua movimentação (considera a aceleração do jogo)
    drawCoin(){
        if(this.nextCoinValue == 0)
            this.nextCoinValue = this.generateNextCoinValue();

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
  
    /*Função responsável por desenhar todos os elementos na tela do jogo,
    verificar a colisão e executar a função de reiniciar o jogo*/
    drawGame(){
        this.nextValue = this.player.collide(this.coin);
    
        if (this.nextValue){
            this.reinitialGame();
        } 
    
            this.background.draw();
            this.drawCoin();
            this.player.update();
    };

    /*Função principal do jogo, onde será mostrada as mensagens iniciais de instrução do jogo, bem como a mensagem 
    final apresentada no seu fim. Além de gerenicar a pontuação máxima e os elementos desenhados na tela do jogo*/
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
                    this.drawGame();
            }, 50);
        }else{
            alert("Fim de Jogo. Parabéns! Agora você recebeu o título de caçador mestre da Matemágica");
        }
    };
    
}
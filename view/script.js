import Game from "../models/Game.js";

//Carrega o jogo para ser executado no arquivo index.html
window.onload = ()=>{
    let game = new Game();
    game.runGame();
};
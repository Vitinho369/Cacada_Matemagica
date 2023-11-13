export default class Obstacle{
    constructor(){
        this.canvas = document.getElementById("Jogo");
        this.context = this.canvas.getContext("2d");
        this.number = 0;
        this.PositionX = this.context.width;
        this.PositionY = this.context.heigth;
    }

    generateNumbers(){
        this.number = Math.floor(Math.random() * 10);
        console.log(this.number);
    }

    draw(){
        console.log("asasaa");
    }
}
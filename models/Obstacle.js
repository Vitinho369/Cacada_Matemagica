export default class Obstacle {
    constructor() {
        this.canvas = document.getElementById("Jogo");
        this.context = this.canvas.getContext("2d");
        this.number = 0;
        this.PositionX = this.context.width;
        this.PositionY = this.context.height;
        this.width = 20;
        this.height = 20;
        this.number = 0;
        this.axesX = 0;
        this.axesY = 70;
    }

    attributeValue(number, axesX, axesY) {
        // this.number = number;
        this.context.fillStyle = "white";
        this.context.font = "20px Times New Roman";
        this.context.fillText(number, axesX, axesY + 15);
    }

    draw() {
        this.context.fillStyle = "red";
        this.context.clearRect(this.axesX, this.axesY, this.width, this.height);
    }
    
    animate(axesX, axesY){
        this.axesX = axesX;
        this.axesY = axesY;
        window.requestAnimationFrame(()=>this.animate);
        this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.draw();
    }

    collide(player) {

        // console.log("player.getAxesY(): " + player.getAxesY());
        // console.log("player.getAxeX(): " + player.getAxesX());
        // console.log("(this.axesY + this.height): " + (this.axesY + this.height));
        // console.log("(this.axesX + this.width): " + (this.axesX + this.width));
        if (player.getAxesY() >= this.axesY && player.getAxesY() <= (this.axesY + this.height)) {
            console.log("collide Y");
        }

        if (this.axesX + this.width >= player.getAxesX() && 
            player.getAxesX() <= (this.axesX + this.width)
            && (this.axesY + this.height) >= player.getAxesY() && 
            player.getAxesY() <= (this.axesY + this.height)) {

            console.log("collide");
        }

    }
}
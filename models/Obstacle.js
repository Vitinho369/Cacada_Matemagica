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

    draw(axesX, axesY) {
        this.axesX = axesX;
        this.axesY = axesY;
        this.context.fillStyle = "red";
        this.context.fillRect(this.axesX, this.axesY, this.width, this.height);
    }

    collide(player) {

        // console.log("player.getAxesY(): " + player.getAxesY());
        // console.log("player.getAxeX(): " + player.getAxesX());
        // console.log("(this.axesY + this.height): " + (this.axesY + this.height));
        // console.log("(this.axesX + this.width): " + (this.axesX + this.width));
        if (player.getAxesY() >= this.axesY && player.getAxesY() <= (this.axesY + this.height)) {
            console.log("collide Y");
        }

        if (player.getAxesX() >= this.axesX && player.getAxesX() <= (this.axesX + this.width)) {
            console.log("collide X");
        }
    }
}
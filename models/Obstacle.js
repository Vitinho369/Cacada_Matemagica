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
        this.textX = 0;
        this.textY = 0;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getAxesX(){
        return this.axesX;
    }

    getAxesY(){
        return this.axesY;
    }

    setAxesX(axesX){
        this.axesX = axesX;
    }

    setAxesY(axesY){
        this.axesY = axesY;
    }

    attributeValue(number, textX, textY) {
        this.number = number;
        this.textX = textX;
        this.textY = textY;
    }

    draw() {
        this.context.fillStyle = "red";
        this.context.fillRect(this.axesX, this.axesY, this.width, this.height);
        this.context.fillStyle = "white";
        this.context.font = "20px Times New Roman";
        this.context.fillText(this.number, this.textX, this.textY + 15);
    }
    
    update(){
        // window.requestAnimationFrame(()=>this.animate);
        // this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
        this.draw();
    }

}
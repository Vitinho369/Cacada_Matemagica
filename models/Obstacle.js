export default class Obstacle {
  constructor() {
    this.canvas = document.getElementById("Jogo");
    this.context = this.canvas.getContext("2d");
    this.number = 0;
    this.PositionX = this.context.width;
    this.PositionY = this.context.height;
    this.width = 22;
    this.height = 22;
    this.number = 0;
    this.axesX = 0;
    this.axesY = 70;
    this.textX = 700;
    this.textY = 40;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getAxesX() {
    return this.axesX;
  }

  getAxesY() {
    return this.axesY;
  }

  setAxesX(axesX) {
    this.axesX = axesX;
  }

  setAxesY(axesY) {
    this.axesY = axesY;
  }

  attributeValue(number, textX, textY) {
    this.number = number;
    this.textX = textX;
    this.textY = textY;
  }

  draw() {
    this.context.fillStyle = "red";
    this.context.fillRect(this.axesX, 25, this.width, this.height);
    this.context.fillStyle = "white";
    this.context.font = "20px Times New Roman";
    this.context.fillText(this.number, this.textX, 40);
  }

  update() {
    // window.requestAnimationFrame(()=>this.animate);
    // this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    this.draw();
  }
}

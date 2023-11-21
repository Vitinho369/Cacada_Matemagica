export default class Coin {
  constructor() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    this.number = 0;
    this.PositionX = this.context.width;
    this.PositionY = this.context.height;
    this.width = 30;
    this.height = 30;
    this.number = 0;
    this.axesX = 0;
    this.axesY = 70;
    this.textX = 700;
    this.textY = 40;
    this.image = new Image();
    this.image.src = "../assets/coin.png";
  }

  getNumber(){
    return this.number;
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
    this.textX = axesX;
  }

  setAxesY(axesY) {
    this.axesY = axesY;
  }

  attributeValue(number, textX, textY) {
    this.number = number;
    this.textX = textX;
    this.textY = textY;
  }

  reinitial(){
    this.axesX = 0;
    this.axesY = 70;
  }

  draw() {  
    this.context.drawImage(this.image, 0,0, 226, 216, this.axesX,this.axesY, this.width,this.height);
    this.context.fillStyle = "white";
    this.context.font = "18px Times New Roman";
    if(this.number < 10)
      this.context.fillText(this.number, this.textX+10,32);
    else if(this.number >= 100)
      this.context.fillText(this.number, this.textX+1,32);
    else
      this.context.fillText(this.number, this.textX+5,32);
  }

  update() {
    this.draw();
  }
}

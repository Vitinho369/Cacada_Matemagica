export default class Player {
  constructor() {
    this.canvas = document.getElementById("Jogo");
    this.context = this.canvas.getContext("2d");
    this.imagePlayer = new Image();
    this.imagePlayer.src = "../assets/personR_resized.png";
    this.widthImage = this.imagePlayer.width;
    this.heightImage = this.imagePlayer.height;
    this.widthPerson = this.widthImage / 5;
    this.axesX = 0;
    this.axesY = 70;
    this.speed = 5;
    this.i = 0;
  }

  getAxesX() {
    return this.axesX;
  }

  getAxesY() {
    return this.axesY;
  }

  draw() {
    // this.imagePlayer.onload = () => {
    // for(let i=0; i < 5;i++){

    setInterval(() => {
      // this.context.clearRect(this.axesX, this.axesY, 40, 60);
      this.context.drawImage(
        this.imagePlayer,
        this.i * this.widthPerson,
        0,
        this.widthPerson,
        310,
        this.axesX,
        this.axesY,
        40,
        60
      );
      this.i++;
      if (this.i >= 5) {
        this.i = 0;
      }
    }, 200);
    // }
    // }; 

    // requestAnimationFrame(this.draw());
  }

  jump() {
    this.context.clearRect(this.axesX, this.axesY, 40, 60);
    this.axesY -= 10;
  }

  move(moviment) {
    this.context.clearRect(this.axesX, this.axesY, 40, 60);
    switch (moviment) {

      case 'left':
        this.axesX -= 5;
        break;

      case 'right':
        this.axesX += 5;
        break;

      case 'up':
        this.axesY -= 5;
        break;

      case 'down':
        this.axesY += 5;
        break;
    }
  }


  update() {
    // requestAnimationFrame(this.update());
    this.draw();
  }
}

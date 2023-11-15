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
    this.imagePlayer.onload = () => {
    // for(let i=0; i < 5;i++){

    setInterval(() => {
      // this.context.clearRect(this.axesX-1, this.axesY, 40, 60);
      this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
      this.context.drawImage(
        this.imagePlayer,
        this.i * this.widthPerson,
        0,
        this.widthPerson+1,
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
    }, 100);
    // }
    }; 
  }

  update() {
    // requestAnimationFrame(this.update());
    this.draw();
  }
  animate(obstacles, axesX, axesY){ 
    // this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
    this.draw();
    window.requestAnimationFrame(()=>this.animate);
  }

  jump() {
    this.axesY -= 10;
  }

  move(moviment) {
    // this.context.clearRect(this.axesX, this.axesY, 40, 60);
    switch (moviment) {

      case 'left':
        this.axesX -= this.speed;
        break;

      case 'right':
        this.axesX += this.speed;
        break;

      case 'up':
        this.axesY -= this.speed;
        break;

      case 'down':
        if(this.axesY < 70)
          this.axesY += this.speed;
        break;
    }
    this.draw();
  }
}
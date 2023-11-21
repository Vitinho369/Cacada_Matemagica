export default class Player {
  constructor() {
    this.canvas = document.getElementById("game");
    this.context = this.canvas.getContext("2d");
    this.axesX = 50;
    this.axesY = 70;
    this.speed = 5;
    this.speedY = 0;
    this.jump_height = 0;
    this.jumping = false;
    this.gravity = 1;
    this.i = 0;
    this.imagePlayer = new Image();
    this.imagePlayer.src = "../assets/personR2.png";
    // this.widthImage = this.imagePlayer.width;
    // this.heightImage = this.imagePlayer.height;
    // this.widthPerson = this.widthImage / 5;
    // this.heigthPerson = this.heightImage / 2;
  }

  getAxesX() {
    return this.axesX;
  }

  getAxesY() {
    return this.axesY;
  }

  reinitial() {
    this.axesX = 50;
    this.axesY = 70;
  }


  draw() {
        this.context.drawImage(
          this.imagePlayer,
          (this.i)* (this.imagePlayer.width/5),
          0,
          (this.imagePlayer.width/5),
          this.imagePlayer.height/2,
          this.axesX,
          this.axesY,
          40,
          60
        );
        
        this.i++;
        if (this.i >= 5) {
          this.i = 0;
        }
  }

  update() {
        
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case "ArrowUp":
          this.jump();
          break;

        default:
          break;
      }
    });
    
    if (this.jumping) {
      this.axesY += this.jump_height;
      this.jump_height += this.gravity;
      if (this.axesY >= 70) {
        this.axesY = 70;
        this.jumping = false;
        this.jump_height = 0;
      }
    }
    this.draw();
  }

  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.jump_height = -10;
    }
  }

  move(moviment) {
    switch (moviment) {
      case "up":
        this.axesY -= this.speed;
        this.jumping = true;
        break;
    }
    this.update();
  }
  collide(obstacle) {
    if (
      this.axesX + 25 >= obstacle.getAxesX() &&
      this.axesX + 25 <= obstacle.getAxesX() + obstacle.getWidth() &&
      this.axesY <= 25 &&
      this.axesY + 40 >= 25
    ) {
      console.log("collide");
      return true;
    }
    return false;
  }
}

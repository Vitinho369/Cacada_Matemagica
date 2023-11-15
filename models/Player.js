export default class Player {
  constructor() {
    this.canvas = document.getElementById("Jogo");
    this.context = this.canvas.getContext("2d");
    this.imagePlayer = new Image();
    this.imagePlayer.src = "../assets/personR_resized.png";
    this.widthImage = this.imagePlayer.width;
    this.heightImage = this.imagePlayer.height;
    this.widthPerson = this.widthImage /5;
    this.heigthPerson = this.heightImage/2;
    this.axesX = 0;
    this.axesY = 70;
    this.speed = 5;
    this.gravity = 4;
    this.i = 0;
  }

  getAxesX() {
    return this.axesX;
  }

  getAxesY() {
    return this.axesY;
  }

  reinitial(){
    this.axesX = 0;
    this.axesY = 70;
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
        this.heigthPerson,
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

      if(this.axesY < 70){
        // this.axesY += this.gravity;
      }
    this.draw();
  }
  // animate(){ 
  //   // this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
   
  //   requestAnimationFrame(()=>this.animate);
  //   console.log(this.axesY);
  //   this.update();
  // }

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
    this.update();
  }

  
  collide(obstacle) {

    // console.log("player.getAxesY(): " + player.getAxesY());
    // console.log("player.getAxeX(): " + player.getAxesX());
    // console.log("(this.axesY + this.height): " + (this.axesX + 30));
    // console.log("obstacle.getAxesX() + obstacle.getWidth(): " +(obstacle.getAxesX() + obstacle.getWidth()));
    // console.log("(this.axesX + this.width): " + (this.axesX + this.width));
    // console.log(this.axesX + 10 >= obstacle.getAxesX() && 
    // (this.axesX + 10) <= obstacle.getAxesX() + obstacle.getWidth());

    if (this.axesX+ 15 >= obstacle.getAxesX() && 
    (this.axesX + 15) <= obstacle.getAxesX() + obstacle.getWidth()
    && this.axesY <= obstacle.getAxesY() && this.axesY+40 >= obstacle.getAxesY()) {
          console.log("collide");
        return true;
    }
    return false;
  }
}
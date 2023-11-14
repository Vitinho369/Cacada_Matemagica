export default class Player {
  constructor() {
    this.canvas = document.getElementById("Jogo");
    this.context = this.canvas.getContext("2d");
    this.imagePlayer = new Image();
    this.imagePlayer.src = "../assets/personR_resized.png";
    this.widthImage = this.imagePlayer.width;
    this.heightImage = this.imagePlayer.height;
    this.widthPerson = this.widthImage / 5;
    this.x = 0;
    this.y = 70;
    this.speed = 5;
    this.i = 0;
  }

  draw() {
    // this.imagePlayer.onload = () => {
      // for(let i=0; i < 5;i++){

      // setInterval(() => {
        this.context.clearRect(this.x, 0, this.widthPerson, 180);
        this.context.drawImage(
          this.imagePlayer,
          this.i * this.widthPerson,
          0,
          this.widthPerson,
          310,
          this.x,
          this.y,
          40,
          60
        );
       this.i++;
        if (this.i >= 5) {
          this.i = 0;
        }
      // }, 200);
      // }
    // }; 

    requestAnimationFrame(this.draw());
  }

  jump(){
      this.y-=10;
  }

  update() {}
}

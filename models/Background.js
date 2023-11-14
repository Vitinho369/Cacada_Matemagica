export default class Background {
<<<<<<< HEAD
  constructor() {
    this.canvas = document.getElementById("Jogo");
    this.context = this.canvas.getContext("2d");
    this.width = this.context.width;
    this.heigth = this.context.heigth;
    this.BackgroundImage = new Image();
    this.BackgroundImage.src = "../assets/ORS97Z0.jpg";
  }
=======
    constructor() {
        this.canvas = document.getElementById("Jogo");
        this.context = this.canvas.getContext("2d");
        this.width = this.context.width;
        this.height = this.context.height;
        this.imagePlayer = new Image();
        this.imagePlayer.src = "../assets/player.png";
    }
>>>>>>> bce55f7e41ae6b3a2ec64f8662ffae75eb1822f0

  draw() {
    this.BackgroundImage.onload = () => {
      // this.context.clearRect(0, 0,300,354);
      this.context.drawImage(this.BackgroundImage, 0, 0);
    };
  }
}

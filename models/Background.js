export default class Background {
  constructor() {
    this.canvas = document.getElementById("Jogo");
    this.context = this.canvas.getContext("2d");
    this.width = this.context.width;
    this.heigth = this.context.heigth;
    this.BackgroundImage = new Image();
    this.BackgroundImage.src = "../assets/ORS97Z0.jpg";
  }

  draw() {
    this.BackgroundImage.onload = () => {
      // this.context.clearRect(0, 0,300,354);
      this.context.drawImage(this.BackgroundImage, 0, 0);
    };
  }
}

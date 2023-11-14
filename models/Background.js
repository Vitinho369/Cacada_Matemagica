export default class Background {
    constructor() {
        this.canvas = document.getElementById("Jogo");
        this.context = this.canvas.getContext("2d");
        this.width = this.context.width;
        this.height = this.context.height;
        this.imagePlayer = new Image();
        this.imagePlayer.src = "../assets/player.png";
    }


    draw() {
        this.imagePlayer.onload = () => {
            // this.context.clearRect(0, 0,300,354);
            this.context.drawImage(this.imagePlayer, i, 82, 300, 354, 0, 0, 50, 70);
        }
    }
}
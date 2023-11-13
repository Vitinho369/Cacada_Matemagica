export default class Player {
    constructor() {
        this.canvas = document.getElementById("Jogo");
        this.context = this.canvas.getContext("2d");
        this.imagePlayer = new Image();
        this.imagePlayer.src = "../assets/personR.png";
        this.widthImage = this.imagePlayer.width;
        this.heightImage = this.imagePlayer.height;
        this.widthPerson = this.widthImage / 5;
    }

    draw() {

        this.imagePlayer.onload = () => {
            let i = 0;
            // for(let i=0; i < 5;i++){

            setInterval(() => {
                this.context.clearRect(0, 0, this.widthPerson, 180);
                this.context.drawImage(this.imagePlayer, i * this.widthPerson, 0, this.widthPerson, 180, 0, 0, 50, 80);
                i++;
                if (i >= 5) {
                    i = 0;
                }
            }, 500);
            // }   

        }
    }

    update() {

    }
}
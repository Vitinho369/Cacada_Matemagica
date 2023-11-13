export class Background{
    constructor(){
        this.canvas = document.getElementById("Jogo");
        this.context = this.canvas.getContext("2d");
        this.imagePlayer = new Image();
        this.imagePlayer.src = "../assets/player.png";
    }

    
    draw(){
        this.imagePlayer.onload = () => {
            this.context.clearRect(0, 0,300,354);
            image.push(this.context.drawImage(this.imagePlayer, i, 82,300,354,0 ,0, 50,70));   
        }
    }
}
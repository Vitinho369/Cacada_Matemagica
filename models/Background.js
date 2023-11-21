export default class Background{
    constructor(){
        this.canvas = document.getElementById("game");
        this.context = this.canvas.getContext("2d");
        this.image = new Image();
        this.image.src = "../assets/background.jpg";
        this.speed = 120;
        this.axesPostionX = this.speed;
        this.axesPostionX2 = -6100;
    }

    accelerate(){
        this.speed+=10;
    }

    draw(){
        this.context.drawImage(this.image,this.axesPostionX,0,this.image.width, this.image.height, 0,0,300,170);
        this.context.drawImage(this.image,this.axesPostionX2,0,this.image.width, this.image.height, 0,0,300,170);
        
        if(this.axesPostionX > 6100) 
            this.axesPostionX = this.speed;
        else
            this.axesPostionX += this.speed;

        if(this.axesPostionX2 > 0) 
            this.axesPostionX2 = -6100 + this.speed;
        else
            this.axesPostionX2 += this.speed;
    }
    
    update(){
        this.draw();
    }
}
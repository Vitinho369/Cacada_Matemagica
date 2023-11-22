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
  }

  getAxesX() {
    return this.axesX;
  }

  getAxesY() {
    return this.axesY;
  }

  //Reinicia o personagem em sua posição inicial no jogo
  reinitial() {
    this.axesX = 50;
    this.axesY = 70;
  }

  //Desenha o personagem na tela
  draw() {
        this.context.drawImage(this.imagePlayer, (this.i)*(this.imagePlayer.width/5),
          0, (this.imagePlayer.width/5), this.imagePlayer.height/2,this.axesX, this.axesY,
          40,60);
        
        this.i++;
        if (this.i >= 5) {
          this.i = 0;
        }
  }

  //Atualiza a tela e busca por eventos para o jogador possa interagir com o jogo
  update() {
        
    document.addEventListener("keydown", (event) => {
      if(event.key == " ")
          this.jump();
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

  //Habilita e desabilita o pulo do perosnagem
  jump() {
    if (!this.jumping) {
      this.jumping = true;
      this.jump_height = -10;
    }
  }

  //Verificação a colisão entre os objetos do jogo de acordo com a medida do personagem
  collide(obstacle) {
    if (
      this.axesX + 25 >= obstacle.getAxesX() &&
      this.axesX + 25 <= obstacle.getAxesX() + obstacle.getWidth() &&
      this.axesY <= 25 &&
      this.axesY + 40 >= 25
    ) {
      return true;
    }
    return false;
  }
}
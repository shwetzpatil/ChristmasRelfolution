class Elf {
  constructor(game) {
    this.game = game;
    // this.canvas = document.getElementById("canvas");
    // this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = Math.floor(Math.random() * 6) * 100;
    this.dx = 1;

    this.currentFrame = 0;
    this.totalFrames = 2;

    this.spriteHeight = 100;
    this.spriteWidth = 200 / 2;
    this.srcX = this.currentFrame * this.spriteWidth;
    this.srcY = 0;

    this.animTick = 30;
    this.currentAnimTick = 0;

    // this.draw();
  }
  
  draw(ctx) {
    let img = new Image();
    img.src = ('./assets/elf.png');

    if (this.currentAnimTick < this.animTick) {
      this.currentAnimTick++;
    } else {
      if (this.currentFrame < this.totalFrames - 1) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
      this.currentAnimTick = 0;
    }

    this.srcX = this.currentFrame * this.spriteWidth;
    ctx.drawImage(img, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
  }

  update(ctx) {
    if(this.x + this.spriteWidth < this.game.canvas.width) {
      this.x += this.dx;
    } else {
      // lose condition
    }
    this.draw(ctx);
  }
}
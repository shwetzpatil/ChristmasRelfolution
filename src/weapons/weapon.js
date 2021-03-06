class Weapon {
  constructor(x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 100;
    this.isActive = false;
    this.currentFrame = 0;
    this.srcY = 0;
    this.srcX = this.currentFrame * this.w;
    this.currentAnimTick = 0;
    this.img = new Image();
  }

  contains(mx, my) {
    return this.x <= mx && this.x + this.w >= mx &&
      this.y <= my && this.y + this.h >= my;
  }
}
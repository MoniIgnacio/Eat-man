class Shot {
  constructor(xParam, yParam, owner) {
    this.img = new Image();
    if (owner === "player") {
      this.img.src = "./images/explosionPlayer.png";
    } else if (owner === 'bola'){
      this.img.src = "./images/explosionBola.png";
    }

    this.x = xParam;
    this.y = yParam - 20;
    this.w = 100;
    this.h = 100;
    this.speed = 5;
    this.isShooting = false;
  }

  drawShot = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  moveShot = () => {
    this.x = this.x + this.speed;
  };

  moveShotBola = () => {
    this.x = this.x - this.speed;
  };
}
class Shot {
  constructor(xParam, yParam) {
    this.img = new Image();
    this.img.src = "./images/explosion.png";
    this.x = xParam;
    this.y = yParam-20;
    this.w = 350;
    this.h = 100;
    this.isShooting = false; 
  }
  drawShot = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}

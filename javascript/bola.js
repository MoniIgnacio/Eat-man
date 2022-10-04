class Bola {
  constructor(yParam, sParam, rParam, angle) {
    this.x = canvas.width;
    this.y = yParam;
    this.r = rParam;
    this.speed = sParam;
    this.ang = angle;
    if (angle === true) {
      this.ang = 2.8;
    } else { this.ang = 4}
  }

  drawBola = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0.8*Math.PI, this.ang , true);
    
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.lineTo(this.x, this.y);
    
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
  };

  moveBola = () => {
    this.x -= this.speed;
  };
}

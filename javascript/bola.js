class Bola {
  constructor() {
    this.x = Math.floor(Math.random() * 900);
    this.y = Math.floor(Math.random() * 500);
    this.r = 30;
    this.arc = 20;
    // this.randomX = Math.floor(Math.random()*900)
    // this.randomY = Math.floor(Math.random()*500)
  }
  drawBola = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 1.5 * Math.PI);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    ctx.lineTo(this.x - this.r + this.arc, this.y + this.r - this.arc);
    ctx.lineTo(this.x + this.r, this.y);
    ctx.fill();
    ctx.stroke();
  };
  
}

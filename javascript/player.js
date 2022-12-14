class Player {
  constructor() {
    // Propiedades
    this.img = new Image();
    this.img.src = "./images/tini-up.png"
    this.x = 50;
    this.y = 500;
    this.w = 50;
    this.h = 50;
    this.speed = 30;
  }

  // Metodos

  drawPlayer = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };

  movimientoPlayerRight = () => {
    gameObj.playerObj.x = gameObj.playerObj.x + gameObj.playerObj.speed;    
  };

  movimientoPlayerLeft = () => {
    gameObj.playerObj.x = gameObj.playerObj.x - gameObj.playerObj.speed;
  };

  movimientoPlayerUp = () => {
    gameObj.playerObj.y = gameObj.playerObj.y - gameObj.playerObj.speed;
  };

  movimientoPlayerDown = () => {
    gameObj.playerObj.y = gameObj.playerObj.y + gameObj.playerObj.speed;
  };
}

class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/background-game.png";
    this.playerObj = new Player();
    this.bolaObj = new Bola();
    this.shotObj = new Shot();
    this.shotArr = [];
    this.frames = 0;
    this.score = 0;
    this.GameOn = true;
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };
  colicionPlayerBola = () => {
    if (
      this.bolaObj.y > this.playerObj.y - this.bolaObj.r &&
      this.bolaObj.x > this.playerObj.x - this.bolaObj.r &&
      this.bolaObj.x < this.playerObj.x + 90 && //?
      this.bolaObj.y < this.playerObj.y + 90 // ?
    ) {
      console.log('colision')
      // this.gameOver();
    }
  };
  disparoFlama = () => {
    if (gameObj.shotObj.isShooting === true) { 
      let nuevoShot = new Shot (gameObj.playerObj.x, gameObj.playerObj.y)
      this.shotArr.push(nuevoShot);
      nuevoShot.drawShot();
    }
  };
  //   addBola = () =>{
  //     if (this.frames % 120 === 0){
  //         // let randomNum = Math.floor(Math.random() * 500)
  //         let nuevaBola = new Bola ();
  //         this.bolaArr.push(nuevaBola);
  //     }
  //   }

  gameOver = () => {
    this.GameOn = false;
    canvas.style.display = "none";
    playAgainScreen.style.display = "flex";
  };
  gameLoop = () => {
    // 1. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Acciones y movimientos.
    this.playerObj.movimientoPlayer();
    this.colicionPlayerBola();
    this.shotArr.forEach((eachShot) => {
      eachShot.moveShot();
    })

    // 3. Dibujo de elementos.
    this.drawFondo();
    this.bolaObj.drawBola();
    this.playerObj.drawPlayer();
    this.disparoFlama();
    this.shotArr.forEach((eachShot) => {
      eachShot.drawShot();
    })


    // 4. Control de recursion.
    if (this.GameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "../images/background-game.png";
    this.playerObj = new Player();
    this.bolaObj = new Bola();
    // this.bolaArr = [];
    this.frames = 0;
    this.score = 0;
    this.GameOn = true;
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };
  colicionPlayerBola = () =>{
        if (
          this.playerObj.x < this.bolaObj.x + this.bolaObj.r &&
          this.playerObj.x + this.playerObj.r > this.bolaObj.x &&
          this.playerObj.y < this.bolaObj.y + this.bolaObj.h &&
          this.playerObj.h + this.playerObj.y > this.bolaObj.y
        ) {
          // Collision detected
          console.log('chocando');
          // this.gameOver()
        };
  }
//   addBola = () =>{
//     if (this.frames % 120 === 0){
//         // let randomNum = Math.floor(Math.random() * 500)
//         let nuevaBola = new Bola ();
//         this.bolaArr.push(nuevaBola);
//     }
//   } 

  
  gameOver = () =>{
    this.GameOn = false;
    canvas.style.display= 'none';
    playAgainScreen.style.display = 'flex';
  }
  gameLoop = () => {
    // 1. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Acciones y movimientos.
    this.playerObj.movimientoPlayer();
    this.colicionPlayerBola();
    this.bolaObj.movimientoBola();
    // this.addBola();

    // 3. Dibujo de elementos.
    this.drawFondo();
    this.bolaObj.drawBola();
    this.playerObj.drawPlayer();

    // 4. Control de recursion.
    if (this.GameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

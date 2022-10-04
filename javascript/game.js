class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/background-game.png";
    this.playerObj = new Player();
    this.bolaObj = new Bola();
    this.shotObj = new Shot();
    this.shotArr = [];
    this.bolaArr = [];
    this.frames = 0;
    this.score = 0;
    this.GameOn = true;
  }

  drawFondo = () => {
    ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
  };

  colisionPlayerBola = () => {
    this.bolaArr.forEach((eachBola) => {
        if (
          eachBola.y > this.playerObj.y - eachBola.r &&
          eachBola.x > this.playerObj.x - eachBola.r &&
          eachBola.x < this.playerObj.x + 90 && //?
          eachBola.y < this.playerObj.y + 90 // ?
          ) {
            // console.log('colision')
            // this.gameOver();
          }
      })
  };

  disparoFlama = () => {
    if (gameObj.shotObj.isShooting === true) { 
      let nuevoShot = new Shot (gameObj.playerObj.x, gameObj.playerObj.y)
      this.shotArr.push(nuevoShot);        
        nuevoShot.drawShot();
      } 
  };

  // removeFlama = () => {
  //   if (this.shotArr.length !== 0 && this.shotArr[0].x > canvas.width && this.shotArr[0].x < canvas.width +20){
  //     this.shotArr.unshift()
  //     console.log(this.shotArr.length);
  //   }
  // }

  colisionFlamaBola = () => {
      this.shotArr.forEach((eachShot, indexShot) => {
        this.bolaArr.forEach((eachBola, indexBola) => {
          if (
            eachBola.y > eachShot.y &&
            eachBola.x > eachShot.x - eachBola.r &&
            eachBola.x < eachShot.x + 90 && //?
            eachBola.y < eachShot.y + 90 // ? 
          ) {
            this.shotArr.splice(indexShot,1)
            this.bolaArr.splice(indexBola,1)
            this.score = this.score +100
            }
        })
      })
    };

  addBola = () =>{
    if (this.frames % 120 === 0){
        let randomNum = Math.floor(Math.random() * 500)
        let nuevaBola = new Bola (randomNum);
        this.bolaArr.push(nuevaBola);
    }
  }

  // disparoFlamaBola = () => {
  //   if ( this.frames % 120 ===0){

  //   }
  // }

  gameOver = () => {
    this.GameOn = false;
    canvas.style.display = "none";
    playAgainScreen.style.display = "flex";
  };

  gameLoop = () => {
    this.frames += 1
    // 1. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Acciones y movimientos.
    this.playerObj.movimientoPlayer();
    this.shotArr.forEach((eachShot) => {
      eachShot.moveShot();
    })

    this.addBola();
    this.bolaArr.forEach((eachBola) => {
      eachBola.moveBola();
    })

    this.disparoFlama();
    // this.disparoFlamaBola();
    this.colisionPlayerBola();
    this.colisionFlamaBola();
    
    
    // 3. Dibujo de elementos.
    this.drawFondo();
    this.bolaArr.forEach((eachBola) => {
      eachBola.drawBola();
    })
    this.playerObj.drawPlayer();

    this.shotArr.forEach((eachShot) => {
      eachShot.drawShot();
    })


    // 4. Control de recursion.
    if (this.GameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };

}
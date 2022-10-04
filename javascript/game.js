class Game {
  constructor() {
    this.fondo = new Image();
    this.fondo.src = "./images/background-game.png";
    this.playerObj = new Player();
    this.bolaObj = new Bola();
    this.shotObj = new Shot();
    this.shotArrPlayer = [];
    this.shotArrBola = [];
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
        eachBola.x < this.playerObj.x + 90 &&
        eachBola.y < this.playerObj.y + 90
      ) {
        this.gameOver();
      }
    });
  };
  colisionFramaPlayer = () => {
      this.shotArrBola.forEach((eachShot, indexShot) => {
        if (
          eachShot.x < this.playerObj.x + this.playerObj.w &&
          eachShot.x > this.playerObj.x &&
          eachShot.y < this.playerObj.y && 
          eachShot.y > this.playerObj.y - this.playerObj.h
        ) {
          this.shotArrBola.splice(indexShot, 1);
          this.score = this.score - 50;
        }
      });
  };

  disparoFlama = () => {
    if (gameObj.shotObj.isShooting === true) {
      let nuevoShot = new Shot(
        gameObj.playerObj.x,
        gameObj.playerObj.y,
        "player"
        );
        this.shotArrPlayer.push(nuevoShot);
        nuevoShot.drawShot();
    }
  };

  colisionFlamaBola = () => {
    this.shotArrPlayer.forEach((eachShot, indexShot) => {
      this.bolaArr.forEach((eachBola, indexBola) => {
        if (eachBola.y > eachShot.y &&
            eachBola.x > eachShot.x - eachBola.r &&
            eachBola.x < eachShot.x + 90 &&
            eachBola.y < eachShot.y + 90 ){
              this.shotArrPlayer.splice(indexShot, 1);
              this.bolaArr.splice(indexBola, 1);
              this.score = this.score + 100;
            }
      });
    });
  };

  addBola = () => {
    if (this.frames % 120 === 0) {
      let randomNum = Math.floor(Math.random() * 500);
      let nuevaBola = new Bola(randomNum);
      this.bolaArr.push(nuevaBola);
    }
  };

  disparoFlamaBola = () => {
    this.bolaArr.forEach((eachBola) => {
      if (eachBola.x === 800) {
        let nuevoShot = new Shot(eachBola.x, eachBola.y, "bola");
        this.shotArrBola.push(nuevoShot);
        nuevoShot.drawShot();
      }
    });
  };
  scoreGame = () => {
    if (this.score < 0 ){
      this.gameOver();
    } scoreDOM.innerHTML = +this.score
  }
  drawScore = () => {
    ctx.font = "30px Silkscreen";
    ctx.fillText (`Score ${this.score}`, 100 , 50)
    ctx.fillStyle = 'yellow'
    ctx.textAlign = 'center'
  }

  gameOver = () => {
    this.GameOn = false;
    canvas.style.display = "none";
    playAgainScreen.style.display = "flex";
  };

  gameLoop = () => {
    this.frames += 1;
    // 1. Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. Acciones y movimientos.
    // this.playerObj.movimientoPlayer();
    this.shotArrPlayer.forEach((eachShot) => {
      eachShot.moveShot();
    });
    this.shotArrBola.forEach((eachShot) => {
      eachShot.moveShotBola();
    });

    this.addBola();
    this.bolaArr.forEach((eachBola) => {
      eachBola.moveBola();
    });

    this.disparoFlama();
    this.disparoFlamaBola();
    this.colisionPlayerBola();
    this.colisionFlamaBola();
    this.colisionFramaPlayer();
    this.scoreGame();

    // 3. Dibujo de elementos.
    this.drawFondo();
    this.drawScore();
    this.bolaArr.forEach((eachBola) => {
      eachBola.drawBola();
    });
    
    this.shotArrPlayer.forEach((eachShot) => {
      eachShot.drawShot();
    });
    
    this.shotArrBola.forEach((eachShot) => {
      eachShot.drawShot();
    });
    this.playerObj.drawPlayer();

    // 4. Control de recursion.
    if (this.GameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}

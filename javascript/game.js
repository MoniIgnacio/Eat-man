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
    this.bolaArr.forEach((eachBola, indexBola) => {
      if (
        eachBola.y > this.playerObj.y - eachBola.r &&
        eachBola.x > this.playerObj.x - eachBola.r &&
        eachBola.x < this.playerObj.x + 90 &&
        eachBola.y < this.playerObj.y + 90
      ){
        this.bolaArr.splice(indexBola, 1);
        this.score -= 1000;
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
        ){
          this.shotArrBola.splice(indexShot, 1);
          this.score -= 400;
        }
      });
  };

  disparoFlama = () => {
    this.shotArrPlayer.forEach((eachShot, indexShot) => {
      if (eachShot.x > canvas.width){
        this.shotArrPlayer.splice(indexShot,1)
      }
    });
    if (this.frames % 5 === 0 && this.shotArrPlayer.length <= 10 && gameObj.shotObj.isShooting === true) {
        let nuevoShot = new Shot(gameObj.playerObj.x, gameObj.playerObj.y,"player");
          this.shotArrPlayer.push(nuevoShot);
          nuevoShot.drawShot();
    };
    if (this.bolaArr.length >= 8 && gameObj.shotObj.isShooting === true){
      let nuevoShot = new Shot(gameObj.playerObj.x, gameObj.playerObj.y, "player");
        this.shotArrPlayer.push(nuevoShot);
        nuevoShot.drawShot();
    }
  }

  colisionFlamaBola = () => {
    this.shotArrPlayer.forEach((eachShot, indexShot) => {
      this.bolaArr.forEach((eachBola, indexBola) => {
        if (eachBola.y > eachShot.y &&
            eachBola.x > eachShot.x - eachBola.r &&
            eachBola.x < eachShot.x + 90 &&
            eachBola.y < eachShot.y + 90 ){
              this.shotArrPlayer.splice(indexShot, 1);
              this.bolaArr.splice(indexBola, 1);
              this.score += 100;
            }
      });
    });
  };

  colisionBolaCanvas = () => {
    this.bolaArr.forEach ((eachBola, indexBola)=> {
      if (eachBola.x < -60){
        this.bolaArr.splice(indexBola, 1);
        this.score -= 50 
      }
    })
  }

  addBola = () => {
    let randomNum = Math.floor(Math.random() * 550);

    if (this.frames % 120 === 0 ) {
      let nuevaBola = new Bola(randomNum, 2, 30);
      this.bolaArr.push(nuevaBola);
    } 
    if (this.score >= 1000 && this.frames % 200 === 0) {
      let nuevaBola = new Bola(randomNum, 4, 20);
      this.bolaArr.push(nuevaBola);
    }
    if (this.score >= 1500 && this.frames % 200 === 0) {
      let nuevaBola = new Bola(randomNum, 6, 20);
      this.bolaArr.push(nuevaBola);
    }
    // bola gigante
    if (this.score >= 2000 && this.frames === 3000) {
      let nuevaBola = new Bola(canvas.height*0.5, 4, 300);
      this.bolaArr.push(nuevaBola);
    }
    // peloton por solo 100 frames
    if (this.score >= 3500 && this.frames > 3800 && this.frames < 3900) {
        let nuevaBola = new Bola(randomNum, 4, 30);
        this.bolaArr.push(nuevaBola);
    }
    if (this.score >= 4500 && this.frames > 4800) {
      let nuevaBola = new Bola(randomNum, 4, 30);
      this.bolaArr.push(nuevaBola);
    }
    // mini bolas
    if (this.score >= 4500 && this.frames % 500 === 0) {
      let nuevaBola = new Bola(randomNum, 8, 15);
      this.bolaArr.push(nuevaBola);
    }
  };

  disparoFlamaBola = () => {
    this.bolaArr.forEach((eachBola) => {
      if (eachBola.x === 800 && this.score >= 800) {
        let nuevoShot = new Shot(eachBola.x, eachBola.y, "bola");
        this.shotArrBola.push(nuevoShot);
        nuevoShot.drawShot();
      }
    });
  };

  scoreGame = () => {
    if (this.score < 0 ){
      this.gameOver();
      scoreDOM.innerHTML = 0
    } else scoreDOM.innerHTML = +this.score
  }
  
  drawScore = () => {
    ctx.font = "30px Silkscreen";
    ctx.fillText (`Score ${this.score}`, 120 , 60)
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
    this.colisionBolaCanvas();
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

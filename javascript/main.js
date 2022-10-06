// VARIABLES GLOBALES
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.querySelector("#start-btn");
const playAgainBtn = document.querySelector("#play-again-btn");
const startScreen = document.querySelector("#start-screen");
const playAgainScreen = document.querySelector("#play-again-screen");
const scoreDOM = document.querySelector("#score span");

let gameObj;

// FUNCIONES GENERALES
const startGame = () => {
  // Ocultar el inicio
  startScreen.style.display = "none";
  // Mostrar canvas
  canvas.style.display = "block";

  // Iniciar el juego
  // Nueva version del juego
  gameObj = new Game();

  // Iniciar el juego
  gameObj.gameLoop();
};

const playAgain = () => {
  // Ocultar el inicio
  playAgainScreen.style.display = "none";
  // Mostrar canvas
  startScreen.style.display = "block";
};

// ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
playAgainBtn.addEventListener("click", playAgain);
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight" && gameObj.playerObj.x < canvas.width - 80) {
    gameObj.playerObj.movimientoPlayerRight()    
  } else if (event.code === "ArrowLeft" && gameObj.playerObj.x > 20) {
    gameObj.playerObj.movimientoPlayerLeft()
  } else if (event.code === "ArrowUp" && gameObj.playerObj.y > 20) {
    gameObj.playerObj.movimientoPlayerUp()
  } else if (event.code === "ArrowDown" && gameObj.playerObj.y < canvas.height - 70) {
    gameObj.playerObj.movimientoPlayerDown()
  }
});
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight" && gameObj.playerObj.x < canvas.width - 80) {
    gameObj.playerObj.movimientoPlayerRight()
  } else if (event.code === "ArrowLeft" && gameObj.playerObj.x > 20) {
    gameObj.playerObj.movimientoPlayerLeft()
  } else if (event.code === "ArrowUp" && gameObj.playerObj.y > 20) {
    gameObj.playerObj.movimientoPlayerUp()
  } else if (event.code === "ArrowDown" && gameObj.playerObj.y < canvas.height - 70) {
    gameObj.playerObj.movimientoPlayerDown()
  }
});

window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObj.shotObj.isShooting = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.code === "Space") {
    gameObj.shotObj.isShooting = false;
  }
});

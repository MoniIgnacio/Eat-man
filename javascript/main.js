// VARIABLES GLOBALES
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const startBtn = document.querySelector("#start-btn");
const startScreen = document.querySelector("#start-screen");
const playAgainScreen = document.querySelector('play-again-screen')

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
  // console.log(gameObj)

  // Iniciar el juego
  gameObj.gameLoop();
};

// ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight" && gameObj.playerObj.x < canvas.width - 80) {
    gameObj.playerObj.x = gameObj.playerObj.x + gameObj.playerObj.speed;
    // console.log('moviendo derecha')
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowLeft" && gameObj.playerObj.x > 20) {
    gameObj.playerObj.x = gameObj.playerObj.x - gameObj.playerObj.speed;
    // console.log('moviendo izquierda')
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" && gameObj.playerObj.y > 20) {
    gameObj.playerObj.y = gameObj.playerObj.y - gameObj.playerObj.speed;
    // console.log('moviendo up')
  }
});
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowDown" && gameObj.playerObj.y < canvas.height - 70) {
    gameObj.playerObj.y = gameObj.playerObj.y + gameObj.playerObj.speed;
    // console.log('moviendo down')
  }
});

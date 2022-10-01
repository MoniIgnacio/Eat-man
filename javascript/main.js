// VARIABLES GLOBALES
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const startBtn = document.querySelector('#start-btn')
const startScreen = document.querySelector('#start-screen')

let gameObj;



// FUNCIONES GENERALES
const startGame = ()=>{

    // Ocultar el inicio
    startScreen.style.display = 'none';
    // Mostrar canvas
    canvas.style.display = 'block' 

    // Iniciar el juego
    // Nueva version del juego
    gameObj = new Game()
    // console.log(gameObj)

    // Iniciar el juego
    gameObj.gameLoop(); 
}




 

// ADD EVENT LISTENERS
startBtn.addEventListener('click', startGame);
window.addEventListener('keydown',(event)=>{
    if (event.code === 'ArrowRight'){
        gameObj.playerObj.x = gameObj.playerObj.x +20
        console.log('moviendo derecha')
    }
})

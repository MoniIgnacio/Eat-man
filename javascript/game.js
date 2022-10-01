class Game {
    constructor(){
        this.fondo = new Image();
        this.fondo.src = '../images/background-game.png'
        //player
        this.playerObj = new Player();

        this.GameOn = true;
    }

    drawFondo = ()=>{
        ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
        // console.log('dibujando fondo')
    }
    gameLoop = ()=>{
 
        // 1. Limpiar el canvas
        ctx.clearRect (0, 0, canvas.width, canvas.height);

        // 2. Acciones y movimientos.

        // 3. Dibujo de elementos.
        this.drawFondo();
        this.playerObj.drawPlayer();

        // 4. Control de recursion.
        if(this.GameOn === true){
            requestAnimationFrame(this.gameLoop)
        }
    }
}
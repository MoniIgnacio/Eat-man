# Eat-Man

## Description

Eat-Man es un juego donde el jugador se puede mover en x e y, a su vez disparar elementos para defenderse de sus enemigos y sobrevivir. 

* El juego aumenta su dificultad en relacion a la cantidad de enemigos eliminados.                   

## MVP (DOM - CANVAS)

- El jugador 
    * Puede recorrer todo el canvas sin salir de el.
    * El jugador aparecera ubicado en la parte inferior izquierda del canvas. 
    * Posee un arma para defenderse y dispara una cantidad limitada de municiones.
    * El movimiento del jugador se realiza con las flechas y dispara con el espacio.
    * Cuando es atacado por el enemigo disminuira.

- Enemigo:
    * Ingresan al juego desde la parte derecha de la pantalla y aumentan su velocidad en relacion al score obtenido por el jugador. 
    * Ataques hacia el jugador en relacion al score obtenido.
    * Cuando es atacado por jugador 1 muere.


## Backlog

- Posibilidad de elegir la dificultad en el comienzo del juego.
- Adherir un elemento que muestre la cantidad de disparos disponibles para el jugador.
- Realizar cambios de imagen en relacion a la posicion del jugador y del enemigo.


## Data Structure

# main.js

- startGame () {}
- playAgain () {}

# game.js

- Game () {}
- drawFondo () {}
- colisionPlayerBola () {}
- colisionFramaPlayer () {}
- colisionFlamaBola () {}
- colisionBolaCanvas () {}
- addBola () {}
- disparoFlamaBola () {}
- scoreGame () {}
- gameOver () {}
- gameLoop () {}



# player.js 

- Player () {
    this.img; 
    this.img; .src
    this.x; 
    this.y;  
    this.w; 
    this.h; 
    this.speed;  
}
- drawPlayer () {}
- movimientoPlayerRight () {}
- movimientoPlayerLeft () {}
- movimientoPlayerUp () {}
- movimientoPlayerDown () {}

# bola.js 

- Bola () {
    this.x; 
    this.y; 
    this.r;
    this.speed;
    this.ang; 
}
- drawBola () {}
- moveBola () {}

# shot.js 

- Shot (xParam, yParam, owner) {
    this.img; 
    this.img; .src
    this.x;  
    this.y; 
    this.w; 
    this.h; 
    this.speed; 
    this.isShooting;
}
- drawShot () {}
- moveShot () {}
- moveShotBola () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- startScreen
- playAgainScreen


## Task

- main - buildDom
- main - buildStartScreen
- main - addEventListener
- main - buildStartScreen
- main - buildPlayAgainScreen
- game - gameLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- player - drawPlayer
- player - movePlayer
- game - addShot
- bola - draw
- bola - move
- bola - shoot
- game - addSpeed
- game - addBola
- game - checkShotCollisions
- game - checkPlayer-EnemyCollisions
- game - GameOver
- game - addEventListener

## Links


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/MoniIgnacio/Eat-man)
[Link Deploy](https://moniignacio.github.io/Eat-man/)
### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/...)
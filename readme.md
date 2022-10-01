# Eat-Man

## Description

Eat-Man es un juego donde el jugador se puede mover en x e y, a su vez disparar elementos para defenderse de sus enemigos y sobrevivir. 

* El juego sube niveles: - En relacion a la cantidad de enemigos eliminados.                        
                         - Se agregan enemigos por Frames y por eliminaciones.

## MVP (DOM - CANVAS)

Pasos a seguir 
2./ html 
3./ gameloop
4./ jugador movimiento
5./ bola
6. colicion de bola con jugador 
7. disparo jugador 
8. colicion de bola con disparo
9. disparo random de bola 
10. colicion de disparo conjugador
11. colicion de pelota con jugador gameOver 


- El juego termina cuando:
    * Se elimina el rival.
    * (Cuando se queda sin vida.)
    * (Cuando se finaliza cierta cantidad de tiempo)

- El jugador 1:
    * Puede recorrer todo el canvas sin salir de el.
    * El jugador aparecera en bot izq. 
    * Posee arma para defenderse y dispara.
    * Se mueve con las flechas y dispara con el espacio.
    * Cuando es atacado por Bola lo mata (disminuye vida).

- Bola:
    * Aparece desde afuera del canvas (aumentan con Frames)   
    * Dirección random.
    * Ataques random. (dirigidos a jugador 1 con delay de ataque que disminuye en relacion a los FPS)
    * Cuando es atacado por jugador 1 muere (disminuye vida)



## Backlog

- Va aumentando un score.
- Elegir la dificultad ( disminuir los frames del ataque de Bola / limitar disparos ).







## Data Structure

# main.js

- buildSplashScreen () {}
- buildGameScreen () {}
- buildGameOverScreen () {}

# game.js

- Game () {}
- starLoop () {}
- checkCollisions () {}
- addTentacle () {}
- clearCanvas () {}
- updateCanvas () {}
- drawCanvas () {}
- GameOver () {}

# ship.js 

- Ship () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- shoot () {}
- checkScreenCollision () {}

# tentacle.js 

- Tentacle () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionBotton () {}

# cannonball.js 

- Cannonball () {
    this.x;
    this.y;
    this.direction;
    this.size
}
- draw () {}
- move () {}
- checkCollisionTop () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- tentacle - draw
- tentacle - move
- game - addTentacle
- ship - draw
- ship - move
- ship - shoot
- game - addShip
- cannonball - draw
- cannonball - move
- game - checkCollision
- game - GameOver
- game - addEventListener

## Links

### Trello
[Link url](https://trello.com/b/CWviY2zv/kraken-brigade-project)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/jorgeberrizbeitia/kraken-brigade)
[Link Deploy](https://jorgeberrizbeitia.github.io/kraken-brigade/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/138o01hAz-0gXepN78RsDgse12HiiuN7Fz_N_hJnI9_g/edit?usp=sharing)
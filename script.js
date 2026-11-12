const player = document.getElementById("player")

let playerX = 0
let playerY = 0

function setPos(x, y) {
    player.style.left = x + "px"
    player.style.top = y + "px"
    playerX = x
    playerY = y
}

//=======================================
//INITIALIZATION
//=======================================

setPos(200, 300)
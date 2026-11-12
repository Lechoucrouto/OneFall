//==================================
//SETUP
//==================================

//variable setup
const PLAYER = document.getElementById("player")

let playerX = 0
let playerY = 0

const TILE_SIZE = 32

const TILES = {
    1: {texture: "grass.png", solid: true}
}

let tiles = []

//function setup
function setPos(x, y) {
    PLAYER.style.left = x + "px"
    PLAYER.style.top = y + "px"
    playerX = x
    playerY = y
}

function loadLevel(map) {
    
    for (let row = 0; row < map.length; row++) {
        
        for (let col = 0; col < map[row].length; col++) {
            const tileId = map[row][col];

            if (tileId !== 0) {
                const newTile = new Tile(col, row, tileId);
                tiles.push(newTile);
            }
        }
    }
}

//class setup
class Tile {
    constructor(gridX, gridY, typeId) {
        const blueprint = TILES[typeId];

        this.x = gridX * TILE_SIZE;
        this.y = gridY * TILE_SIZE;
        this.width = TILE_SIZE;
        this.height = TILE_SIZE;
        this.solid = blueprint.solid;

        this.element = document.createElement("img");
        this.element.src = blueprint.texture;
        this.element.classList.add("tile");
        this.element.style.left = this.x + "px";
        this.element.style.top = this.y + "px";

        document.body.appendChild(this.element);
    }
}
//=======================================
//INITIALIZATION
//=======================================

setPos(200, 270)

const level1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

loadLevel(level1)

alert("reached the end of the code")
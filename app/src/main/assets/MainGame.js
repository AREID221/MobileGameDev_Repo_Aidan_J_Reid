// Canvas
const canvas = document.getElementById('gameCanvas');
//const context = canvas.getContext('2d');
let context;
context = canvas.getContext('2d');
// Game state
let gameOver = false;
let startTimeMS = 0;
// World variables
let friction = 0.8;

// Player character
let player = new gameObject(0, 0, 0, 0, "braidSpritesheet.png");
player.img.width = 50;
player.img.height = 50;

let madObj = new gameObject(0, 0, 0, 0, "Wall.png");
madObj.img.width = 50;
madObj.img.height = 50;

//#region TILES

let wallTile0 = new gameObject(0, 0, 0, 0, "Wall.png");
wallTile0.img.width = 91;
wallTile0.img.height = 50;

let wallTile1 = new gameObject(0, 0, 0, 0, "Wall.png");
wallTile1.img.width = 50;
wallTile1.img.height = 50;

let floorTile0 = new gameObject(0, 0, 0, 0, "test tile.png");
floorTile0.img.width = 50;
floorTile0.img.height = 50;

let testObj = new gameObject(0, 0, 0, 0, "Floor_Dark.png");
testObj.img.width = 50;
testObj.img.height = 50;

let cornerObjTL = new gameObject(0,0,0,0, "Corner_TL.png");
cornerObjTL.img.width = 50;
cornerObjTL.img.height = 50;

let cornerObjTLDark = new gameObject(0,0,0,0, "Corner_Dark_TL.png");
cornerObjTLDark.img.width = 50;
cornerObjTLDark.img.height = 50;

let cornerObjTR = new gameObject(0,0,0,0, "Corner_TR.png");
cornerObjTR.img.width = 50;
cornerObjTR.img.height = 50;

let cornerObjTRDark = new gameObject(0,0,0,0, "Corner_Dark_TR.png");
cornerObjTRDark.img.width = 50;
cornerObjTRDark.img.height = 50;

let cornerObjBL = new gameObject(0,0,0,0, "Corner_BL.png");
cornerObjBL.img.width = 50;
cornerObjBL.img.height = 50;

let cornerObjBLDark = new gameObject(0,0,0,0, "Corner_Dark_BL.png");
cornerObjBLDark.img.width = 50;
cornerObjBLDark.img.height = 50;

let cornerObjBR = new gameObject(0,0,0,0, "Corner_BR.png");
cornerObjBR.img.width = 50;
cornerObjBR.img.height = 50;

let cornerObjBRDark = new gameObject(0,0,0,0, "Corner_Dark_BR.png");
cornerObjBRDark.img.width = 50;
cornerObjBRDark.img.height = 50;

let objT = new gameObject(0,0,0,0, "Tile_Wall_T.png");
objT.img.width = 50;
objT.img.height = 50;

let objTDark = new gameObject(0,0,0,0, "Wall_T_Dark.png");
objTDark.img.width = 50;
objTDark.img.height = 50;

let objB = new gameObject(0,0,0,0, "Tile_Wall_B.png");
objB.img.width = 50;
objB.img.height = 50;

let objBDark = new gameObject(0,0,0,0, "Wall_B_Dark.png");
objBDark.img.width = 50;
objBDark.img.height = 50;

let objL = new gameObject(0,0,0,0, "Tile_Wall_L.png");
objL.img.width = 50;
objL.img.height = 50;

let objLDark = new gameObject(0,0,0,0, "Wall_L_Dark.png");
objLDark.img.width = 50;
objLDark.img.height = 50;

let objR = new gameObject(0,0,0,0, "Tile_Wall_R.png");
objR.img.width = 50;
objR.img.height = 50;

let objRDark = new gameObject(0,0,0,0, "Wall_R_Dark.png");
objRDark.img.width = 50;
objRDark.img.height = 50;

let darkTile = new gameObject(0,0,0,0, "dark_tile.png");
darkTile.img.width = 50;
darkTile.img.height = 50;

var mapW = 28, mapH = 15;

var tileMap = 
[
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,

    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 11,
    
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 13, 19,
    
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 16, 1, 1, 1, 1, 1, 1, 13, 19,
    
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 14, 1, 1, 1, 1, 1, 1, 13, 19,
    
    2, 1, 15, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 7, 6, 6, 17, 18, 1, 1, 1, 1, 1, 1, 13, 19,
    
    2, 1, 13, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 12,
    
    2, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    15, 11, 11, 11, 11, 11, 11, 11, 16, 1, 1, 1, 1, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    13, 19, 19, 19, 19, 19, 19, 19, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    3, 4, 4, 4, 4, 4, 4, 4, 7, 1, 15, 11, 11, 11, 11, 11, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 19, 19, 19, 19, 19, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    5, 6, 6, 6, 6, 6, 6, 6, 8, 1, 4, 4, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 2,
    
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
];

var placeTiles = [];

//#endregion

// Input
let keys = [];

//#region Animation

// Old animation values.
let frameX = 0;
let frameXMax = 6;
let frameY = 0;
let frameYMax = 3;
let frame = 0;
let frameMax = 26;
let frameTimer = 0.05;
let frameTimeMax = 0.017;
let spriteWidth = 74;
let spriteHeight = 86;

//#endregion

let a = 0.1;
let b = 0.2;


// When application first loads
window.onload = function()
{
    // Get new instance of current clock time
    startTimeMS = new Date().getTime();

    // Set the player position coords and draw it
    player.Position.x = canvas.width / 2;
    player.Position.y = canvas.height / 2;
    
    madObj.Position.x = canvas.width / 2 + 100;
    madObj.Position.y = canvas.height / 2

    // Literally kills ur game
    // if (a + b != 0.3)
    // {
    //     return(console.log(a + b));
    // }

    // Game over is always set to false right now as lacking menu(s), so this if statement will always return true
    if (!gameOver)
    {
        gameLoop(); // Call the game loop when game over is set to false
    }
}

function colCheck(shapeA, shapeB)
{
    shapeA = player;
    shapeB = madObj;

    // No need to set shapes in here.
    let vX = (shapeA.Position.x + (shapeA.img.width / 2)) - (shapeB.Position.x + (shapeB.img.width / 2)),
        vY = (shapeA.Position.y + (shapeA.img.height / 2)) - (shapeB.Position.y + (shapeB.img.height / 2)),
        hWidths = (shapeA.img.width / 2) + (shapeB.img.width / 2),
        hHeights = (shapeA.img.height / 2) + (shapeB.img.height / 2),
        colDir = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights)
    {
        //console.log("Collision");

        let oX = hWidths - Math.abs(vX),
            oY = hHeights - Math.abs(vY);

        if (oX >= oY)
        {
            // Top collision
            if (vY > 0)
            {
                colDir = "t";
                shapeA.Position.y += oY;
                //console.log("Collision top");
            }
            // Bottom collision
            else
            {
                colDir = "b";
                shapeA.Position.y -= oY;
                //console.log("Collision bottom");
            }
        }else
        {
            // Left collision
            if (vX > 0)
            {
                colDir = "l";
                shapeA.Position.x += oX;
                //console.log("Collision left");
            }
            // Right collision
            else
            {
                colDir = "r";
                shapeA.Position.x -= oX;
                //console.log("Collision right");
            }
        }
    }
    // Return a collision check each clock cycle
    return colDir;
}

// Keeps track of delta time
function Update(delta)
{
    // When delta time exceeds 1000, start a new clock cycle
    if ((delta>1000))
    {
        startTimeMS = new Date().getTime();
    }

    animationFrame();
    // Check for input each delta frame update
    Input();

    // Lines 134-144 contain left/right movement via A/D keys
    if (keys[65])
    {
        player.Velocity.x = player.Velocity.x -0.5;
        //animationFrame();
    }

    if (keys[68])
    {
        player.Velocity.x = player.Velocity.x +0.5;
        //animationFrame();
    }

    // Lines 147-153 resets the player position to the starting position
    if (keys[13])
    {
        player.Velocity.x = 0;
        player.Velocity.y = 0;
        player.Position.x = 0;
        player.Position.y = canvas.height / 2;
    }

    if (keys[87])
    {
        player.Velocity.y = player.Velocity.y -0.5;
        //animationFrame();
    }

    if (keys[83])
    {
        player.Velocity.y = player.Velocity.y +0.5;
        //animationFrame();
    }
    


    let dir = colCheck(player, wallTile1);

    // If collision check returns with a left or right collision,
    // set the player's x velocity to 0 so they cannot move through
    // the obj being collided with
    if (dir === "l" || dir === "r") {
        player.Velocity.x = 0;
    }
        // If collision check returns with a top collision,
        // set the player's y velocity to 0 so they cannot move through
    // the obj being collided with
    else if (dir === "t") {
        player.Velocity.y = 0;
    }
        // If collision check returns with a bottom collision,
        // set the player's y velocity to 0 so they cannot move through
        // the obj being collided with. This check is separate as we need
    // to check whether the player is currently grounded for jumping functionality
    else if (dir === "b") {
        // Boolean set false whenever there is a bottom collision
        var isJumping = false;
        player.Velocity.y = 0;

        // If the player presses the Spacebar key set boolean to true
        if (keys[32]) {
            isJumping = true;

        }
    }

    // The player's x/y movement velocity is countered by world friction, this prevents
    // sliding and provides more accurate movement
    player.Velocity.x *= friction;
    player.Velocity.y *= friction;
    // Apply x and y velocity to player's x and y position coords
    player.Position.x += player.Velocity.x;
    player.Position.y += player.Velocity.y;

    //idleAnimationFrame();

    
}
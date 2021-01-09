// Canvas
const canvas = document.getElementById('gameCanvas');
let context;
context = canvas.getContext('2d');
// Game state
let gameOver = false;
let startTimeMS = 0;
// World variables
let friction = 0.8;
// Player character
let player = new gameObject(0, 0, 0, 0, "Skeleton_Idle.png");
//player.img = new Image(50, 50);

//#region TILESET

let tiles;
tiles = [];
tiles.length = 100;


// Four floor tiles are broken up into each quarter of game screen.
let floorTile0 = new Tiles(0, 0, "test tile.png");
let floorTile1 = new Tiles(0, 0, "test tile.png");
let floorTile2 = new Tiles(0, 0, "test tile.png");
let floorTile3 = new Tiles(0, 0, "test tile.png");

let wallTile0 = new wallTiles(0, 0, "Wall.png");

//#endregion



// Set up tiles on array (follow collision lab for hints).


// Input
let keys = [];

// Animation: SPRITE NOT SCALED TO IMAGE PROPERLY AND CAN SEE GAME ITERATING THROUGH INDIVIDUAL SPRITES ON SHEET. >:(
// let frameX = 0;
// let frameXMax = 10; // 
// let frameY = 0;
// let frameYMax = 1;
// let frame = 0;
// let frameMax = 28;
// let frameTimer = 0.05;
// let frameTimeMax = 0.001;
// let spriteWidth = 32;
// let spriteHeight = 32;
// let tileWidth = 16;
// let tileHeight = 20;

// Old animation values.
let frameX = 0;
let frameXMax = 4;
let frameY = 0;
let frameYMax = 0;
let frame = 0;
let frameMax = 28;
let frameTimer = 0.05;
let frameTimeMax = 0.005;
let spriteWidth = 30;
let spriteHeight = 43;

let tileWidth = 16;
let tileHeight = 20;

let wallTileWidth = 30;
let wallTileHeight = 16;

// When application first loads
window.onload = function()
{
    // Get new instance of current clock time
    startTimeMS = new Date().getTime();

    // Set the player position coords and draw it
    player.Position.x = canvas.width / 2;
    player.Position.y = canvas.height / 2;

    wallTile0.Position.x = 150;
    wallTile0.Position.y = canvas.height / 2;

    // tiles.push({x: 50, y: 50, width: 50, height: 50});
    // tiles.push({x: 100, y: 100, width: 50, height: 50});
 

    for (var i = 0; i < tiles.length; i++)
    {
        if (i == 0)
        {
            floorTile0.Position.x = floorTile0.Position.x + 0;
            floorTile0.Position.y = floorTile0.Position.y + 0;
        }
        else if (i == 1)
        {
            floorTile1.Position.x = floorTile0.Position.x + canvas.width / 2;
            floorTile1.Position.y = floorTile0.Position.y + 0;
        }
        else if (i == 2)
        {
            floorTile2.Position.x = floorTile0.Position.x + 0;
            floorTile2.Position.y = floorTile0.Position.y + canvas.height / 2;
        }
        else if (i == 3)
        {
            floorTile3.Position.x = floorTile0.Position.x + canvas.width / 2;
            floorTile3.Position.y = floorTile0.Position.y + canvas.height / 2;
        }
    }

    

    // Game over is always set to false right now as lacking menu(s), so this if statement will always return true
    if (!gameOver)
    {
        gameLoop(); // Call the game loop when game over is set to false
    }
}

function colCheck(shapeA, shapeB)
{

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
    


    let dir = colCheck(player, wallTile0);

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
    animationFrame();
    // Fill background
     context.fillStyle = "grey";
     context.beginPath();
     context.fill();
     context.fillStyle = "grey";
     context.fillRect(0, 0, 1366, 720);
}
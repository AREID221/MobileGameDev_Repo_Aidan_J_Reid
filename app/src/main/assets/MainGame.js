// Canvas
const canvas = document.getElementById('gameCanvas');
let context;
context = canvas.getContext('2d');
// Game state
let gameOver = false;
let startTimeMS = 0;
// World variables
let friction = 0.8;
let gravity = -0.25;

// Player character
let player = new playerObj(0, 0, 0, 0, "braidSpritesheet.png");
// Input
let keys = [];
// Animation
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

//Tiles
let wallTile_Vent = new tileObj(0, 0, "testTile.png");
let tileWidth = 200;
let tileHeight = 200;
// Surfaces
let floorStandard = new repeatStdFloor(0, 0, "testFloor.png");
let floorWidth = 90;
let floorHeight = 150;

let floor = [];
floor.length = 10;

// When application first loads
window.onload = function()
{
    // Get new instance of current clock time
    startTimeMS = new Date().getTime();

    // Set the player position coords and draw it
    player.Position.x = 0;
    player.Position.y = canvas.height / 2;

    wallTile_Vent.Position.x = 0;
    wallTile_Vent.Position.y = canvas.height / 2 + 86;

    floorStandard.Position.x = 0;
    floorStandard.Position.y = canvas.height / 2 + 50;

    // Game over is always set to false right now as lacking menu(s), so this if statement will always return true
    if (!gameOver)
    {
        gameLoop(); // Call the game loop when game over is set to false
    }
}

function colCheck(shapeA, shapeB)
{
    for (let c = 0; c < floor.length; c++)
    {

    }

    shapeA = player;
    shapeB = floorStandard;

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
        animationFrame();
    }

    if (keys[68])
    {
        player.Velocity.x = player.Velocity.x +0.5;
        animationFrame();
    }

    // Lines 147-153 resets the player position to the starting position
    if (keys[13])
    {
        player.Velocity.x = 0;
        player.Velocity.y = 0;
        player.Position.x = 0;
        player.Position.y = canvas.height / 2;
    }

    /*
        // ***OLD*** Top-down y position movement ***OLD***

    if (keys[87])
    {
        player.Velocity.y = sprite.Velocity.y -0.5;
        animationFrame();
    }

    if (keys[83])
    {
        player.Velocity.y = sprite.Velocity.y +0.5;
        animationFrame();
    }
    */


    let dir = colCheck(player);
    //let dirFloor = floorStandard.colCheck(floorStandard, player);

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


    // If the player tells us they want to jump then apply upward force
    if (isJumping)
    {
        player.Velocity.y -= 7.5;
    }

    // The player's x movement velocity is countered by world friction, this prevents
    // sliding and provides more accurate movement
    player.Velocity.x *= friction;
    // The player's y movement velocity is affected by world gravity
    player.Velocity.y -= gravity;
    // Apply x and y velocity to player's x and y position coords
    player.Position.x += player.Velocity.x;
    player.Position.y += player.Velocity.y;

    // Fill background
     context.fillStyle = "blue";
     context.beginPath();
     context.fill();
     context.fillStyle = "blue";
     context.fillRect(0, 0, 1366, 720);
}
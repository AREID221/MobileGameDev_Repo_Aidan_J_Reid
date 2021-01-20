// Canvas
const canvas = document.getElementById('gameCanvas');
const context = canvas.getContext('2d');

// Game state
let gameOver = true;
let gameState = 0;

// World variables
let startTimeMS = 0;
let friction = 0.8;

// Player character.
let player = new gameObject(0, 0, 0, 0, "./Player/braidSpritesheet.png");
player.img.width = 50;
player.img.height = 50;

// #region Collectibles
// Collectible 1.
let goldChest0 = new gameObject(0,0,0,0, "./Collectibles/gold_tile.png");
goldChest0.img.width = 50;
goldChest0.img.height = 50;

// Collectible 2.
let goldChest1 = new gameObject(0,0,0,0, "./Collectibles/gold_tile.png");
goldChest1.img.width = 50;
goldChest1.img.height = 50;

// Collectible 3.
let goldChest2 = new gameObject(0,0,0,0, "./Collectibles/gold_tile.png");
goldChest2.img.width = 50;
goldChest2.img.height = 50;

// Collectible 4.
let goldChest3 = new gameObject(0,0,0,0, "./Collectibles/gold_tile.png");
goldChest3.img.width = 50;
goldChest3.img.height = 50;

// Collectible 5.
let goldChest4 = new gameObject(0,0,0,0, "./Collectibles/gold_tile.png");
goldChest4.img.width = 50;
goldChest4.img.height = 50;

let totalGoldCollected = 0;
// #endregion

// #region Collision objects
// No need to look up an image since these objects are invisible.

let collider0 = new gameObject(0, 0, 0, 0, "");
collider0.img.width = 1366;
collider0.img.height = 25;

let collider01 = new gameObject(0, 0, 0, 0, "");
collider01.img.width = 950;
collider01.img.height = 30;

let collider02 = new gameObject(0, 0, 0, 0, "");
collider02.img.width = 90;
collider02.img.height = 80;

let collider03 = new gameObject(0, 0, 0, 0, "");
collider03.img.width = 100;
collider03.img.height = 175;

let collider04 = new gameObject(0, 0, 0, 0, "");
collider04.img.width = 444;
collider04.img.height = 80;

let collider05 = new gameObject(0, 0, 0, 0, "");
collider05.img.width = 340;
collider05.img.height = 81;

let collider06 = new gameObject(0, 0, 0, 0, "");
collider06.img.width = 62;
collider06.img.height = 290;

let collider07 = new gameObject(0, 0, 0, 0, "");
collider07.img.width = 8;
collider07.img.height = 720;

let collider08 = new gameObject(0, 0, 0, 0, "");
collider08.img.width = 8;
collider08.img.height = 420;

let collider09 = new gameObject(0, 0, 0, 0, "");
collider09.img.width = 1366;
collider09.img.height = 20;

let collider010 = new gameObject(0, 0, 0, 0, "");
collider010.img.width = 112;
collider010.img.height = 2;

let collider011 = new gameObject(0, 0, 0, 0, "");
collider011.img.width = 2;
collider011.img.height = 40;

let collider012 = new gameObject(0, 0, 0, 0, "");
collider012.img.width = 46;
collider012.img.height = 2;

let collider013 = new gameObject(0, 0, 0, 0, "");
collider013.img.width = 46;
collider013.img.height = 2;

let collider014 = new gameObject(0, 0, 0, 0, "");
collider014.img.width = 2;
collider014.img.height = 205;

let collider015 = new gameObject(0, 0, 0, 0, "");
collider015.img.width = 251;
collider015.img.height = 2;

let collider016 = new gameObject(0, 0, 0, 0, "");
collider016.img.width = 2;
collider016.img.height = 95;

let collider017 = new gameObject(0, 0, 0, 0, "");
collider017.img.width = 2;
collider017.img.height = 60;

let collider018 = new gameObject(0, 0, 0, 0, "");
collider018.img.width = 2;
collider018.img.height = 60;

let collider019 = new gameObject(0, 0, 0, 0, "");
collider019.img.width = 2;
collider019.img.height = 80;

// #endregion

//#region TILES
// Attempts to push game objects to array for use in tilemap have failed,
// but keeping the code here to document idea/thinking behind tileset during development.

let wallTile1 = new gameObject(0, 0, 0, 0, "./Tileset/Wall.png");
wallTile1.img.width = 50;
wallTile1.img.height = 50;

//placeTiles.push(wallTile1);

let floorTile0 = new gameObject(0, 0, 0, 0, "./Tileset/test tile.png");
floorTile0.img.width = 50;
floorTile0.img.height = 50;

//placeTiles.push(floorTile0);

let testObj = new gameObject(0, 0, 0, 0, "./Tileset/Floor_Dark.png");
testObj.img.width = 50;
testObj.img.height = 50;

//placeTiles.push(testObj);

let cornerObjTL = new gameObject(0,0,0,0, "./Tileset/Corner_TL.png");
cornerObjTL.img.width = 50;
cornerObjTL.img.height = 50;

//placeTiles.push(cornerObjTL);

let cornerObjTLDark = new gameObject(0,0,0,0, "./Tileset/Corner_Dark_TL.png");
cornerObjTLDark.img.width = 50;
cornerObjTLDark.img.height = 50;

//placeTiles.push(cornerObjTLDark);

let cornerObjTR = new gameObject(0,0,0,0, "./Tileset/Corner_TR.png");
cornerObjTR.img.width = 50;
cornerObjTR.img.height = 50;

//placeTiles.push(cornerObjTR);

let cornerObjTRDark = new gameObject(0,0,0,0, "./Tileset/Corner_Dark_TR.png");
cornerObjTRDark.img.width = 50;
cornerObjTRDark.img.height = 50;

//placeTiles.push(cornerObjTRDark);

let cornerObjBL = new gameObject(0,0,0,0, "./Tileset/Corner_BL.png");
cornerObjBL.img.width = 50;
cornerObjBL.img.height = 50;

//placeTiles.push(cornerObjBL);

let cornerObjBLDark = new gameObject(0,0,0,0, "./Tileset/Corner_Dark_BL.png");
cornerObjBLDark.img.width = 50;
cornerObjBLDark.img.height = 50;

//placeTiles.push(cornerObjBLDark);

let cornerObjBR = new gameObject(0,0,0,0, "./Tileset/Corner_BR.png");
cornerObjBR.img.width = 50;
cornerObjBR.img.height = 50;

//placeTiles.push(cornerObjBR);

let cornerObjBRDark = new gameObject(0,0,0,0, "./Tileset/Corner_Dark_BR.png");
cornerObjBRDark.img.width = 50;
cornerObjBRDark.img.height = 50;

//placeTiles.push(cornerObjBRDark);

let objT = new gameObject(0,0,0,0, "./Tileset/Tile_Wall_T.png");
objT.img.width = 50;
objT.img.height = 50;

//placeTiles.push(objT);

let objTDark = new gameObject(0,0,0,0, "./Tileset/Wall_T_Dark.png");
objTDark.img.width = 50;
objTDark.img.height = 50;

//placeTiles.push(objTDark);

let objB = new gameObject(0,0,0,0, "./Tileset/Tile_Wall_B.png");
objB.img.width = 50;
objB.img.height = 50;

//placeTiles.push(objB);

let objBDark = new gameObject(0,0,0,0, "./Tileset/Wall_B_Dark.png");
objBDark.img.width = 50;
objBDark.img.height = 50;

//placeTiles.push(objBDark);

let objL = new gameObject(0,0,0,0, "./Tileset/Tile_Wall_L.png");
objL.img.width = 50;
objL.img.height = 50;

//placeTiles.push(objL);

let objLDark = new gameObject(0,0,0,0, "./Tileset/Wall_L_Dark.png");
objLDark.img.width = 50;
objLDark.img.height = 50;

//placeTiles.push(objLDark);

let objR = new gameObject(0,0,0,0, "./Tileset/Tile_Wall_R.png");
objR.img.width = 50;
objR.img.height = 50;

//placeTiles.push(objR);

let objRDark = new gameObject(0,0,0,0, "./Tileset/Wall_R_Dark.png");
objRDark.img.width = 50;
objRDark.img.height = 50;

//placeTiles.push(objRDark);

let darkTile = new gameObject(0,0,0,0, "./Tileset/dark_tile.png");
darkTile.img.width = 50;
darkTile.img.height = 50;

//placeTiles.push(darkTile);

let tileSetW = 28, tileSetH = 15;

let tileSet = 
[
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,

    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 11,
    
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 13, 19,
    
    9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 15, 16, 1, 1, 1, 1, 1, 1, 13, 19,
    
    9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 14, 1, 1, 1, 1, 1, 1, 13, 19,
    
    9, 1, 15, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 7, 6, 6, 17, 18, 1, 1, 1, 1, 1, 1, 13, 19,
    
    9, 1, 13, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 17, 12,
    
    9, 1, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    15, 11, 11, 11, 11, 11, 11, 11, 16, 1, 1, 1, 1, 4, 4, 4, 4, 4, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    13, 19, 19, 19, 19, 19, 19, 19, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    3, 4, 4, 4, 4, 4, 4, 4, 7, 1, 15, 11, 11, 11, 11, 11, 16, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 13, 19, 19, 19, 19, 19, 14, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    5, 6, 6, 6, 6, 6, 6, 6, 8, 1, 4, 4, 4, 4, 4, 4, 4, 1, 9, 1, 1, 1, 1, 1, 1, 1, 1, 9,
    
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2
];
//#endregion

// Input
let keys = [];

//#region Animation
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

// #region Lookups
// Main menu background image.
let menuImg = new Image();
menuImg.src = "./Menus/main_menu.png";

// Game over background image.
let gameOverImg = new Image();
gameOverImg.src = "./Menus/game_over.png";

// Game theme song.
let themeTune = new Audio("./Audio/Theme/fantasy_music.mp3");
themeTune.volume = 0.25;
themeTune.autoplay = true;

// Gold collected SFX.
let goldCollected = new Audio("./Audio/SFX/goldSFX.mp3");
goldCollected.volume = 0.7;
// #endregion

// When application first loads.
window.onload = function()
{
    // Set a game state on window load. gameOver is always set to true,
    // so start menu will appear every time the web page is loaded.
    if (!gameOver)
    {
        gameState = 2;
    }else
    {
        gameState == 0;
    }
    // Get new instance of current clock time.
    startTimeMS = new Date().getTime();
    window.requestAnimationFrame(gameLoop); // Recursive loop.    
}

// Compare sprites x/y half extents.
function colCheck(shape0, shape1, shape2, shape3, shape4, shape5, shape6, shape7, shape8, shape9, shape10, shape11, shape12, shape13, shape14, shape15, shape16, shape17, shape18, shape19, shape20, shape21, shape22, shape23, shape24, shape25)
{
    // Collision split up into separate object checks as pushing to array and checking that way was not viable.
    // This is due to the data being undefined, an issue I have encountered several times throughout development.

    // There are wall colliders
    // and gold colliders.

    // Wall colliders set player velocity to 0, whereas gold colliders increment gold collected counter and make the object disappear offscreen. 

    // #region Shapes
    shape0 = player;
    shape1 = collider0;
    shape2 = collider01;
    shape3 = collider02;
    shape4 = collider03;
    shape5 = collider04;
    shape6 = collider05;
    shape7 = collider06;
    shape8 = collider07;
    shape9 = collider08;
    shape10 = collider09;
    shape11 = collider010;
    shape12 = collider011;
    shape13 = collider012;
    shape14 = collider013;
    shape15 = collider014;
    shape16 = collider015;
    shape17 = collider016;
    shape18 = collider017;
    shape19 = collider018;
    shape20 = collider019;
    shape21 = goldChest0;
    shape22 = goldChest1;
    shape23 = goldChest2;
    shape24 = goldChest3;
    shape25 = goldChest4;
    // #endregion
    
    // #region Wall colliders
    let vX0 = (shape0.Position.x + (shape0.img.width / 2)) - (shape1.Position.x + (shape1.img.width / 2)),
        vY0 = (shape0.Position.y + (shape0.img.height / 2)) - (shape1.Position.y + (shape1.img.height / 2)),
        halfWidths0 = (shape0.img.width / 2) + (shape1.img.width / 2),
        halfHeights0 = (shape0.img.height / 2) + (shape1.img.height / 2),
        colDir0 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX0) < halfWidths0 && Math.abs(vY0) < halfHeights0)
    {
        let oX0 = halfWidths0 - Math.abs(vX0),
            oY0 = halfHeights0 - Math.abs(vY0);

        if (oX0 >= oY0)
        {
            // Top collision
            if (vY0 > 0)
            {
                colDir0 = "t";
                shape0.Position.y += oY0;
            }
            // Bottom collision
            else
            {
                colDir0 = "b";
                shape0.Position.y -= oY0;
            }
        }else
        {
            // Left collision
            if (vX0 > 0)
            {
                colDir0 = "l";
                shape0.Position.x += oX0;
            }
            // Right collision
            else
            {
                colDir0 = "r";
                shape0.Position.x -= oX0;
            }
        }
    }

    let vX1 = (shape0.Position.x + (shape0.img.width / 2)) - (shape2.Position.x + (shape2.img.width / 2)),
    vY1 = (shape0.Position.y + (shape0.img.height / 2)) - (shape2.Position.y + (shape2.img.height / 2)),
    halfWidths1 = (shape0.img.width / 2) + (shape2.img.width / 2),
    halfHeights1 = (shape0.img.height / 2) + (shape2.img.height / 2),
    colDir1 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX1) < halfWidths1 && Math.abs(vY1) < halfHeights1)
    {
        let oX1 = halfWidths1 - Math.abs(vX1),
            oY1 = halfHeights1 - Math.abs(vY1);

        if (oX1 >= oX1)
        {
            // Top collision
            if (vY1 > 0)
            {
                colDir1 = "t";
                shape0.Position.y += oY1;
            }
            // Bottom collision
            else
            {
                colDir1 = "b";
                shape0.Position.y -= oY1;
            }
        }
        else
        {
            // Left collision
            if (vX1 > 0)
            {
                colDir1 = "l";
                shape0.Position.x += oX1;
            }
            // Right collision
            else
            {
                colDir1 = "r";
                shape0.Position.x -= oX1;
            }
        }
    }

    let vX2 = (shape0.Position.x + (shape0.img.width / 2)) - (shape3.Position.x + (shape3.img.width / 2)),
    vY2 = (shape0.Position.y + (shape0.img.height / 2)) - (shape3.Position.y + (shape3.img.height / 2)),
    halfWidths2 = (shape0.img.width / 2) + (shape3.img.width / 2),
    halfHeights2 = (shape0.img.height / 2) + (shape3.img.height / 2),
    colDir2 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX2) < halfWidths2 && Math.abs(vY2) < halfHeights2)
    {
        let oX2 = halfWidths2 - Math.abs(vX2),
            oY2 = halfHeights2 - Math.abs(vY2);

        if (oX2 >= oY2)
        {
            // Top collision
            if (vY2 > 0)
            {
                colDir2 = "t";
                shape0.Position.y += oY2;
            }
            // Bottom collision
            else
            {
                colDir2 = "b";
                shape0.Position.y -= oY2;
            }
        }
        else
        {
            // Left collision
            if (vX2 > 0)
            {
                colDir2 = "l";
                shape0.Position.x += oX2;
            }
            // Right collision
            else
            {
                colDir2 = "r";
                shape0.Position.x -= oX2;
            }
        }
    }

    let vX3 = (shape0.Position.x + (shape0.img.width / 2)) - (shape4.Position.x + (shape4.img.width / 2)),
    vY3 = (shape0.Position.y + (shape0.img.height / 2)) - (shape4.Position.y + (shape4.img.height / 2)),
    halfWidths3 = (shape0.img.width / 2) + (shape4.img.width / 2),
    halfHeights3 = (shape0.img.height / 2) + (shape4.img.height / 2),
    colDir3 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX3) < halfWidths3 && Math.abs(vY3) < halfHeights3)
    {

        let oX3 = halfWidths3 - Math.abs(vX3),
            oY3 = halfHeights3 - Math.abs(vY3);

        if (oX3 >= oY3)
        {
            // Top collision
            if (vY3 > 0)
            {
                colDir3 = "t";
                shape0.Position.y += oY3;
            }
            // Bottom collision
            else
            {
                colDir3 = "b";
                shape0.Position.y -= oY3;
            }
        }
        else
        {
            // Left collision
            if (vX3 > 0)
            {
                colDir3 = "l";
                shape0.Position.x += oX3;
            }
            // Right collision
            else
            {
                colDir3 = "r";
                shape0.Position.x -= oX3;
            }
        }
    }

    let vX4 = (shape0.Position.x + (shape0.img.width / 2)) - (shape5.Position.x + (shape5.img.width / 2)),
    vY4 = (shape0.Position.y + (shape0.img.height / 2)) - (shape5.Position.y + (shape5.img.height / 2)),
    halfWidths4 = (shape0.img.width / 2) + (shape5.img.width / 2),
    halfHeights4 = (shape0.img.height / 2) + (shape5.img.height / 2),
    colDir4 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX4) < halfWidths4 && Math.abs(vY4) < halfHeights4)
    {
        let oX4 = halfWidths4 - Math.abs(vX4),
            oY4 = halfHeights4 - Math.abs(vY4);

        if (oX4 >= oY4)
        {
            // Top collision
            if (vY4 > 0)
            {
                colDir4 = "t";
                shape0.Position.y += oY4;
            }
            // Bottom collision
            else
            {
                colDir4 = "b";
                shape0.Position.y -= oY4;
            }
        }
        else
        {
            // Left collision
            if (vX4 > 0)
            {
                colDir4 = "l";
                shape0.Position.x += oX4;
            }
            // Right collision
            else
            {
                colDir4 = "r";
                shape0.Position.x -= oX4;
            }
        }
    }

    let vX5 = (shape0.Position.x + (shape0.img.width / 2)) - (shape6.Position.x + (shape6.img.width / 2)),
    vY5 = (shape0.Position.y + (shape0.img.height / 2)) - (shape6.Position.y + (shape6.img.height / 2)),
    halfWidths5 = (shape0.img.width / 2) + (shape6.img.width / 2),
    halfHeights5 = (shape0.img.height / 2) + (shape6.img.height / 2),
    colDir5 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX5) < halfWidths5 && Math.abs(vY5) < halfHeights5)
    {
        let oX5 = halfWidths5 - Math.abs(vX5),
            oY5 = halfHeights5 - Math.abs(vY5);

        if (oX5 >= oY5)
        {
            // Top collision
            if (vY5 > 0)
            {
                colDir5 = "t";
                shape0.Position.y += oY5;
            }
            // Bottom collision
            else
            {
                colDir5 = "b";
                shape0.Position.y -= oY5;
            }
        }
        else
        {
            // Left collision
            if (vX5 > 0)
            {
                colDir5 = "l";
                shape0.Position.x += oX5;
            }
            // Right collision
            else
            {
                colDir5 = "r";
                shape0.Position.x -= oX5;
            }
        }
    }

    let vX6 = (shape0.Position.x + (shape0.img.width / 2)) - (shape7.Position.x + (shape7.img.width / 2)),
    vY6 = (shape0.Position.y + (shape0.img.height / 2)) - (shape7.Position.y + (shape7.img.height / 2)),
    halfWidths6 = (shape0.img.width / 2) + (shape7.img.width / 2),
    halfHeights6 = (shape0.img.height / 2) + (shape7.img.height / 2),
    colDir6 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX6) < halfWidths6 && Math.abs(vY6) < halfHeights6)
    {
        let oX6 = halfWidths6 - Math.abs(vX6),
            oY6 = halfHeights6 - Math.abs(vY6);

        if (oX6 >= oY6)
        {
            // Top collision
            if (vY6 > 0)
            {
                colDir6 = "t";
                shape0.Position.y += oY6;
            }
            // Bottom collision
            else
            {
                colDir6 = "b";
                shape0.Position.y -= oY6;
            }
        }
        else
        {
            // Left collision
            if (vX6 > 0)
            {
                colDir6 = "l";
                shape0.Position.x += oX6;
            }
            // Right collision
            else
            {
                colDir6 = "r";
                shape0.Position.x -= oX6;
            }
        }
    }

    let vX7 = (shape0.Position.x + (shape0.img.width / 2)) - (shape8.Position.x + (shape8.img.width / 2)),
    vY7 = (shape0.Position.y + (shape0.img.height / 2)) - (shape8.Position.y + (shape8.img.height / 2)),
    halfWidths7 = (shape0.img.width / 2) + (shape8.img.width / 2),
    halfHeights7 = (shape0.img.height / 2) + (shape8.img.height / 2),
    colDir7 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX7) < halfWidths7 && Math.abs(vY7) < halfHeights7)
    {
        let oX7 = halfWidths7 - Math.abs(vX7),
            oY7 = halfHeights7 - Math.abs(vY7);

        if (oX7 >= oY7)
        {
            // Top collision
            if (vY7 > 0)
            {
                colDir7 = "t";
                shape0.Position.y += oY7;
            }
            // Bottom collision
            else
            {
                colDir7 = "b";
                shape0.Position.y -= oY7;
            }
        }
        else
        {
            // Left collision
            if (vX7 > 0)
            {
                colDir7 = "l";
                shape0.Position.x += oX7;
            }
            // Right collision
            else
            {
                colDir7 = "r";
                shape0.Position.x -= oX7;
            }
        }
    }

    let vX8 = (shape0.Position.x + (shape0.img.width / 2)) - (shape9.Position.x + (shape9.img.width / 2)),
    vY8 = (shape0.Position.y + (shape0.img.height / 2)) - (shape9.Position.y + (shape9.img.height / 2)),
    halfWidths8 = (shape0.img.width / 2) + (shape9.img.width / 2),
    halfHeights8 = (shape0.img.height / 2) + (shape9.img.height / 2),
    colDir8 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX8) < halfWidths8 && Math.abs(vY8) < halfHeights8)
    {
        let oX8 = halfWidths8 - Math.abs(vX8),
            oY8 = halfHeights8 - Math.abs(vY8);

        if (oX8 >= oY8)
        {
            // Top collision
            if (vY8 > 0)
            {
                colDir8 = "t";
                shape0.Position.y += oY8;
            }
            // Bottom collision
            else
            {
                colDir8 = "b";
                shape0.Position.y -= oY8;
            }
        }
        else
        {
            // Left collision
            if (vX8 > 0)
            {
                colDir8 = "l";
                shape0.Position.x += oX8;
            }
            // Right collision
            else
            {
                colDir8 = "r";
                shape0.Position.x -= oX8;
            }
        }
    }

    let vX9 = (shape0.Position.x + (shape0.img.width / 2)) - (shape10.Position.x + (shape10.img.width / 2)),
    vY9 = (shape0.Position.y + (shape0.img.height / 2)) - (shape10.Position.y + (shape10.img.height / 2)),
    halfWidths9 = (shape0.img.width / 2) + (shape10.img.width / 2),
    halfHeights9 = (shape0.img.height / 2) + (shape10.img.height / 2),
    colDir9 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX9) < halfWidths9 && Math.abs(vY9) < halfHeights9)
    {
        let oX9 = halfWidths9 - Math.abs(vX9),
            oY9 = halfHeights9 - Math.abs(vY9);

        if (oX9 >= oY9)
        {
            // Top collision
            if (vY9 > 0)
            {
                colDir9 = "t";
                shape0.Position.y += oY9;
            }
            // Bottom collision
            else
            {
                colDir9 = "b";
                shape0.Position.y -= oY9;
            }
        }
        else
        {
            // Left collision
            if (vX9 > 0)
            {
                colDir9 = "l";
                shape0.Position.x += oX9;
            }
            // Right collision
            else
            {
                colDir9 = "r";
                shape0.Position.x -= oX9;
            }
        }
    }

    let vX10 = (shape0.Position.x + (shape0.img.width / 2)) - (shape11.Position.x + (shape11.img.width / 2)),
    vY10 = (shape0.Position.y + (shape0.img.height / 2)) - (shape11.Position.y + (shape11.img.height / 2)),
    halfWidths10 = (shape0.img.width / 2) + (shape11.img.width / 2),
    halfHeights10 = (shape0.img.height / 2) + (shape11.img.height / 2),
    colDir10 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX10) < halfWidths10 && Math.abs(vY10) < halfHeights10)
    {
        let oX10 = halfWidths10 - Math.abs(vX10),
            oY10 = halfHeights10 - Math.abs(vY10);

        if (oX10 >= oY10)
        {
            // Top collision
            if (vY10 > 0)
            {
                colDir10 = "t";
                shape0.Position.y += oY10;
            }
            // Bottom collision
            else
            {
                colDir10 = "b";
                shape0.Position.y -= oY10;
            }
        }
        else
        {
            // Left collision
            if (vX10 > 0)
            {
                colDir10 = "l";
                shape0.Position.x += oX10;
            }
            // Right collision
            else
            {
                colDir10 = "r";
                shape0.Position.x -= oX10;
            }
        }
    }

    let vX11 = (shape0.Position.x + (shape0.img.width / 2)) - (shape12.Position.x + (shape12.img.width / 2)),
    vY11 = (shape0.Position.y + (shape0.img.height / 2)) - (shape12.Position.y + (shape12.img.height / 2)),
    halfWidths11 = (shape0.img.width / 2) + (shape12.img.width / 2),
    halfHeights11 = (shape0.img.height / 2) + (shape12.img.height / 2),
    colDir11 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX11) < halfWidths11 && Math.abs(vY11) < halfHeights11)
    {
        let oX11 = halfWidths11 - Math.abs(vX11),
            oY11 = halfHeights11 - Math.abs(vY11);

        if (oX11 >= oY11)
        {
            // Top collision
            if (vY11 > 0)
            {
                colDir11 = "t";
                shape0.Position.y += oY11;
            }
            // Bottom collision
            else
            {
                colDir11 = "b";
                shape0.Position.y -= oY11;
            }
        }
        else
        {
            // Left collision
            if (vX11 > 0)
            {
                colDir11 = "l";
                shape0.Position.x += oX11;
            }
            // Right collision
            else
            {
                colDir11 = "r";
                shape0.Position.x -= oX11;
            }
        }
    }

    let vX12 = (shape0.Position.x + (shape0.img.width / 2)) - (shape13.Position.x + (shape13.img.width / 2)),
    vY12 = (shape0.Position.y + (shape0.img.height / 2)) - (shape13.Position.y + (shape13.img.height / 2)),
    halfWidths12 = (shape0.img.width / 2) + (shape13.img.width / 2),
    halfHeights12 = (shape0.img.height / 2) + (shape13.img.height / 2),
    colDir12 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX12) < halfWidths12 && Math.abs(vY12) < halfHeights12)
    {
        let oX12 = halfWidths12 - Math.abs(vX12),
            oY12 = halfHeights12 - Math.abs(vY12);

        if (oX12 >= oY12)
        {
            // Top collision
            if (vY12 > 0)
            {
                colDir12 = "t";
                shape0.Position.y += oY12;
            }
            // Bottom collision
            else
            {
                colDir12 = "b";
                shape0.Position.y -= oY12;
            }
        }
        else
        {
            // Left collision
            if (vX12 > 0)
            {
                colDir12 = "l";
                shape0.Position.x += oX12;
            }
            // Right collision
            else
            {
                colDir12 = "r";
                shape0.Position.x -= oX12;
            }
        }
    }

    let vX13 = (shape0.Position.x + (shape0.img.width / 2)) - (shape14.Position.x + (shape14.img.width / 2)),
    vY13 = (shape0.Position.y + (shape0.img.height / 2)) - (shape14.Position.y + (shape14.img.height / 2)),
    halfWidths13 = (shape0.img.width / 2) + (shape14.img.width / 2),
    halfHeights13 = (shape0.img.height / 2) + (shape14.img.height / 2),
    colDir13 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX13) < halfWidths13 && Math.abs(vY13) < halfHeights13)
    {
        let oX13 = halfWidths13 - Math.abs(vX13),
            oY13 = halfHeights13 - Math.abs(vY13);

        if (oX13 >= oY13)
        {
            // Top collision
            if (vY13 > 0)
            {
                colDir13 = "t";
                shape0.Position.y += oY13;
            }
            // Bottom collision
            else
            {
                colDir13 = "b";
                shape0.Position.y -= oY13;
            }
        }
        else
        {
            // Left collision
            if (vX13 > 0)
            {
                colDir13 = "l";
                shape0.Position.x += oX13;
            }
            // Right collision
            else
            {
                colDir13 = "r";
                shape0.Position.x -= oX13;
            }
        }
    }

    let vX14 = (shape0.Position.x + (shape0.img.width / 2)) - (shape15.Position.x + (shape15.img.width / 2)),
    vY14 = (shape0.Position.y + (shape0.img.height / 2)) - (shape15.Position.y + (shape15.img.height / 2)),
    halfWidths14 = (shape0.img.width / 2) + (shape15.img.width / 2),
    halfHeights14 = (shape0.img.height / 2) + (shape15.img.height / 2),
    colDir14 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX14) < halfWidths14 && Math.abs(vY14) < halfHeights14)
    {
        let oX14 = halfWidths14 - Math.abs(vX14),
            oY14 = halfHeights14 - Math.abs(vY14);

        if (oX14 >= oY14)
        {
            // Top collision
            if (vY14 > 0)
            {
                colDir14 = "t";
                shape0.Position.y += oY14;
            }
            // Bottom collision
            else
            {
                colDir14 = "b";
                shape0.Position.y -= oY14;
            }
        }
        else
        {
            // Left collision
            if (vX14 > 0)
            {
                colDir14 = "l";
                shape0.Position.x += oX14;
            }
            // Right collision
            else
            {
                colDir14 = "r";
                shape0.Position.x -= oX14;
            }
        }
    }

    let vX15 = (shape0.Position.x + (shape0.img.width / 2)) - (shape16.Position.x + (shape16.img.width / 2)),
    vY15 = (shape0.Position.y + (shape0.img.height / 2)) - (shape16.Position.y + (shape16.img.height / 2)),
    halfWidths15 = (shape0.img.width / 2) + (shape16.img.width / 2),
    halfHeights15 = (shape0.img.height / 2) + (shape16.img.height / 2),
    colDir15 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX15) < halfWidths15 && Math.abs(vY15) < halfHeights15)
    {
        let oX15 = halfWidths15 - Math.abs(vX15),
            oY15 = halfHeights15 - Math.abs(vY15);

        if (oX15 >= oY15)
        {
            // Top collision
            if (vY15 > 0)
            {
                colDir15 = "t";
                shape0.Position.y += oY15;
            }
            // Bottom collision
            else
            {
                colDir15 = "b";
                shape0.Position.y -= oY15;
            }
        }
        else
        {
            // Left collision
            if (vX15 > 0)
            {
                colDir15 = "l";
                shape0.Position.x += oX15;
            }
            // Right collision
            else
            {
                colDir15 = "r";
                shape0.Position.x -= oX15;
            }
        }
    }

    let vX16 = (shape0.Position.x + (shape0.img.width / 2)) - (shape17.Position.x + (shape17.img.width / 2)),
    vY16 = (shape0.Position.y + (shape0.img.height / 2)) - (shape17.Position.y + (shape17.img.height / 2)),
    halfWidths16 = (shape0.img.width / 2) + (shape17.img.width / 2),
    halfHeights16 = (shape0.img.height / 2) + (shape17.img.height / 2),
    colDir16 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX16) < halfWidths16 && Math.abs(vY16) < halfHeights16)
    {
        let oX16 = halfWidths16 - Math.abs(vX16),
            oY16 = halfHeights16 - Math.abs(vY16);

        if (oX16 >= oY16)
        {
            // Top collision
            if (vY16 > 0)
            {
                colDir16 = "t";
                shape0.Position.y += oY16;
            }
            // Bottom collision
            else
            {
                colDir16 = "b";
                shape0.Position.y -= oY16;
            }
        }
        else
        {
            // Left collision
            if (vX16 > 0)
            {
                colDir16 = "l";
                shape0.Position.x += oX16;
            }
            // Right collision
            else
            {
                colDir16 = "r";
                shape0.Position.x -= oX16;
            }
        }
    }

    let vX17 = (shape0.Position.x + (shape0.img.width / 2)) - (shape18.Position.x + (shape18.img.width / 2)),
    vY17 = (shape0.Position.y + (shape0.img.height / 2)) - (shape18.Position.y + (shape18.img.height / 2)),
    halfWidths17 = (shape0.img.width / 2) + (shape18.img.width / 2),
    halfHeights17 = (shape0.img.height / 2) + (shape18.img.height / 2),
    colDir17 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX17) < halfWidths17 && Math.abs(vY17) < halfHeights17)
    {
        let oX17 = halfWidths17 - Math.abs(vX17),
            oY17 = halfHeights17 - Math.abs(vY17);

        if (oX17 >= oY17)
        {
            // Top collision
            if (vY17 > 0)
            {
                colDir17 = "t";
                shape0.Position.y += oY17;
            }
            // Bottom collision
            else
            {
                colDir17 = "b";
                shape0.Position.y -= oY17;
            }
        }
        else
        {
            // Left collision
            if (vX17 > 0)
            {
                colDir17 = "l";
                shape0.Position.x += oX17;
            }
            // Right collision
            else
            {
                colDir17 = "r";
                shape0.Position.x -= oX17;
            }
        }
    }

    let vX18 = (shape0.Position.x + (shape0.img.width / 2)) - (shape19.Position.x + (shape19.img.width / 2)),
    vY18 = (shape0.Position.y + (shape0.img.height / 2)) - (shape19.Position.y + (shape19.img.height / 2)),
    halfWidths18 = (shape0.img.width / 2) + (shape19.img.width / 2),
    halfHeights18 = (shape0.img.height / 2) + (shape19.img.height / 2),
    colDir18 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX18) < halfWidths18 && Math.abs(vY18) < halfHeights18)
    {
        let oX18 = halfWidths18 - Math.abs(vX18),
            oY18 = halfHeights18 - Math.abs(vY18);

        if (oX18 >= oY18)
        {
            // Top collision
            if (vY18 > 0)
            {
                colDir18 = "t";
                shape0.Position.y += oY18;
            }
            // Bottom collision
            else
            {
                colDir18 = "b";
                shape0.Position.y -= oY18;
            }
        }
        else
        {
            // Left collision
            if (vX18 > 0)
            {
                colDir18 = "l";
                shape0.Position.x += oX18;
            }
            // Right collision
            else
            {
                colDir18 = "r";
                shape0.Position.x -= oX18;
            }
        }
    }

    let vX19 = (shape0.Position.x + (shape0.img.width / 2)) - (shape20.Position.x + (shape20.img.width / 2)),
    vY19 = (shape0.Position.y + (shape0.img.height / 2)) - (shape20.Position.y + (shape20.img.height / 2)),
    halfWidths19 = (shape0.img.width / 2) + (shape20.img.width / 2),
    halfHeights19 = (shape0.img.height / 2) + (shape20.img.height / 2),
    colDir19 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX19) < halfWidths19 && Math.abs(vY19) < halfHeights19)
    {
        let oX19 = halfWidths19 - Math.abs(vX19),
            oY19 = halfHeights19 - Math.abs(vY19);

        if (oX19 >= oY19)
        {
            // Top collision
            if (vY19 > 0)
            {
                colDir19 = "t";
                shape0.Position.y += oY19;
            }
            // Bottom collision
            else
            {
                colDir19 = "b";
                shape0.Position.y -= oY19;
            }
        }
        else
        {
            // Left collision
            if (vX19 > 0)
            {
                colDir19 = "l";
                shape0.Position.x += oX19;
            }
            // Right collision
            else
            {
                colDir19 = "r";
                shape0.Position.x -= oX19;
            }
        }
    }
    // #endregion

    // #region Gold colliders 

    let vX20 = (shape0.Position.x + (shape0.img.width / 2)) - (shape21.Position.x + (shape21.img.width / 2)),
    vY20 = (shape0.Position.y + (shape0.img.height / 2)) - (shape21.Position.y + (shape21.img.height / 2)),
    halfWidths20 = (shape0.img.width / 2) + (shape21.img.width / 2),
    halfHeights20 = (shape0.img.height / 2) + (shape21.img.height / 2),
    colDir20 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX20) < halfWidths20 && Math.abs(vY20) < halfHeights20)
    {
        let oX20 = halfWidths20 - Math.abs(vX20),
            oY20 = halfHeights20 - Math.abs(vY20);

        if (oX20 >= oY20)
        {
            // Top collision
            if (vY20 > 0)
            {
                colDir20 = "t";
                totalGoldCollected += 1;
                goldCollected.play();
                shape21.Position.x = 5000;
                shape21.Position.y = 5000;
            }
            // Bottom collision
            else
            {
                colDir20 = "b";
                totalGoldCollected += 1;
                goldCollected.play();
                shape21.Position.x = 5000;
                shape21.Position.y = 5000;
            }
        }
        else
        {
            // Left collision
            if (vX20 > 0)
            {
                colDir20 = "l";
                totalGoldCollected += 1;
                goldCollected.play();
                shape21.Position.x = 5000;
                shape21.Position.y = 5000;
            }
            // Right collision
            else
            {
                colDir20 = "r";
                totalGoldCollected += 1;
                goldCollected.play();
                shape21.Position.x = 5000;
                shape21.Position.y = 5000;
            }
        }
    }

    let vX21 = (shape0.Position.x + (shape0.img.width / 2)) - (shape22.Position.x + (shape22.img.width / 2)),
    vY21 = (shape0.Position.y + (shape0.img.height / 2)) - (shape22.Position.y + (shape22.img.height / 2)),
    halfWidths21 = (shape0.img.width / 2) + (shape22.img.width / 2),
    halfHeights21 = (shape0.img.height / 2) + (shape22.img.height / 2),
    colDir21 = null;

// Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX21) < halfWidths21 && Math.abs(vY21) < halfHeights21)
    {
        let oX21 = halfWidths21 - Math.abs(vX21),
            oY21 = halfHeights21 - Math.abs(vY21);

        if (oX21 >= oY21)
        {
            // Top collision
            if (vY21 > 0)
            {
                colDir21 = "t";
                totalGoldCollected += 1;
                goldCollected.play();
                shape22.Position.x = 6000;
                shape22.Position.y = 6000;
            }
            // Bottom collision
            else
            {
                colDir20 = "b";
                totalGoldCollected += 1;
                goldCollected.play();
                shape22.Position.x = 6000;
                shape22.Position.y = 6000;
            }
        }
        else
        {
            // Left collision
            if (vX21 > 0)
            {
                colDir21 = "l";
                totalGoldCollected += 1;
                goldCollected.play();
                shape22.Position.x = 6000;
                shape22.Position.y = 6000;
            }
            // Right collision
            else
            {
                colDir21 = "r";
                totalGoldCollected += 1;
                goldCollected.play();
                shape22.Position.x = 6000;
                shape22.Position.y = 6000;
            }
        }
    }

    let vX22 = (shape0.Position.x + (shape0.img.width / 2)) - (shape23.Position.x + (shape23.img.width / 2)),
    vY22 = (shape0.Position.y + (shape0.img.height / 2)) - (shape23.Position.y + (shape23.img.height / 2)),
    halfWidths22 = (shape0.img.width / 2) + (shape23.img.width / 2),
    halfHeights22 = (shape0.img.height / 2) + (shape23.img.height / 2),
    colDir22 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX22) < halfWidths22 && Math.abs(vY22) < halfHeights22)
    {
        let oX22 = halfWidths22 - Math.abs(vX22),
            oY22 = halfHeights22 - Math.abs(vY22);

        if (oX22 >= oY22)
        {
            // Top collision
            if (vY22 > 0)
            {
                colDir22 = "t";
                totalGoldCollected += 1;
                goldCollected.play();
                shape23.Position.x = 7000;
                shape23.Position.y = 7000;
            }
            // Bottom collision
            else
            {
                colDir22 = "b";
                totalGoldCollected += 1;
                goldCollected.play();
                shape23.Position.x = 7000;
                shape23.Position.y = 7000;
            }
        }
        else
        {
            // Left collision
            if (vX22 > 0)
            {
                colDir22 = "l";
                totalGoldCollected += 1;
                goldCollected.play();
                shape23.Position.x = 7000;
                shape23.Position.y = 7000;
            }
            // Right collision
            else
            {
                colDir22 = "r";
                totalGoldCollected += 1;
                goldCollected.play();
                shape23.Position.x = 7000;
                shape23.Position.y = 7000;
            }
        }
    }

    let vX23 = (shape0.Position.x + (shape0.img.width / 2)) - (shape24.Position.x + (shape24.img.width / 2)),
    vY23 = (shape0.Position.y + (shape0.img.height / 2)) - (shape24.Position.y + (shape24.img.height / 2)),
    halfWidths23 = (shape0.img.width / 2) + (shape24.img.width / 2),
    halfHeights23 = (shape0.img.height / 2) + (shape24.img.height / 2),
    colDir23 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX23) < halfWidths23 && Math.abs(vY23) < halfHeights23)
    {
        let oX23 = halfWidths23 - Math.abs(vX23),
            oY23 = halfHeights23 - Math.abs(vY23);

        if (oX23 >= oY23)
        {
            // Top collision
            if (vY23 > 0)
            {
                colDir23 = "t";
                totalGoldCollected += 1;
                goldCollected.play();
                shape24.Position.x = 8000;
                shape24.Position.y = 8000;
            }
            // Bottom collision
            else
            {
                colDir23 = "b";
                totalGoldCollected += 1;
                goldCollected.play();
                shape24.Position.x = 8000;
                shape24.Position.y = 8000;
            }
        }
        else
        {
            // Left collision
            if (vX23 > 0)
            {
                colDir23 = "l";
                totalGoldCollected += 1;
                goldCollected.play();
                shape24.Position.x = 8000;
                shape24.Position.y = 8000;
            }
            // Right collision
            else
            {
                colDir23 = "r";
                totalGoldCollected += 1;
                goldCollected.play();
                shape24.Position.x = 8000;
                shape24.Position.y = 8000;
            }
        }
    }

    let vX24 = (shape0.Position.x + (shape0.img.width / 2)) - (shape25.Position.x + (shape25.img.width / 2)),
    vY24 = (shape0.Position.y + (shape0.img.height / 2)) - (shape25.Position.y + (shape25.img.height / 2)),
    halfWidths24 = (shape0.img.width / 2) + (shape25.img.width / 2),
    halfHeights24 = (shape0.img.height / 2) + (shape25.img.height / 2),
    colDir24 = null;

    // Whenever the x or y velocity of the player exceeds the width or height of another obj
    if (Math.abs(vX24) < halfWidths24 && Math.abs(vY24) < halfHeights24)
    {
        let oX24 = halfWidths24 - Math.abs(vX24),
            oY24 = halfHeights24 - Math.abs(vY24);

        if (oX24 >= oY24)
        {
            // Top collision
            if (vY24 > 0)
            {
                colDir24 = "t";
                totalGoldCollected += 1;
                goldCollected.play();
                shape25.Position.x = 9000;
                shape25.Position.y = 9000;
            }
            // Bottom collision
            else
            {
                colDir24 = "b";
                totalGoldCollected += 1;
                goldCollected.play();
                shape25.Position.x = 9000;
                shape25.Position.y = 9000;
            }
        }
        else
        {
            // Left collision
            if (vX24 > 0)
            {
                colDir24 = "l";
                totalGoldCollected += 1;
                goldCollected.play();
                shape25.Position.x = 9000;
                shape25.Position.y = 9000;
            }
            // Right collision
            else
            {
                colDir24 = "r";
                totalGoldCollected += 1;
                goldCollected.play();
                shape25.Position.x = 9000;
                shape25.Position.y = 9000;
            }
        }
    }
    // #endregion
    
    // Return all of my collisions.
    return colDir0, colDir1, colDir2, colDir3, colDir4, colDir5, colDir6, colDir7, colDir8, colDir9, colDir10, colDir11, colDir12, colDir13, colDir14, colDir15, colDir16, colDir17, colDir18, colDir19, colDir20, colDir21, colDir22, colDir23, colDir24;
}

// Keeps track of delta time
function Update(delta)
{
    // When delta time exceeds 1000, start a new clock cycle.
    if ((delta>1000))
    {
        startTimeMS = new Date().getTime();
    }
    
    // Check for input each delta frame update.
    Input();

    // If spacebar is pressed in main menu.
    if (keys[32] && gameState == 0)
    {
        gameState = 1; // Set game state to initialise.
    }

    // If spacebar is pressed in game over.
    if (keys[32] && gameState == 3)
    {
        gameState = 1; // Set game state to initialise.
    }

    // #region Movement
    // animationFrame() in here as trying to prevent as many animation calls
    // being sent to call stack. 
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

    if (keys[87])
    {
        player.Velocity.y = player.Velocity.y -0.5;
        animationFrame();
    }

    if (keys[83])
    {
        player.Velocity.y = player.Velocity.y +0.5;
        animationFrame();
    }
    // #endregion

    // Check for collisions.
    let dir = colCheck(player);

    // If there is a left or right side collision
    if (dir === "l" || dir === "r") {
        player.Velocity.x = 0; // Player velocity is equal to 0.
    }
    // If there is a top side collision
    else if (dir === "t") {
        player.Velocity.y = 0; // Player velocity is equal to 0.
    }
    // If there is a bottom side collision
    else if (dir === "b") {
        player.Velocity.y = 0; // Player velocity is equal to 0.
    }

    player.Velocity.x *= friction; // Player velocity x affected by friction.
    player.Velocity.y *= friction; // Player velocity y affected by friction.
    player.Position.x += player.Velocity.x; // Apply velocity to Player x position.
    player.Position.y += player.Velocity.y; // Apply velocity to Player y position.
}
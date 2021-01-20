// Run a reoccuring loop so the game can be run/updated.

function gameLoop()
{
    switch (gameState)
    {
        case 0: // START MENU.
            let elapsed0 = new Date().getTime() - startTimeMS; // Start a new clock time.
            Update(elapsed0); // Update parallel to clock time.
            context.rect(0, 0, canvas.width, canvas.height); // Set up area for main menu image to draw to.
            context.drawImage(menuImg, 0, 0, canvas.width, canvas.height); // Draw main menu image.
            window.requestAnimationFrame(gameLoop); // Restart loop.
            break;
        case 1: // INITIALISE.
            
            //Set x and y position for all game objects in scene.

            player.Position.x = 0;
            player.Position.y = 50;
    
            collider0.Position.x = 0;
            collider0.Position.y = 0;

            collider01.Position.x = 0;
            collider01.Position.y = 100;

            collider02.Position.x = 105.5;
            collider02.Position.y = 255;

            collider03.Position.x = 900;
            collider03.Position.y = 100;

            collider04.Position.x = 0;
            collider04.Position.y = 453;

            collider05.Position.x = 505;
            collider05.Position.y = 555;

            collider06.Position.x = 1305;
            collider06.Position.y = 30;

            collider07.Position.x = 0;
            collider07.Position.y = 0;

            collider08.Position.x = 1358;
            collider08.Position.y = 300;

            collider09.Position.x = 0;
            collider09.Position.y = 695;

            collider010.Position.x = 794;
            collider010.Position.y = 290;

            collider011.Position.x = 794;
            collider011.Position.y = 250;

            collider012.Position.x = 750;
            collider012.Position.y = 250;

            collider013.Position.x = 650;
            collider013.Position.y = 250;

            collider014.Position.x = 654;
            collider014.Position.y = 250;

            collider015.Position.x = 654;
            collider015.Position.y = 453;

            collider016.Position.x = 903;
            collider016.Position.y = 453;

            collider017.Position.x = 903;
            collider017.Position.y = 652;

            collider018.Position.x = 442;
            collider018.Position.y = 654;

            collider019.Position.x = 442;
            collider019.Position.y = 515;

            goldChest0.Position.x = 10;
            goldChest0.Position.y = 150;

            goldChest1.Position.x = 190;
            goldChest1.Position.y = 600;

            goldChest2.Position.x = 825;
            goldChest2.Position.y = 238;

            goldChest3.Position.x = 850;
            goldChest3.Position.y = 650;

            goldChest4.Position.x = 1120;
            goldChest4.Position.y = 150;

            themeTune.play(); // Play theme.
            gameState = 2; // Switch to running game state.
            window.requestAnimationFrame(gameLoop); // Restart loop.
            break;
        case 2: // RUNNING.
            let elapsed1 = new Date().getTime() - startTimeMS; // Start a new clock time.
            Update(elapsed1); // Update parallel to clock time.
            context.clearRect(0, 0, 1366, 720); // Clear the screen.


            // For every column in the tileset.
            for (var y = 0; y < tileSetH; y++)
            {
                // For every row in the tileset.
                for (var x = 0; x < tileSetW; x++)
                {
                    // Find corresponding case in tilemap.
                    switch(tileSet[((y * tileSetW) + x)])
                    {
                        // Apply x and y position to game object for each case
                        // and draw the tile in the assigned position.

                        case 0:
                            testObj.Position.x = x * testObj.img.width;
                            testObj.Position.y = y * testObj.img.height;
                            testObj.drawTile(context);
                            //placeTiles.push(testObj);
                            break;
                        case 1:
                            floorTile0.Position.x = x * floorTile0.img.width;
                            floorTile0.Position.y = y * floorTile0.img.height;
                            floorTile0.drawTile(context);
                            //placeTiles.push(floorTile0); 
                            break;
                        case 2:
                            wallTile1.Position.x = x * wallTile1.img.width;
                            wallTile1.Position.y = y * wallTile1.img.height;
                            wallTile1.drawTile(context);
                            //placeTiles.push(wallTile1);
                            break;
                        case 3:
                            cornerObjTL.Position.x = x * cornerObjTL.img.width;
                            cornerObjTL.Position.y = y * cornerObjTL.img.height;
                            cornerObjTL.drawTile(context);
                            //placeTiles.push(cornerObjTL);
                            break;
                        case 4:
                            objT.Position.x = x * objT.img.width;
                            objT.Position.y = y * objT.img.height;
                            objT.drawTile(context);
                            //placeTiles.push(objT);
                            break;
                        case 5:
                            cornerObjBL.Position.x = x * cornerObjBL.img.width;
                            cornerObjBL.Position.y = y * cornerObjBL.img.height;
                            cornerObjBL.drawTile(context);
                            //placeTiles.push(cornerObjBL);
                            break;
                        case 6:
                            objB.Position.x = x * objB.img.width;
                            objB.Position.y = y * objB.img.height;
                            objB.drawTile(context);                    
                            //placeTiles.push(objB);
                            break;
                        case 7:
                            cornerObjTR.Position.x = x * cornerObjTR.img.width;
                            cornerObjTR.Position.y = y * cornerObjTR.img.height;
                            cornerObjTR.drawTile(context);
                            //placeTiles.push(cornerObjTR);
                            break;
                        case 8:
                            cornerObjBR.Position.x = x * cornerObjBR.img.width;
                            cornerObjBR.Position.y = y * cornerObjBR.img.height;
                            cornerObjBR.drawTile(context);
                            //placeTiles.push(cornerObjBR);
                            break;
                        case 9:
                            objL.Position.x = x * objL.img.width;
                            objL.Position.y = y * objL.img.height;
                            objL.drawTile(context);
                            //placeTiles.push(objL);
                            break;
                        case 10:
                            objR.Position.x = x * objR.img.width;
                            objR.Position.y = y * objR.img.height;
                            objR.drawTile(context);
                            //placeTiles.push(objR);
                            break;
                        case 11:
                            objTDark.Position.x = x * objTDark.img.width;
                            objTDark.Position.y = y * objTDark.img.height;
                            objTDark.drawTile(context);
                            //placeTiles.push(objTDark);
                            break;
                        case 12:
                            objBDark.Position.x = x * objBDark.img.width;
                            objBDark.Position.y = y * objBDark.img.height;
                            objBDark.drawTile(context);
                            //placeTiles.push(objBDark);
                            break;
                        case 13:
                            objLDark.Position.x = x * objLDark.img.width;
                            objLDark.Position.y = y * objLDark.img.height;
                            objLDark.drawTile(context);
                            //placeTiles.push(objLDark);
                            break;
                        case 14:
                            objRDark.Position.x = x * objRDark.img.width;
                            objRDark.Position.y = y * objRDark.img.height;
                            objRDark.drawTile(context);
                            //placeTiles.push(objRDark);
                            break;
                        case 15:
                            cornerObjTLDark.Position.x = x * cornerObjTLDark.img.width;
                            cornerObjTLDark.Position.y = y * cornerObjTLDark.img.height;
                            cornerObjTLDark.drawTile(context);
                            //placeTiles.push(cornerObjTLDark);
                            break;
                        case 16:
                        cornerObjTRDark.Position.x = x * cornerObjTRDark.img.width;
                        cornerObjTRDark.Position.y = y * cornerObjTRDark.img.height;
                        cornerObjTRDark.drawTile(context);
                        //placeTiles.push(cornerObjTRDark);
                        break;
                        case 17:
                            cornerObjBLDark.Position.x = x * cornerObjBLDark.img.width;
                            cornerObjBLDark.Position.y = y * cornerObjBLDark.img.height;
                            cornerObjBLDark.drawTile(context);
                            //placeTiles.push(cornerObjBLDark);
                            break;
                        case 18:
                            cornerObjBRDark.Position.x = x * cornerObjBRDark.img.width;
                            cornerObjBRDark.Position.y = y * cornerObjBRDark.img.height;
                            cornerObjBRDark.drawTile(context);
                            //placeTiles.push(cornerObjBRDark);
                            break;
                        case 19:
                            darkTile.Position.x = x * darkTile.img.width;
                            darkTile.Position.y = y * darkTile.img.height;
                            darkTile.drawTile(context);
                            //placeTiles.push(darkTile);
                            break;
                            default:
                    }
                }
            }
            goldChest0.drawTile(context); // Draw collectible 1.
            goldChest1.drawTile(context); // Draw collectible 2.
            goldChest2.drawTile(context); // Draw collectible 3.
            goldChest3.drawTile(context); // Draw collectible 4.
            goldChest4.drawTile(context); // Draw collectible 5.
            player.draw(context); // Draw the player.

            context.font = "48px Comic Sans MS"; // Establish UI font.
            context.fillStyle = "white"; // Establish UI font fill colour.
            context.textAlign = "center"; // Align text with center of UI element it resides on.
            context.fillText("Gold collected: " + totalGoldCollected, canvas.width / 2, 40); // Show the total number of gold collected by the player.

            // If the player collects 5 or more gold and the game state is set to running.
            if (totalGoldCollected >= 5 && gameState == 2)
            {
                gameState = 3; // Set the game state to game over.
            }
            
            window.requestAnimationFrame(gameLoop); // Restart loop.
            break;
        case 3: // GAME OVER
            let elapsed2 = new Date().getTime() - startTimeMS; // Start a new clock time.
            Update(elapsed2); // Update parallel to clock time.
            totalGoldCollected = 0; // Reset total gold collected.
            context.rect(0, 0, canvas.width, canvas.height); // Set up areas for game over image to draw to.
            context.drawImage(gameOverImg, 0, 0, canvas.width, canvas.height); // Draw game over image.
            themeTune.pause(); // Pause game theme.
            themeTune.currentTime = 0; // Reset game theme.
            goldCollected.pause(); // Pause gold collected SFX.
            goldCollected.currentTime = 0; // Reset gold collected SFX.
            window.requestAnimationFrame(gameLoop); // Restart loop.
            break;
    } 
}
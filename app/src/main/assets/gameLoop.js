function gameLoop()
{
    switch (gameState)
    {
        case 0: // START MENU
            let elapsed0 = new Date().getTime() - startTimeMS;
            Update(elapsed0);
            context.rect(0, 0, canvas.width, canvas.height);
            context.drawImage(menuImg, 0, 0, canvas.width, canvas.height);
            window.requestAnimationFrame(gameLoop);
            break;
        case 1: // INITIALISE
            // When application first loads
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

            // theme tune in here?
            themeTune.play();
            gameState = 2;
            window.requestAnimationFrame(gameLoop);
            break;
        case 2: // RUNNING
            let elapsed1 = new Date().getTime() - startTimeMS;
            Update(elapsed1);
            context.clearRect(0, 0, 1366, 720);



            for (var y = 0; y < tileSetH; y++)
            {
                for (var x = 0; x < tileSetW; x++)
                {
                    switch(tileSet[((y * tileSetW) + x)])
                    {
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
            goldChest0.drawTile(context);
            goldChest1.drawTile(context);
            goldChest2.drawTile(context);
            goldChest3.drawTile(context);
            goldChest4.drawTile(context);
            player.draw(context);

            context.font = "48px Comic Sans MS";
            context.fillStyle = "white";
            context.textAlign = "center";
            context.fillText("Gold collected: " + coinsCollected, canvas.width / 2, 40);            

            if (coinsCollected >= 5 && gameState == 2)
            {
                gameState = 3;
            }
            
            window.requestAnimationFrame(gameLoop);
            break;
        case 3: // GAME OVER
            let elapsed2 = new Date().getTime() - startTimeMS;
            Update(elapsed2);
            coinsCollected = 0;
            context.rect(0, 0, canvas.width, canvas.height);
            context.drawImage(gameOverImg, 0, 0, canvas.width, canvas.height);
            themeTune.pause();
            themeTune.currentTime = 0;
            goldCollected.pause();
            goldCollected.currentTime = 0;
            window.requestAnimationFrame(gameLoop);
            break;
    } 
}
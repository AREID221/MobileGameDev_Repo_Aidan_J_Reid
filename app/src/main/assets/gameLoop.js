function gameLoop()
{
    //console.debug(a);
    let elapsed = new Date().getTime() - startTimeMS;
    Update(elapsed);
    
    //context.clearRect(0, 0, 1366, 720);
    
    for (var y = 0; y < mapH; y++)
    {
        for (var x = 0; x < mapW; x++)
        {
            switch(tileMap[((y * mapW) + x)])
            {
                case 0:
                    testObj.Position.x = x * testObj.img.width;
                    testObj.Position.y = y * testObj.img.height;
                    //testObj.drawTile(context);
                    let floatingObj0 = new gameObject(testObj.Position.x, testObj.Position.y, testObj.img.width, testObj.img.height);
                    placeTiles.push(floatingObj0);
                    break;
                case 1:
                    floorTile0.Position.x = x * floorTile0.img.width;
                    floorTile0.Position.y = y * floorTile0.img.height;            
                    //floorTile0.drawTile(context);
                    let floatingObj1 = new gameObject(floorTile0.Position.x, floorTile0.Position.y, floorTile0.img.width, floorTile0.img.height);
                    placeTiles.push(floatingObj1); 
                    break;
                case 2:
                    wallTile1.Position.x = x * wallTile1.img.width;
                    wallTile1.Position.y = y * wallTile1.img.height;
                    //wallTile1.drawTile(context);
                    let floatingObj2 = new gameObject(wallTile1.Position.x, wallTile1.Position.y, wallTile1.img.width, wallTile1.img.height);
                    placeTiles.push(floatingObj2);
                    break;
                case 3:
                    cornerObjTL.Position.x = x * cornerObjTL.img.width;
                    cornerObjTL.Position.y = y * cornerObjTL.img.height;
                    //cornerObjTL.drawTile(context);
                    let floatingObj3 = new gameObject(cornerObjTL.Position.x, cornerObjTL.Position.y, cornerObjTL.img.width, cornerObjTL.img.height);
                    placeTiles.push(floatingObj3);
                    break;
                case 4:
                    objT.Position.x = x * objT.img.width;
                    objT.Position.y = y * objT.img.height;
                    //objT.drawTile(context);
                    let floatingObj4 = new gameObject(objT.Position.x, objT.Position.y, objT.img.width, objT.img.height);
                    placeTiles.push(floatingObj4);
                    break;
                case 5:
                    cornerObjBL.Position.x = x * cornerObjBL.img.width;
                    cornerObjBL.Position.y = y * cornerObjBL.img.height;
                    //cornerObjBL.drawTile(context);
                    let floatingObj5 = new gameObject(cornerObjBL.Position.x, cornerObjBL.Position.y, cornerObjBL.img.width, cornerObjBL.img.height);
                    placeTiles.push(floatingObj5);
                    break;
                case 6:
                    objB.Position.x = x * objB.img.width;
                    objB.Position.y = y * objB.img.height;
                    //objB.drawTile(context);
                    let floatingObj6 = new gameObject(objB.Position.x, objB.Position.y, objB.img.width, objB.img.height);
                    placeTiles.push(floatingObj6);
                    break;
                case 7:
                    cornerObjTR.Position.x = x * cornerObjTR.img.width;
                    cornerObjTR.Position.y = y * cornerObjTR.img.height;
                    //cornerObjTR.drawTile(context);
                    let floatingObj7 = new gameObject(cornerObjTR.Position.x, cornerObjTR.Position.y, cornerObjTR.img.width, cornerObjTR.img.height);
                    placeTiles.push(floatingObj7);
                    break;
                case 8:
                    cornerObjBR.Position.x = x * cornerObjBR.img.width;
                    cornerObjBR.Position.y = y * cornerObjBR.img.height;
                    //cornerObjBR.drawTile(context);
                    let floatingObj8 = new gameObject(cornerObjBR.Position.x, cornerObjBR.Position.y, cornerObjBR.img.width, cornerObjBR.img.height);
                    placeTiles.push(floatingObj8);
                    break;
                case 9:
                    objL.Position.x = x * objL.img.width;
                    objL.Position.y = y * objL.img.height;
                    //objL.drawTile(context);
                    let floatingObj9 = new gameObject(objL.Position.x, objL.Position.y, objL.img.width, objL.img.height);
                    placeTiles.push(floatingObj9);
                    break;
                case 10:
                    objR.Position.x = x * objR.img.width;
                    objR.Position.y = y * objR.img.height;
                    //objR.drawTile(context);
                    let floatingObj10 = new gameObject(objR.Position.x, objR.Position.y, objR.img.width, objR.img.height);
                    placeTiles.push(floatingObj10);
                    break;
                case 11:
                    objTDark.Position.x = x * objTDark.img.width;
                    objTDark.Position.y = y * objTDark.img.height;
                    //objTDark.drawTile(context);
                    let floatingObj11 = new gameObject(objTDark.Position.x, objTDark.Position.y, objTDark.img.width, objTDark.img.height);
                    placeTiles.push(floatingObj11);
                    break;
                case 12:
                    objBDark.Position.x = x * objBDark.img.width;
                    objBDark.Position.y = y * objBDark.img.height;
                    //objBDark.drawTile(context);
                    let floatingObj12 = new gameObject(objBDark.Position.x, objBDark.Position.y, objBDark.img.width, objBDark.img.height);
                    placeTiles.push(floatingObj12);
                    break;
                case 13:
                    objLDark.Position.x = x * objLDark.img.width;
                    objLDark.Position.y = y * objLDark.img.height;
                    //objLDark.drawTile(context);
                    let floatingObj13 = new gameObject(objLDark.Position.x, objLDark.Position.y, objLDark.img.width, objLDark.img.height);
                    placeTiles.push(floatingObj13);
                    break;
                case 14:
                    objRDark.Position.x = x * objRDark.img.width;
                    objRDark.Position.y = y * objRDark.img.height;
                    //objRDark.drawTile(context);
                    let floatingObj14 = new gameObject(objRDark.Position.x, objRDark.Position.y, objRDark.img.width, objRDark.img.height);
                    placeTiles.push(floatingObj14);
                    break;
                case 15:
                    cornerObjTLDark.Position.x = x * cornerObjTLDark.img.width;
                    cornerObjTLDark.Position.y = y * cornerObjTLDark.img.height;
                    //cornerObjTLDark.drawTile(context);
                    let floatingObj15 = new gameObject(cornerObjTLDark.Position.x, cornerObjTLDark.Position.y, cornerObjTLDark.img.width, cornerObjTLDark.img.height);
                    placeTiles.push(floatingObj15);
                    break;
                case 16:
                    cornerObjTRDark.Position.x = x * cornerObjTRDark.img.width;
                    cornerObjTRDark.Position.y = y * cornerObjTRDark.img.height;
                    //cornerObjTRDark.drawTile(context);
                    let floatingObj16 = new gameObject(cornerObjTR.Position.x, cornerObjTR.Position.y, cornerObjTR.img.width, cornerObjTR.img.height);
                    placeTiles.push(floatingObj16);
                    break;
                case 17:
                    cornerObjBLDark.Position.x = x * cornerObjBLDark.img.width;
                    cornerObjBLDark.Position.y = y * cornerObjBLDark.img.height;
                    //cornerObjBLDark.drawTile(context);
                    let floatingObj17 = new gameObject(cornerObjBLDark.Position.x, cornerObjBLDark.Position.y, cornerObjBLDark.img.width, cornerObjBLDark.img.height);
                    placeTiles.push(floatingObj17);
                    break;
                case 18:
                    cornerObjBRDark.Position.x = x * cornerObjBRDark.img.width;
                    cornerObjBRDark.Position.y = y * cornerObjBRDark.img.height;
                    //cornerObjBRDark.drawTile(context);
                    let floatingObj18 = new gameObject(cornerObjBRDark.Position.x, cornerObjBRDark.Position.y, cornerObjBRDark.img.width, cornerObjBRDark.img.height);
                    placeTiles.push(floatingObj18);
                    break;
                case 19:
                    darkTile.Position.x = x * darkTile.img.width;
                    darkTile.Position.y = y * darkTile.img.height;
                    //darkTile.drawTile(context);
                    let floatingObj19 = new gameObject(darkTile.Position.x, darkTile.Position.y, darkTile.img.width, darkTile.img.height);
                    placeTiles.push(floatingObj19);
                    break;
                    default:
                        // floorTile0.Position.x = x * tileW;
                        // floorTile0.Position.y = y * tileH;

            }
        }
    }

    // for (let i = 0; i < tileMap.length - 1; i++)
    // {
    //     tileMap[i].drawTile(context);
    // }

    CameraUpdate();

    madObj.drawTile(context);
    player.draw(context);

    


    
    requestAnimationFrame(gameLoop);
}
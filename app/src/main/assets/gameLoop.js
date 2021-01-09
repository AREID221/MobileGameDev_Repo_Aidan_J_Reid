function gameLoop()
{
    //console.debug(a);
    let elapsed = new Date().getTime() - startTimeMS;
    Update(elapsed);
    
    floorTile0.drawTile(context);
    floorTile1.drawTile(context);
    floorTile2.drawTile(context);
    floorTile3.drawTile(context);

    wallTile0.drawWall(context);

    player.draw(context);

    

    
    requestAnimationFrame(gameLoop);
}
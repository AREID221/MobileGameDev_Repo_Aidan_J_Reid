function gameLoop()
{
    let elapsed = new Date().getTime() - startTimeMS;
    Update(elapsed);
    
    player.draw(context);
    randomTestImage.drawTile(context);
    for (var i = 0; i < tiles.length; i++)
    { 
        //randomTestImage.Position.x = tiles.x;
        //randomTestImage.Position.y = tiles.y;

    }

    
    requestAnimationFrame(gameLoop);
}
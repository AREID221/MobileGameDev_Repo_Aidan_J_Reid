function gameLoop()
{
    let elapsed = new Date().getTime() - startTimeMS;
    Update(elapsed);
    wallTile_Vent.draw(context);
    player.draw(context);
    floorStandard.draw(context);
    requestAnimationFrame(gameLoop);
    //console.log(elapsed);
}
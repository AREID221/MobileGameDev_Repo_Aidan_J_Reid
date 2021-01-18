function CameraUpdate()
{
    context.clearRect(0, 0, 1366, 720);

    for (let i = 0; i < tileMap.length; i++)
    {
        placeTiles[i].drawTile(context);
    }
}
class wallTiles
{
    constructor(x, y, img)
    {
        this.Position = new Vector2(x, y);
        this.img = new Image(100, 50);
        this.img.src = img;
    }

    drawWall(context)
    {
        context.drawImage(this.img, wallTileWidth, wallTileHeight, wallTileWidth, wallTileHeight, this.Position.x, this.Position.y, this.img.width, this.img.height);
    }
}
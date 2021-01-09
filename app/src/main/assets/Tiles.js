class Tiles
{
    constructor(x, y, img)
    {
        this.Position = new Vector2(x, y);
        this.img = new Image(canvas.width / 2, canvas.height / 2);
        this.img.src = img;
    }

    drawTile(context)
    {
        context.drawImage(this.img, tileWidth, tileHeight, tileWidth, tileHeight, this.Position.x, this.Position.y, this.img.width, this.img.height);
    }
}
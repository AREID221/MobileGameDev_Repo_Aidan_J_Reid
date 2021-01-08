class tileObj
{
    constructor(x, y, img)
    {
        this.Position = new Vector2(x, y);
        this.img = new Image(100, 100);
        this.img.src = img;
    }

    draw(context)
    {
        context.drawImage(this.img, 0, 0, tileWidth, tileHeight, this.Position.x, this.Position.y, wallTile_Vent.img.width, wallTile_Vent.img.height);
    }
}
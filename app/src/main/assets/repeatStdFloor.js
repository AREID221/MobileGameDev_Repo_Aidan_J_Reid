class repeatStdFloor
{
    constructor(x, y, img)
    {
        this.Position = new Vector2(x, y);
        this.img = new Image(150, 100);
        this.img.src = img;
    }

    draw(context)
    {
        context.drawImage(this.img, 0, 0, floorWidth, floorHeight, this.Position.x, this.Position.y, floorStandard.img.width, floorStandard.img.height);
    }
}
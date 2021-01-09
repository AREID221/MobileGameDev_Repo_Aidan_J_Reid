class gameObject
{
    constructor(x, y, velX, velY, img)
    {
        velX = 0;
        velY = 0;
        this.Position = new Vector2(x, y);
        this.Velocity = new Vector2(velX, velY);
        this.img = new Image(50, 50);
        //this.img = new Image(20, 20);
        this.img.src = img;
    }

    draw(context)
    {
        context.drawImage(this.img, spriteWidth * frameX, spriteHeight * frameY, spriteWidth, spriteHeight, this.Position.x, this.Position.y, this.img.width, this.img.height);
    }

    drawTile(context)
    {
        context.drawImage(this.img, tileWidth, tileHeight, tileWidth, tileHeight, this.Position.x, this.Position.y, this.img.width, this.img.height);
    }
}
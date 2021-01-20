// Class emulating structure of a game object.
//
// Five values are given: x, y, velocity x, velocity y and a sprite source image.
class gameObject
{
    constructor(x, y, velX, velY, img)
    {
        velX = 0; // Velocity x initially set to 0 to prevent unintended movement.
        velY = 0; // Velocity y initially set to 0 to prevent unintended movement.
        this.Position = new Vector2(x, y); // x and y coordinates condensed into Position identifier.
        this.Velocity = new Vector2(velX, velY); // Velocity x and velocity y condensed into Velocity identifier.
        this.img = new Image(0, 0); // Image width and height initially set to 0 as this is determined post-creation of a game object.
        this.img.src = img; // Return an image from the filepath given.
    }

    // Draw the player (animated).
    draw(context)
    {
        context.drawImage(this.img, spriteWidth * frameX, spriteHeight * frameY, spriteWidth, spriteHeight, this.Position.x, this.Position.y, this.img.width, this.img.height);
    }

    // Draw tiles (static).
    drawTile(context)
    {
        context.drawImage(this.img, this.Position.x, this.Position.y, this.img.width, this.img.height);
    }
}
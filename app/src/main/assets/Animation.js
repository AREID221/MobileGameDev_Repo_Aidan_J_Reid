function animationFrame()
{
    let elapsed = (Date.now() - startTimeMS) / 1000;
    startTimeMS = Date.now();

    frameTimer = frameTimer - elapsed;

    if (frameTimer <= 0) {
        frameTimer = frameTimeMax;
        frameX++;

        if (frameX > frameXMax) {
            frameX = 0;
            frameY++;

            if (frameY > frameYMax) {
                frameY = 0;
            }
        }

        frame++;

        if (frame > frameMax) {
            frame = 0;
            frameX = 0;
            frameY = 0;
        }
    }
}
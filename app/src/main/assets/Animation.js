
// Non-static sprites run through a spritesheet
// X/Y of image cut into frames to appear animated.
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

function idleAnimationFrame()
{
    let elapsed = (Date.now() - startTimeMS) / 1000;
    startTimeMS = Date.now();

    frameTimer = frameTimer - elapsed;

    if (frameTimer <= 0)
    {
        frameTimer = frameTimeMax;
        frameX++;

        frame++;

        if (frame > frameMax) 
        {
            frame = 0;
            frameX = 0;
        }
    }
}
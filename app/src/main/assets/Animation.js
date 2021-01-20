// Non-static sprites run through a spritesheet
// X/Y of image cut into frames to appear animated.
function animationFrame()
{
    let elapsed = (Date.now() - startTimeMS) / 1000; // Start a a new clock cycle and divide it by 1000. 
    startTimeMS = Date.now();

    frameTimer = frameTimer - elapsed; // Run through timer.

    // If the frame timer expires.
    if (frameTimer <= 0) {
        frameTimer = frameTimeMax; // Hit max frames.
        frameX++; // Increment frame x by one, move along spritesheet.

        // If hit max x frame.
        if (frameX > frameXMax) {
            frameX = 0; // Reset x frames.
            frameY++; // Increment frame y by one, move down spritesheet.

            // If hit max y frame.
            if (frameY > frameYMax) {
                frameY = 0; // Reset y frames.
            }
        }

        frame++; // Increment frames.

        // if hit max frames.
        if (frame > frameMax) {
            frame = 0; // Reset frames.
            frameX = 0; // Reset x frames.
            frameY = 0; // Reset y frames.
        }
    }
}

// Work done on reducing animation data being sent to call stack, unsuccessful.
// function idleAnimationFrame()
// {
//     let elapsed = (Date.now() - startTimeMS) / 1000;
//     startTimeMS = Date.now();

//     frameTimer = frameTimer - elapsed;

//     if (frameTimer <= 0)
//     {
//         frameTimer = frameTimeMax;
//         frameX++;

//         frame++;

//         if (frame > frameMax) 
//         {
//             frame = 0;
//             frameX = 0;
//         }
//     }
// }
// Checks for key/button input from the user.

function Input()
{
    // If there is a keydown input.
    document.body.addEventListener("keydown", function (event) {
        keys[event.keyCode] = true; // A key is being pressed. Query the key pressed. Set event listener output to true.
    });

    // If there is a keyup input.
    document.body.addEventListener("keyup", function (event) {
        keys[event.keyCode] = false; // A key has been released. Query the key released. Set event listener output to false.
    });
}
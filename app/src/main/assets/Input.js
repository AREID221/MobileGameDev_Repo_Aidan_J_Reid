function Input()
{
    document.body.addEventListener("keydown", function (event) {
        keys[event.keyCode] = true;
    });

    document.body.addEventListener("keyup", function (event) {
        keys[event.keyCode] = false;
    });
}
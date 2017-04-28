let player = $('#player');

// our gameploop
function loop() {
    
    // get first gamepad
    let gamepad = navigator.getGamepads()[0];
    
    if (gamepad) {
    
        // get first axis value
        let direction = gamepad.axes[0] * 4;

        // get player position
        let left = player.position().left;

        // set player position
        player.css('left', left + direction);

        console.log(direction);
    
    }
    
    // call loop again
    window.requestAnimationFrame(loop);
}

// start the loop
loop();
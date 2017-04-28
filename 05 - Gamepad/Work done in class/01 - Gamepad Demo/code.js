let player = $('#player');
const SPEED = 4;


// our gameploop
function loop() {
    
    // get first gamepad
    let gamepad = navigator.getGamepads()[0];
    
    if (gamepad) {
    
        // get first axis value
        let direction = gamepad.axes[0] * SPEED;
        
        // ignore small values
        if (Math.abs(direction) < 0.1) {
            direction = 0;
        }

        // get player position
        let left = player.position().left;

        // set player position
        player.css('left', left + direction);

        // change player colour
        let colour = gamepad.axes[2];
        colour = Math.abs(colour) * 360;
        player.css('background', `hsl(${colour}, 50%, 50%)`);
        //player.css('background', 'hsl(' + colour + ', 50%, 50%)');
        
        console.log(direction);
    
    }
    
    // call loop again
    window.requestAnimationFrame(loop);
}

// start the loop
loop();
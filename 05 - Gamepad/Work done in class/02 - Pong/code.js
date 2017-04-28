// get canvas and context
let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

// set canvas to full size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function drawCircle(ctx, x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
}

function drawRectangle(ctx, x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.closePath();
    ctx.fill();
}


// ball
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speedX: 3,
    speedY: 3,
    radius: 10,
    color: 'white'
}

// player
let player = {
    x: 10,
    y: 100,
    width: 10,
    height: 300,
    color: 'white',
    speed: 5
}


// gameloop
function loop() {
    
    // clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // user input
    let gamepad = navigator.getGamepads()[0];
    if (gamepad) {
        if (Math.abs(gamepad.axes[0]) > 0.1) { // prevent gamepad jitter
            player.x += gamepad.axes[0] * player.speed;
        }
        
        if (Math.abs(gamepad.axes[1]) > 0.1) {
            player.y += gamepad.axes[1] * player.speed;
        }
    }
    
    // update
    ball.x += ball.speedX;
    ball.y += ball.speedY;
    
    // collision
    if (ball.x < 0 ||
        ball.x > canvas.width) {
        ball.speedX *= -1;
    }
    
    if (ball.y < 0 ||
        ball.y > canvas.height) {
        ball.speedY *= -1;
    }
    
    
    // draw
    drawCircle(ctx, ball.x, ball.y, ball.radius, ball.color);
    drawRectangle(ctx, player.x, player.y, player.width, player.width, player.color);
    
    window.requestAnimationFrame(loop);
}

loop(); // start the loop







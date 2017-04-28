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

drawCircle(ctx, 100, 100, 50, 'white');
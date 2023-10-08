let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let radius = canvas.height / 2;
context.translate(radius, radius);
radius = radius * 0.90;
function draw() {
    context.beginPath();
    context.fillStyle = "white";
    context.arc(0, 0, radius, 0, Math.PI * 2);
    context.fill();
    drawFace(context,radius);
    drawNumbers(context,radius);
}
function drawFace(context, radius) {
    const grad = context.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');

    context.beginPath();
    context.arc(0, 0, radius, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    context.strokeStyle = grad;
    context.lineWidth = radius * 0.1;
    context.stroke();

    context.beginPath();
    context.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
    context.fillStyle = '#333';
    context.fill();
}
function drawNumbers (context, radius){
    context.font = radius * 0.15 + "px arial";
    context.textBaseline = "middle";
    context.textAlign = "center";
    for(let num = 1; num <13; num++){
        let angle = num * Math.PI / 6;
        context.rotate(angle);
        context.translate(0,-radius * 0.85);
        context.rotate(-angle);
        context.fillText(num.toString(),0,0);
        context.rotate(angle);
        context.translate(0,radius * 0.85);
        context.rotate(-angle);
    }
}
draw();

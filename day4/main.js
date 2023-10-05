let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

class Particle{
    constructor(){
        this.xPos = 50;
        this.yPos = 50;
        this.radius = 20;
        // this.render();
    }
    render(){
        context.beginPath();
        context.fillStyle = "red";
        context.arc(this.xPos, this.yPos, this.radius, 0, 360);
        context.fill();
        this.move();
    }
    move(){
        this.xPos += Math.random() * (1 - -1) + -1;
        this.yPos += Math.random() * (1 - -1) + -1;
    }
}
const particleObject = new Particle();

//game loop
function loop(){
    context.clearRect(0, 0, 400, 400);
    particleObject.render();
    window.requestAnimationFrame(loop);
}

loop();
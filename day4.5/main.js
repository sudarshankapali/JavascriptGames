let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
// let totalNumber = Math.random() * (15 - 5) + 5;
// let xDir = 5, yDir = 2;
let totalNumber = 0;

class Particle{
    constructor(){
        this.xPos = Math.random() * (400);
        this.yPos = Math.random() * (400);
        this.radius = Math.random() * (50 - 10) + 10;
        this.xDir = Math.random() * 5;
        this.yDir = Math.random() * 5;
    }
    render(){
        context.beginPath();
        context.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
        // context.fillStyle = getRandomColor();
        context.arc(this.xPos, this.yPos, this.radius, 0, 360);
        // context.rect(this.xPos, this.yPos, 50, 50);
        context.fill();
        this.move();
    }
    move(){
        this.xPos += this.xDir;
        if(this.xPos + this.radius> 400 || this.xPos < this.radius){
            this.xDir *= -1;
        }
        this.yPos += this.yDir;
        if(this.yPos + this.radius> 400 || this.yPos < this.radius){
            this.yDir *= -1;
        }
    }
}
const particleArray = [];
for(let i = 0; i <= totalNumber; i++){
    const particleObj = new Particle();
    particleArray.push(particleObj);
}

//game loop
function loop(){
    context.clearRect(0, 0, 400, 400);
    for(let i = 0; i <= totalNumber; i++){
        particleArray[i].render();
    }
    window.requestAnimationFrame(loop);
}

loop();
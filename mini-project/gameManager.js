let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let up = document.getElementById("moveUp");
let down = document.getElementById("moveDown");


class bird{
    constructor(){
        this.xPos = 0;
        this.yPos = 200;
        this.birdWidth = 50;
        this.birdHeight = 50;
        this.speed = 0;
        // this.xDirection = 0;
    }
    
    render(){
        context.beginPath();
        context.fillStyle = "red";
        this.newPos();
        context.fillRect(this.xPos,this.yPos,this.birdWidth,this.birdHeight);
        context.fill();
    }
    newPos() {
        up.addEventListener("click", () => {
            this.yPos -= 0.05; 
        });
        down.addEventListener("click", () => {
            this.yPos += 0.05; 
        });
    }
    update(){
        this.newPos();
        this.render();
    }
    
}
const obj = new bird();
function loop(){
    context.clearRect(0,0,400,600);
    obj.update();
    window.requestAnimationFrame(loop());
}

loop();

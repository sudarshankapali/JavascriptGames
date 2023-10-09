let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let up = document.getElementById("moveUp");
let down = document.getElementById("moveDown");
console.log(up,down);
class bird{
    constructor(){
        this.xPos = 0;
        this.yPos = 200;
        this.birdWidth = 50;
        this.birdHeight = 50;
        this.xDirection = 0;
        this.yDirection = 0;
    }
    spawn(){
        context.beginPath();
        context.fillStyle = "red";
        context.fillRect(this.xPos,this.yPos,this.birdWidth,this.birdHeight);
        context.fill();
    }
    move(){

    }
}
const flappyBird = new bird();
flappyBird.spawn();

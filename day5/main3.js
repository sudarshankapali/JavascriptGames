let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
class box{
    constructor(){
        this.color = "green";
        this.xSpeed = Math.random() * (2 - 2) + -2;
        this.ySpeed = Math.random() * (2 - 2)+ -2;
        this.position = {
            x:Math.random() * 350,
            y:Math.random() * 350,
        }
        this.size={
            width: 50,
            height: 50,
        }
    }
    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
        context.fill();
    }
    move(){
        this.position.x += this.xSpeed;
        if(this.position.x + this.size.width > 400 || this.position.x < 0){
            this.xSpeed *= -1;
        }
    }
    update(){
        this.draw();
        this.move();
    }
}

const objArray = [];
for(let i = 0;i<5;i++){
    const newOBJ = new box();
    objArray.push(newOBJ);
}

// gameloop 
function animation(){
    context.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<5;i++){
        objArray[i].update();
    }
    window.requestAnimationFrame(animation);
}
animation();
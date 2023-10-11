let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
class box{
    constructor(){
        this.position = {
            x: 50,
            y: 100,
        };
        this.size = {
            width: 50,
            height: 50,
        };
        this.velocity = {
            x: 1,
            y:1,
        }
        this.acceleration = 0.3;
    }
    draw(){
        context.beginPath();
        context.fillStyle = "red";
        context.fillRect(this.position.x, this.position.y,this.size.width,this.size.height);
        context.fill();
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }
    checkcollision(){
        if(this.position.y + this.size.height > canvas.height){
            // this.position.y = this.canvas.height - this.size.height;
            this.position.y = canvas.height - this.size.height;
            this.velocity.y *= -0.5;
        }
    }
    update(){
        this.draw();
        this.move();
        this.checkcollision();
    }
}

const boxObj = new box();

// gameloop 
function animation(){
    context.clearRect(0,0,canvas.width,canvas.height);
    boxObj.update();
    window.requestAnimationFrame(animation);
}
animation();
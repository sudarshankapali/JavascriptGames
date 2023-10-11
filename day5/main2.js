let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
class box{
    constructor(){
        this.position = {
            x:20,
            y:20,
        }
        this.size={
            width: 50,
            height: 50,
        }
    }
    draw(){
        context.beginPath();
        context.fillStyle = "green";
        context.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
        context.fill();
    }
    move(){
        canvas.addEventListener("mousemove",(e)=>{
            console.log(e.clientX,e.clientY);
            this.position.x = e.clientX;
            this.position.y = e.clientY;
        })
    }
    update(){
        this.draw();
        this.move();
    }
}
const obj = new box();

// gameloop 
function animation(){
    context.clearRect(0,0,canvas.width,canvas.height);
    obj.update();
    window.requestAnimationFrame(animation);
}
animation();
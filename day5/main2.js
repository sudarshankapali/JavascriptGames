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
    checkCollision(){
        if(this.position.x > obj1.x){
            context.fillStyle = "red";
        }
        else{
            context.fillStyle = "green";
        }
    }
    update(){
        this.draw();
        this.move();
    }
}
class box1{
    constructor(){
        this.position = {
            x: 150,
            y:150,
        }
        this.size = {
            width: 50,
            height: 50,
        }
        this.color = "green";
    }
    draw(){
        context.beginPath();
        context.fillStyle = this.color;
        context.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
        context.fill();
    }
}
const obj = new box();
const obj1 = new box1();


function colide(){
    if(obj.position.x + obj.size.width > obj1.position.x && obj.position.x  < obj1.position.x + obj1.size.width && obj.position.y + obj.size.height > obj1.position.y && obj.position.y < obj1.position.y  +obj1.size.width){
        obj1.color = "red";
    }
    else{
        obj1.color = "green";
    }
}
// gameloop 
function animation(){
    context.clearRect(0,0,canvas.width,canvas.height);
    obj.update();
    obj1.draw();
    colide();
    window.requestAnimationFrame(animation);
}
animation();
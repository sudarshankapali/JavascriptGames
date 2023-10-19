class Egg{
    constructor(x=0,y=0){
        this.position = {
            x:x, 
            y:y
        };
        this.size = {
            width: 20,
            height : 20,
        };
        this.velocity = {
            x: 0,
            y: 6,
        };
        this.acceleration = 0.2;
    }
    draw(){
        context.fillStyle = "red";
        context.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }
    update(){
        this.draw();
        this.move();
    }
}
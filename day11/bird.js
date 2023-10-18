class Bird{
    constructor(){
        this.position = {
            x:0,
            y:0
        };
        this.size = {
            width: 50,
            height : 50,
        };
        this.velocity = {
            x: 0,
            y: 1,
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
    jump(){
        this.velocity.y += -3;
    }
    update(){
        this.draw();
        this.move();
    }
}
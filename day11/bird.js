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
        this.isAlive = true;
    }
    draw(){
        context.fillStyle = "red";
        context.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }
    borderCollision(){
        if(this.position.x < 0 ){
            this.position.x = canvas.width - canvas.width;
        }
        if(this.position.y<0){
            this.position.y = 0;
        }
        if(this.position.y + this.size.height >= canvas.height){
            this.position.y = canvas.height - this.size.height;
            this.isAlive = false;
        }
    }
    moveLeft(){
        this.position.x += -10;
    }
    moveRight(){
        this.position.x += 10;
    }
    jump(){
        this.velocity.y += -5;
    }
    update(){
        this.draw();
        if(this.isAlive){
            this.move();
            this.borderCollision();
        }
    }
}
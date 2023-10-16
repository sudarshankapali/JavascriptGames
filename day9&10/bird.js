class Bird{
    constructor(){
        this.position = {
            x: canvas.width/2,
            y: canvas.height / 2
        }
        this.size = {
            width: 50,
            height: 50
        }
        this.velocity = {
            x: 0,
            y: 1
        }
        this.acceleration = 0.2;
        this.isDead = false;
        this.image = new Image();
        this.image.src = "./Images/frame-2.png";
    }
    draw(){
        context.beginPath();
        context.fillStyle = "red";
        context.drawImage(this.image,this.position.x - this.size.width / 2,this.position.y,this.size.width,this.size.height);
    }
    borderCollision(){
        if(this.position.y + this.size.height >= canvas.height){
            this.position.y = canvas.height - this.size.height;
            this.isDead = true;
        }
    }
    move(){
        this.velocity.y += this.acceleration;
        this.position.y += this.velocity.y;
    }
    jump(){
        this.velocity.y = -2;
    }
    update(){
        this.draw();
        if(!this.isDead){
            this.move();
            this.borderCollision();
        }
        // this.jump();
    }
}
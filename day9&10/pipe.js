class Pipe{
    constructor(){
        this.position = {
            x: canvas.width,
            y: Math.random() * (0 - -250) + -250,
        }
        this.size = {
            width: 50,
            height: 300,
        }
        this.velocity = {
            x: -1,
            y: 0,
        }
        this.image = new Image();
        this.image.src = "./Images/pipe-up.png";
        this.downImage = new Image();
        this.downImage.src = "./Images/pipe-down.png";
    }
    draw(){
        context.beginPath();
        context.fillStyle = "red";
        context.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height);
    }
    drawDownPipe(){
        context.beginPath();
        context.fillStyle = "red";
        context.drawImage(this.downImage,this.position.x,this.position.y + this.size.height + 150,this.size.width,this.size.height);
    }
    move(){
        this.position.x += this.velocity.x;
        if(this.position.x + this.size.width < 0){
            this.position.x = canvas.width;
            this.position.y = Math.random() * (0 - -250) + -250;
        }
    }
    collision(){
        if(this.position.x + this.size.width >=
            flappybird.position.x - flappybird.size.width / 2 &&
          this.position.x <=
            flappybird.position.x - flappybird.size.width / 2 + flappybird.size.width &&
          this.position.y + this.size.height >= flappybird.position.y &&
          this.position.y <= flappybird.position.y + flappybird.size.height){
            console.log("collision vayo");
            flappybird.isDead = true;
        }
    }
    collisionDown(){
        if(flappybird.position.x - flappybird.size.width/2 + flappybird.size.width >= this.position.x  &&
        flappybird.position.x - flappybird.size.width/2 < this.position.x + this.size.width &&
        flappybird.position.y + flappybird.size.height >= this.position.y + this.size.height + 150

        ){
            console.log("down collision vayo");
            flappybird.isDead = true;
        }
    }
    update(isDead){
        this.draw();
        this.drawDownPipe();
        if(!isDead){
            this.move();
            this.collision();
            this.collisionDown();
        }
    }
}
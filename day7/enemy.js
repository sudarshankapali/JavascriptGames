class Enemy {
    constructor(){
        this.xDir = 1;
        this.position = {
            x:0,
            y:0,
        }
        this.velocity={
            x:0,
            y:0,
        }
        this.size = 50;
        this.image = new Image();
        this.image.src = "./Images/meteor.gif";
    }
    draw(){
        // context.beginPath();
        context.fillStyle = "white";
        // context.fillRect(0,0,50,50);
        context.drawImage(this.image,this.position.x,this.position.y,this.size,this.size);
    }
    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    update(){
        this.draw();
        this.move();
    }
}
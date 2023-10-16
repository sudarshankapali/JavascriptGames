class Background{
    constructor(x=0, y=0){
        this.position = {
            x:x,
            y:y
        }
        this.size = {
            width:canvas.width,
            height:canvas.height
        }
        this.velocity = {
            x:-1,
            y:0
        }
        this.image = new Image();
        this.image.src = "./Images/bg.png";
    }
    draw(){
        context.beginPath();
        context.fillStyle = "red";
        context.drawImage(this.image,this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        if(this.position.x + this.size.width <= 0){
            this.position.x = canvas.width;
        }
        this.position.x += this.velocity.x; 
    }
    update(isDead){
        this.draw();
        if(!isDead){
            this.move();
        }
    }
}
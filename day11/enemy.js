class Enemy {
    constructor(){
        this.position = {
            x:canvas.width, 
            y:canvas.height - 50,
        };
        this.size = {
            width: 50,
            height : 50,
        };
        this.velocity = {
            x: -1,
            y: 0,
        };
        this.acceleration = -0.1;
        this.color = "red";
        this.randomEnemy = parseInt(Math.random() * (5-1) + 1);
    }
    draw(){
        if(this.randomEnemy > 2){
            this.color = "blue";
        }else{
            this.color = "red";
        }
        context.fillStyle = this.color;
        context.fillRect(this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        this.velocity.x += this.acceleration;
        this.position.x += this.velocity.x;
    }
    update(){
        this.draw();
        this.move();
    }
}
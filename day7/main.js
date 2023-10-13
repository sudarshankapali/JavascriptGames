let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const player = new Player();
const allbullet = [];

document.addEventListener("keydown",(e)=>{
    if(e.code === "ArrowUp") player.velocity.y = -5;
    if(e.code === "ArrowDown") player.velocity.y = 5;
    if(e.code === "ArrowLeft") player.velocity.x = -5;
    if(e.code === "ArrowRight") player.velocity.x = 5;
    if(e.code === "Space") allbullet.push(new Bullet(player.position.x + 10 ,player.position.y));
});

document.addEventListener("keyup",(e)=>{
    if(e.code === "ArrowUp") player.velocity.y = 0;
    if(e.code === "ArrowDown") player.velocity.y = 0;
    if(e.code === "ArrowLeft") player.velocity.x = 0;
    if(e.code === "ArrowRight") player.velocity.x = 0;
});


function animate(){
    context.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    for(let i = 0; i< allbullet.length; i++){
        allbullet[i].update();
    }
    window.requestAnimationFrame(animate);
}
animate();
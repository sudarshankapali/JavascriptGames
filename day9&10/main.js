let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const flappybird = new Bird();
const bg = new Background();
const bg1 = new Background(bg.size.width,0);


// game loop
function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
    bg.update(flappybird.isDead);
    bg1.update(flappybird.isDead);
    flappybird.update();
    window.requestAnimationFrame(animate);
}

document.addEventListener("keydown",()=>{
    flappybird.jump();
})
animate();

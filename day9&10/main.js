let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const flappybird = new Bird();



// game loop
function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
    flappybird.update();
    window.requestAnimationFrame(animate);
}

document.addEventListener("keydown",()=>{
    flappybird.jump();
})
animate();

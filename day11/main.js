let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const bird = new Bird();

// game loop 
function render(){
    context.clearRect(0,0,canvas.width , canvas.height);
    bird.update();
    window.requestAnimationFrame(render);
}

document.addEventListener("keydown",(e)=>{
    if(e.code === "Space") bird.jump();      
});

// document.addEventListener("keyup",(e)=>{
//     if(e.code === "Space") bird.velocity.y = 0;      
// });
render();
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

const bird = new Bird();

const arr = [];

let allEnemy = [];

setInterval(() => {
const enemy = new Enemy();
    allEnemy.push(enemy);
}, 3000);

// game loop 
function render(){
    context.clearRect(0,0,canvas.width , canvas.height);
    bird.update();
    for(let j=0;j<allEnemy.length;j++){
        allEnemy[j].update();
    }
    for(let i=0;i<arr.length;i++){
        arr[i].update();
    }
    window.requestAnimationFrame(render);
}

document.addEventListener("keydown",(e)=>{
    // console.log(e);
    if(e.code === "Space") bird.jump();  
    if(e.code === "Enter") {
        arr.push(new Egg(bird.position.x,bird.position.y));
    }  
    if(e.code === "ArrowLeft") {
        bird.moveLeft();
    } 
    if(e.code === "ArrowRight") {
        bird.moveRight();
    }         
});

// document.addEventListener("keyup",(e)=>{
//     if(e.code === "Space") bird.velocity.y = 0;      
// });
render();
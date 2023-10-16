let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let score = 0;

const flappybird = new Bird();
const bg = new Background();
const bg1 = new Background(bg.size.width,0);


// game loop
function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
    bg.update(flappybird.isDead);
    bg1.update(flappybird.isDead);
    flappybird.update();

    context.beginPath();
    context.fillStyle = "white";
    context.font = "30px sans serif";
    context.fillText(score,10,40);

    if(flappybird.isDead){
        clearInterval(intervalId);
    }
    window.requestAnimationFrame(animate);
}

document.addEventListener("keydown",()=>{
    flappybird.jump();
})

const intervalId = setInterval(()=>{
    score++;
},1000);

animate();

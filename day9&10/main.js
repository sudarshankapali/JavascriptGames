let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let music = document.getElementById("music");
let stopMusic = document.getElementById("stop");
// let rePlay = document.getElementById("replay");

let score = 0;

const flappybird = new Bird();
const bg = new Background();
const bg1 = new Background(bg.size.width,0);

const pipe1 = new Pipe();

let jumping = new Audio();
jumping.src = "./Audio/jumpSound.wav";

let bgMusic = new Audio();
bgMusic.src = "./Audio/backgroundMusic.mp3";

music.addEventListener("click",(e)=>{
    bgMusic.play();
    bgMusic.loop = true;
});
stopMusic.addEventListener("click",()=>{
    bgMusic.pause();
    bgMusic.currentTime = 0;
});
// rePlay.addEventListener("click",()=>{
//     flappybird.position.x = canvas.width/2;
//     flappybird.position.y = canvas.height / 2;
//     flappybird.isDead = false;
//     score = 0;
// });

// game loop
function animate(){
    context.clearRect(0,0,canvas.width, canvas.height);
    bg.update(flappybird.isDead);
    bg1.update(flappybird.isDead);
    flappybird.update();

    pipe1.update(flappybird.isDead);

    context.beginPath();
    context.fillStyle = "white";
    context.font = "30px sans serif";
    context.fillText(score,10,40);

    if(flappybird.isDead){
        clearInterval(intervalId);
        context.beginPath();
        context.fillStyle = "red";
        context.font = "30px arial";
        context.fillText("Game Over",canvas.width/4,canvas.height/2);
    }
    window.requestAnimationFrame(animate);
}

document.addEventListener("keydown",(e)=>{
    if(e.code === "Space"){
        flappybird.jump();
    jumping.play();
    }
})

const intervalId = setInterval(()=>{
    score++;
},1000);

animate();



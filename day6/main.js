let p = document.getElementById("play");
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let soun = new Audio();
const sprite = new Image();
sprite.src = "./assets/rename.jpg";
soun.src = "./assets/music.wav";
p.addEventListener("click",()=>{
    soun.play();
})

    context.clearRect(0,0,canvas.width,canvas.height);
    context.drawImage(sprite, 0, 0, 50, 50);

// context.fill();
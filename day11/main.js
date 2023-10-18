let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// game loop 
function render(){
    context.clearRect(0,0,canvas.width , canvas.height );
    window.requestAnimationFrame(render);
}

render();
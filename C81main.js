canvas = document.getElementById("myCanvas");
contaxt = canvas.getContext("2d");

function drawcircle(x,y) {
  contaxt.beginPath();
  contaxt.strokeStyle = "blue";
  contaxt.lineWidth = 1;
  contaxt.arc(x, y, 20, 0, 360);
  contaxt.stroke();
}

canvas.addEventListener("mousedown",mymousedown);



function mymousedown(e){
    console.log(e)
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    drawcircle(x,y);
    
}

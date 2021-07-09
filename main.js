var Mouseevent = "empty";
var last_positionx, last_positiony;

canvas = document.getElementById("paintcanvas");
ctx= canvas.getContext("2d");

color = "black";
line_width = 2;
radius = 10;

canvas.addEventListener("mousedown", my_MD);
canvas.addEventListener("mouseup", my_MU);
canvas.addEventListener("mouseleave", my_ML);
canvas.addEventListener("mousemove", my_MM);

function my_MD(k){
    color = document.getElementById("color").value;
    line_width = document.getElementById("width_line").value;
    radius = document.getElementById("radius_circle").value;
    Mouseevent = "mouseDOWN";
}

function my_MU(k) {
    Mouseevent = "mouseUP";
}

function my_ML(k) {
    Mouseevent = "mouseLEAVE";
}

function my_MM(k){
    current_positionx = k.clientX - canvas.offsetLeft;
    current_positiony = k.clientY - canvas.offsetTop;

    if(Mouseevent == "mouseDOWN"){
        console.log("The current position of X and Y coordinates -");
        console.log("X = "+ current_positionx + "Y = " + current_positiony);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        ctx.arc(current_positionx, current_positiony, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    last_positionx = current_positionx;
    last_positiony = current_positiony;
}
function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
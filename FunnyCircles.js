function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}
function createCircle() {
    var ctx = document.getElementById("circle").getContext("2d");
    ctx.beginPath();
    ctx.arc(350,350,200,0,2*Math.PI);
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.moveTo(200,175);
    ctx.arc(200,175,50,0,2*Math.PI);
    ctx.fill();
    ctx.moveTo(500,175);
    ctx.arc(500,175,50,0,2*Math.PI);
    ctx.fill();
    // ctx.moveTo(250,350);
    // ctx.arc(250,400,100,0,Math.PI);
    // ctx.fill();
}
createCircle();

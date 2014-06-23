/**
 * Created by ADM-BGSSTNV on 6/22/2014.
 */
window.onload = function(){
    var canvas = document.getElementById("Canvas");
    canvas.width = 240;
    canvas.height = 260;

    var ctx = canvas.getContext("2d");
    //Drawing the upper text
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.font = "30px Tahoma";
    ctx.fillText("I love JavaScript", 10, 50);
    ctx.stroke();

    //Yellow Rectangle
    ctx.beginPath();
    ctx.fillStyle = "#F1DA4E";
    ctx.fillRect(50, 80, 134, 134);
    ctx.stroke();

    //JS
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fontFamily = "url()";
    ctx.font = "90px Roboto-Bold";
    ctx.fontWeight = "bolder";
    ctx.fillText("JS", 95, 202);
    ctx.stroke();
}
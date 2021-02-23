getScreenSize();
getWindowSize();

var count = 0;
var r = 0;
var g = 0;
var b = 0;
var isOnPortfolio = false;

var o = null;

function getScreenSize() {
    var scWidth = window.parent.screen.width;
    var scHeight = window.parent.screen.height;
    
    console.log("ScreenSize -> " + scWidth + ":" + scHeight);
}
function getWindowSize() {
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;

    console.log("WindowSize -> " + winWidth + ":" + winHeight);
}
function mouseover() {
    isOnPortfolio = true;
}
function mouseout() {
    isOnPortfolio = false;
}
function changeColor() {
    var min = 2 ;
    var max = 16 ;

    r += Math.floor( Math.random() * (max + 1 - min) ) + min ;
    g += Math.floor( Math.random() * (max + 1 - min) ) + min ;
    b += Math.floor( Math.random() * (max + 1 - min) ) + min ;

    if(r >= 256) { r = 0; }
    if(g >= 256) { g = 0; } 
    if(b >= 256) { b = 0; }
    var obj = document.getElementById("P");
    obj.style.color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
}
function resetColor() {
    console.log(document.getElementById("P"));
}
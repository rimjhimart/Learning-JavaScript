var winW= window.innerWidth;
var winH = window.innerHeight;
var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');
canvas.width = winW;
canvas.height = winH;
context.fillStyle='#ff0000';

var imageX=0;
var imageY=0;

var imageObj = new Image();
var imageWidth=900;
var imageHeight=925;
var imageData=null;
var pixelData = null;

var cordX=[],
    cordY=[];

imageObj.onload = function(){
    context.drawImage(
        this,
        imageX,
        imageY,
        imageWidth * 1.05,
        imageHeight * 1.05
    );
    imageData = context.getImageData(imageX, imageY,imageWidth,imageHeight);
    pixelData = imageData.data;
 
    for(var y=0; y < imageHeight; y++){
        for(var x=0; x < imageWidth; x++){
            var red = pixelData[(imageWidth * y + x) * 4];
            var green = pixelData[(imageWidth * y + x) * 4+1];
            var blue = pixelData[(imageWidth * y + x) * 4+2];
            var alpha = pixelData[(imageWidth * y + x) * 4+3];

            if(red==255 && green==255 && blue==255 && alpha==255){
                cordX.push(x);
                cordY.push(y);
            }
        }
    }
};
imageObj.src="india.png";

setTimeout(function () {
    draw();
},1000);

var circles = [],
    min=2,
    max=10;

function draw(){
    var counter = 0;
    var c = createCircle(cordX.length);
    while(!isValid(c)){
        var l = parseInt(Math.random() * c);
        c.x = cordX[l];
        c.y = cordY[l];
        counter++;
        if(counter > 1000000){
            return;
        }
    }
    while(isValid(c)){
        c.r++;
    }
    c.r -=2;
    circles.push(c);
    drawCircle(c);
    requestAnimationFrame(draw);
}
function isValid(c){
    if(c.r > max){
        return false;
    }
    for( var i = 0; i < circles.length; i++){
        var c2 = circles[i],
        dx = c2.x - c.x,
        dy = c2.y - c.y,
        dist = Math.sqrt(dx * dx + dy * dy);
        if(dist < c2.r + c.r){
            return false;
        }
    }
    return true;
}
function createCircle(c) {
    var location = parseInt(Math.random() * c);
    return{
        x: cordX[location],
        y: cordY[location],
        r: min,
    };
}

function drawCircle(c){
    context.beginPath();
    context.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    context.fillStyle =
    'rgb(' +
    parseInt(Math.random() * 254) +
    ',' +
    parseInt(Math.random() * 254) +
    ',' +
    parseInt(Math.random() * 254) +
    ')';
    context.fill();
}
leftwristX=0;
rightwristX=0;
difference=0;

function setup(){
canvas = createCanvas(550,550);
canvas.position(560,160);
video = createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose' , gotPoses);
}
function modelLoaded(){
    console.log('poseNet is initialized!');
} 
function gotPoses(results)
{
if(results.length >0)
{

    leftwristX = results[0].pose.leftWrist.x;
    rightwristX= results[0].pose.rightWrist.x;
    difference =floor(leftwristX - rightwristX);
    console.log("leftwristX = " + leftwristX + ", rightwristX = " + rightwristX +",difference = " + difference);
}
}
function draw(){
    background('#c27300');
    textSize(difference);
    fill('#000000');
    stroke('#ffffff');
    text('Jay' , 50, 400);
}
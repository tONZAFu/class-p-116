noseX=0;
noseY=0;

function preload() {
    moustaches = loadImage('https://i.postimg.cc/SQ16KXW8/moustach-png.png');
}

function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(moustaches, noseX, noseY, 70, 50);
}


function Snapshot() {
    save('myFilterImage.png');
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -33;
        noseY = results[0].pose.nose.y ;
        console.log("nose x = " + noseX);   
        console.log("nose y = " + noseY);
    }
}
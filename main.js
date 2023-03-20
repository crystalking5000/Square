noseX = 0;
noseY = 0;

diff = 0;

rightWristX = 0;
leftWristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#0000FF');
    document.getElementById("square_sides").innerHTML = "width and height of the square will be : " + diff + "px";
    fill ("#A020F0");
    stroke("#A020F0");
    square(noseX, noseY, diff);
}

function modelLoaded(){
    console.log("your model is loaded!");
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose X = " + noseX + "nose Y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        diff = floor(leftWristX - rightWristX);
        console.log(" left wrist x = " + leftWristX + "right wrist x = " + rightWristX + "difference = " + diff);

    }
}


var Ghost,GhostImg;
var Tower,TowerImg;
var play=1;
var End=0;
var GameState=play;
var Door,DoorImg;
var left,right,leftImg,rightImg;
var DoorsGroup;

function preload(){
GhostImg =loadImage("ghost-standing.png");
TowerImg=loadImage("tower.png");
DoorImg=loadImage("door.png");
leftImg=loadImage ("left arrow.png");
rightImg=loadImage("rghtarrow.png");
}

function setup() {
 creatCanvas(600,600);
 Tower=createSprite(300,300);
 Tower.addImg(TowerImg);
 Ghost=createSprite(300,500);
 Ghost.addImg(GhostImg);
 left=createSprite(200,200);
 left.addImg(leftImg);
 right=createSprite(400,200);
 right.addImg(rightImg);
 Ghost.scale=0.3
 Tower.scale=0.9
 right.scale=0.4
 left.scale=0.1
 Tower.velocityY=3
 Ghost.debug=true
 DoorsGroup=new group()
}

function draw() {
 background("black")

if(keydown(gameState==0)){


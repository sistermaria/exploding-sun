varX=0;
varY=100;
varWidth=50;
varHeight=60;
varR=218;
varG=160;
varB=221;

function setup(){
createCanvas(400,400);
}
function draw(){
background(8,186,236);
fill(varR,varG,varB);
ellipse(varX,varY,varWidth,varHeight);
varX=varX+1;
varY=varY+1;
varWidth=varWidth+1;
varHeight=varHeight+1;
varR=varR+10;
varG=varG+1;
varB=varB-10;

}
var START=0;
var PLAY=1;
var Question1=2;
var Question2=3;
var Question3=4;
var Question4=5;
var Question5=6;
var Question6=7;
var Question7=8;
var END=9;
var gameState=START;
var Result1,Result2,Result3,Result4,Result5,Result6,Result7;
var ArticunoImg,DeoxysImg,DiaglaImg,LugiaImg,MewtwoImg,SogaleoImg,XerneasImg;
var BackgroundImg;
var Q1,Q1Img,Q2,Q2Img,Q3,Q3Img,Q4,Q4Img,Q5,Q5Img,Q6,Q6Img,Q7,Q7Img
var O11Img,O12Img,O13Img,O14Img,O21Img,O22Img,O23Img,O24Img,O31Img,O32Img,O33Img,O34Img
var O41Img,O42Img,O43Img,O44Img,O51Img,O52Img,O53Img,O54Img,O61Img,O62Img,O63Img,O64Img
var O71Img,O72Img,O73Img,O74Img
var OP1,OP2,OP3,OP4;
var StartButton,StartButtonImg,SubmitButton,SubmitButtonImg;
/*var Question=0;
var Question2=0;
var Question3=0;
var Question4=0;
var Question5=0;
var Question6=0;
var Question7=0;
*/
var Score=0;
var OP11,OP21,OP31,OP41;
var OP12,OP22,OP32,OP42;
var OP13,OP23,OP33,OP43;
var OP14,OP24,OP34,OP44;
var OP15,OP25,OP35,OP45;
var OP16,OP26,OP36,OP46;
function preload(){
BackgroundImg=loadImage("Images/PK.png")
Q1Img=loadImage("Images/Q1.png")
Q2Img=loadImage("Images/Q2.png")
Q3Img=loadImage("Images/Q3.png")
Q4Img=loadImage("Images/Q4.png")
Q5Img=loadImage("Images/Q5.png")
Q6Img=loadImage("Images/Q6.png")
Q7Img=loadImage("Images/Q7.png")

StartButtonImg=loadImage("Images/Start.png")
SubmitButtonImg=loadImage("Images/Submit.png")

O11Img=loadImage("Images/O11.jpg")
O12Img=loadImage("Images/O12.jpg")
O13Img=loadImage("Images/O13.jpg")
O14Img=loadImage("Images/O14.jpg")
O21Img=loadImage("Images/O21.jpg")
O22Img=loadImage("Images/O22.jpg")
O23Img=loadImage("Images/O23.jpg")
O24Img=loadImage("Images/O24.jpg")
O31Img=loadImage("Images/O31.jpg")
O32Img=loadImage("Images/O32.jpg")
O33Img=loadImage("Images/O33.jpg")
O34Img=loadImage("Images/O34.jpg")
O41Img=loadImage("Images/O41.jpg")
O42Img=loadImage("Images/O42.jpg")
O43Img=loadImage("Images/O43.jpg")
O44Img=loadImage("Images/O44.jpg")
O51Img=loadImage("Images/O51.jpg")
O52Img=loadImage("Images/O52.jpg")
O53Img=loadImage("Images/O53.jpg")
O54Img=loadImage("Images/O54.jpg")
O61Img=loadImage("Images/O61.jpg")
O62Img=loadImage("Images/O62.jpg")
O63Img=loadImage("Images/O63.jpg")
O64Img=loadImage("Images/O64.jpg")
O71Img=loadImage("Images/O71.jpg")
O72Img=loadImage("Images/O72.jpg")
O73Img=loadImage("Images/O73.jpg")
O74Img=loadImage("Images/O74.jpg")

ArticunoImg=loadImage("Images/Articuno.png")
DeoxysImg=loadImage("Images/Deoxys.png")
DiaglaImg=loadImage("Images/Diagla.png")
LugiaImg=loadImage("Images/Lugia.png")
MewtwoImg=loadImage("Images/Mewtwo.png")
SolgaleoImg=loadImage("Images/Solgaleo.png")
XerneasImg=loadImage("Images/Xerneas.png")
}



function setup() {
  createCanvas(1000,600);

  StartButton=createSprite(880,550,1,1);
  StartButton.addImage(StartButtonImg);
  StartButton.scale=0.35;

  SubmitButton=createSprite(750,550,1,1);
  SubmitButton.addImage(SubmitButtonImg);
  SubmitButton.scale=0.35;
  SubmitButton.visible=false;

Q1=createSprite(500,150,50,50);
Q1.addImage(Q1Img);
Q1.scale=0.5;
Q1.visible=false;

Q2=createSprite(500,150,50,50);
Q2.addImage(Q2Img);
Q2.scale=0.5;
Q2.visible=false;

Q3=createSprite(500,150,50,50);
Q3.addImage(Q3Img);
Q3.scale=0.5;
Q3.visible=false;

Q4=createSprite(500,150,50,50);
Q4.addImage(Q4Img);
Q4.scale=0.5;
Q4.visible=false;

Q5=createSprite(500,150,50,50);
Q5.addImage(Q5Img);
Q5.scale=0.5;
Q5.visible=false;

Q6=createSprite(500,150,50,50);
Q6.addImage(Q6Img);
Q6.scale=0.5;
Q6.visible=false;

Q7=createSprite(500,150,50,50);
Q7.addImage(Q7Img);
Q7.scale=0.5;
Q7.visible=false;


  OP1=createSprite(100,450,50,50);
  OP1.addImage(O11Img)
  OP1.scale=0.7
  OP1.visible=false;

OP2=createSprite(300,450,50,50);
OP2.addImage(O12Img)
OP2.scale=0.7
OP2.visible=false;

OP3=createSprite(500,450,50,50);
OP3.addImage(O13Img)
OP3.scale=0.7
OP3.visible=false;

OP4=createSprite(700,450,50,50);
OP4.addImage(O14Img)
OP4.scale=0.7
OP4.visible=false;


OP11=createSprite(100,300,50,50);
OP11.addImage(O21Img)
OP11.scale=0.7
OP11.visible=false;

OP21=createSprite(300,300,50,50);
OP21.addImage(O22Img)
OP21.scale=0.7
OP21.visible=false;

OP31=createSprite(500,300,50,50);
OP31.addImage(O23Img)
OP31.scale=0.7
OP31.visible=false;

OP41=createSprite(700,300,50,50);
OP41.addImage(O24Img)
OP41.scale=0.7
OP41.visible=false;

OP12=createSprite(100,500,50,50);
OP12.addImage(O31Img)
OP12.scale=0.7
OP12.visible=false;

OP22=createSprite(300,500,50,50);
OP22.addImage(O32Img)
OP22.scale=0.7
OP22.visible=false;

OP32=createSprite(500,500,50,50);
OP32.addImage(O33Img)
OP32.scale=0.7
OP32.visible=false;

OP42=createSprite(700,500,50,50);
OP42.addImage(O34Img)
OP42.scale=0.7
OP42.visible=false;

OP13=createSprite(100,300,50,50);
OP13.addImage(O41Img)
OP13.scale=0.7
OP13.visible=false;

OP23=createSprite(300,300,50,50);
OP23.addImage(O42Img)
OP23.scale=0.7
OP23.visible=false;

OP33=createSprite(500,300,50,50);
OP33.addImage(O43Img)
OP33.scale=0.7
OP33.visible=false;

OP43=createSprite(700,300,50,50);
OP43.addImage(O44Img)
OP43.scale=0.7
OP43.visible=false;

OP14=createSprite(100,500,50,50);
OP14.addImage(O51Img)
OP14.scale=0.7
OP14.visible=false;

OP24=createSprite(300,500,50,50);
OP24.addImage(O52Img)
OP24.scale=0.7
OP24.visible=false;

OP34=createSprite(500,500,50,50);
OP34.addImage(O53Img)
OP34.scale=0.7
OP34.visible=false;

OP44=createSprite(700,500,50,50);
OP44.addImage(O54Img)
OP44.scale=0.7
OP44.visible=false;

OP15=createSprite(100,300,50,50);
OP15.addImage(O61Img)
OP15.scale=0.7
OP15.visible=false;

OP25=createSprite(300,300,50,50);
OP25.addImage(O62Img)
OP25.scale=0.7
OP25.visible=false;

OP35=createSprite(500,300,50,50);
OP35.addImage(O63Img)
OP35.scale=0.7
OP35.visible=false;

OP45=createSprite(700,300,50,50);
OP45.addImage(O64Img)
OP45.scale=0.7
OP45.visible=false;

OP16=createSprite(100,500,50,50);
OP16.addImage(O71Img)
OP16.scale=0.7
OP16.visible=false;

OP26=createSprite(300,500,50,50);
OP26.addImage(O72Img)
OP26.scale=0.7
OP26.visible=false;

OP36=createSprite(500,500,50,50);
OP36.addImage(O73Img)
OP36.scale=0.7
OP36.visible=false;

OP46=createSprite(700,500,50,50);
OP46.addImage(O74Img)
OP46.scale=0.7
OP46.visible=false;

Result1=createSprite(500,300,50,50);
Result1.addImage(SolgaleoImg);
Result1.scale=0.5
Result1.visible=false;

Result2=createSprite(500,300,50,50);
Result2.addImage(DeoxysImg);
Result2.scale=0.5
Result2.visible=false;

Result3=createSprite(500,300,50,50);
Result3.addImage(MewtwoImg);
Result3.scale=0.5
Result3.visible=false;

Result4=createSprite(500,300,50,50);
Result4.addImage(LugiaImg);
Result4.scale=0.5
Result4.visible=false;

Result5=createSprite(500,300,50,50);
Result5.addImage(XerneasImg);
Result5.scale=0.5
Result5.visible=false;

Result6=createSprite(500,300,50,50);
Result6.addImage(DiaglaImg);
Result6.scale=0.5
Result6.visible=false;

Result7=createSprite(500,300,50,50);
Result7.addImage(ArticunoImg);
Result7.scale=0.5
Result7.visible=false;
}

function draw() {
  background(BackgroundImg);  
  //console.log(Score)
   textSize(40)
  fill(231, 155, 255)
  text("Score:" +Score,20,90)
 
  textSize(40)
  fill(255, 245, 137)
 text("WHICH LEGENDARY POKEMON ARE YOU ? GAME",30,50)
if(gameState===START){
  fill(0, 173, 161)
 textSize(25)
 text("* YOU WILL GET 7 QUESTION AND 4 OPTIONS",50,120)
 text("FROM EACH QUESTION.",60,150)
 text("* EACH QUESTION HAVE 0 TO 30 POINTS",50,200)
 text("YOU WILL SEE THE POINTS AT TOP LEFT CORNER.",60,230)
  text("* WHEN YOU ATTEMPT ALL QUESTION SO YOU GET ",50,280);
  text("YOUR ANSWER.",60,310)
 text("* WHEN THE GAME ENDED YOU GET ",50,360);
 text("YOUR ANSWER WHICH LEGENDARY POKEMON ARE YOU.",60,390)
 text("*CHOOSE ONLY ONE OPTION.",50,430)
 fill(255, 40, 47);
textSize(45)
text("SO LET'S START PRESS START BUTTON",50,500)
StartButton.visible=true;
if(mousePressedOver(StartButton)){
  //gameState=PLAY;
   gameState=Question1
  StartButton.visible=false;
  //Question=1;
}
}

if(gameState===Question1){
  OP1.visible=true;
  OP2.visible=true;
  OP3.visible=true;
  OP4.visible=true;
  Q1.visible=true;
  if(mousePressedOver(OP1)){
    Score=Score+5;
  }
  if(mousePressedOver(OP2)){
    Score=Score+10;
  }if(mousePressedOver(OP3)){
    Score=Score+20;
  }if(mousePressedOver(OP4)){
    Score=Score+30;
  }
  if(mousePressedOver(OP1)||mousePressedOver(OP2)||mousePressedOver(OP3)||mousePressedOver(OP4)){
    gameState=Question2
 }
}

if(gameState===Question2){
  OP11.visible=true;
  OP21.visible=true;
  OP31.visible=true;
  OP41.visible=true;
  Q2.visible=true;
   Q1.visible=false;
   OP1.visible=false;
   OP2.visible=false;
   OP3.visible=false;
OP4.visible=false;
  if(mousePressedOver(OP11)){
    Score=Score+5;
  }
  if(mousePressedOver(OP21)){
    Score=Score+10;
  }if(mousePressedOver(OP31)){
    Score=Score+20;
  }if(mousePressedOver(OP41)){
    Score=Score+30;
  }
  if(mousePressedOver(OP11)||mousePressedOver(OP21)||mousePressedOver(OP31)||mousePressedOver(OP41)){
    gameState=Question3
 }
}
if(gameState===Question3){
  OP12.visible=true;
  OP22.visible=true;
  OP32.visible=true;
  OP42.visible=true;
  OP11.visible=false;
  OP21.visible=false;
  OP31.visible=false;
  OP41.visible=false;
  Q3.visible=true;
  Q2.visible=false;
   Q1.visible=false;
   OP1.visible=false;
   OP2.visible=false;
   OP3.visible=false;
OP4.visible=false;
  if(mousePressedOver(OP12)){
    Score=Score+5;
  }
  if(mousePressedOver(OP22)){
    Score=Score+10;
  }if(mousePressedOver(OP32)){
    Score=Score+20;
  }if(mousePressedOver(OP42)){
    Score=Score+30;
  }
  if(mousePressedOver(OP12)||mousePressedOver(OP22)||mousePressedOver(OP32)||mousePressedOver(OP42)){
    gameState=Question4
 }
}
if(gameState===Question4){
  OP13.visible=true;
  OP23.visible=true;
  OP33.visible=true;
  OP43.visible=true;
  OP12.visible=false;
  OP22.visible=false;
  OP32.visible=false;
  OP42.visible=false;
  Q4.visible=true;
  Q3.visible=false;
   Q1.visible=false;
   OP1.visible=false;
   OP2.visible=false;
   OP3.visible=false;
OP4.visible=false;
  if(mousePressedOver(OP13)){
    Score=Score+5;
  }
  if(mousePressedOver(OP23)){
    Score=Score+10;
  }if(mousePressedOver(OP33)){
    Score=Score+20;
  }if(mousePressedOver(OP43)){
    Score=Score+30;
  }
 if(mousePressedOver(OP13)||mousePressedOver(OP23)||mousePressedOver(OP33)||mousePressedOver(OP43)){
    gameState=Question5
 }
}
if(gameState===Question5){
  OP14.visible=true;
  OP24.visible=true;
  OP34.visible=true;
  OP44.visible=true;
  OP13.visible=false;
  OP23.visible=false;
  OP33.visible=false;
  OP43.visible=false;
  Q5.visible=true;
  Q4.visible=false;
   Q1.visible=false;
   OP1.visible=false;
   OP2.visible=false;
   OP3.visible=false;
OP4.visible=false;
  if(mousePressedOver(OP14)){
    Score=Score+5;
  }
  if(mousePressedOver(OP24)){
    Score=Score+10;
  }if(mousePressedOver(OP34)){
    Score=Score+20;
  }if(mousePressedOver(OP44)){
    Score=Score+30;
  }
 if(mousePressedOver(OP14)||mousePressedOver(OP24)||mousePressedOver(OP34)||mousePressedOver(OP44)){
    gameState=Question6
 }
}
if(gameState===Question6){
  OP15.visible=true;
  OP25.visible=true;
  OP35.visible=true;
  OP45.visible=true;
  OP14.visible=false;
  OP24.visible=false;
  OP34.visible=false;
  OP44.visible=false;
  Q6.visible=true;
  Q5.visible=false;
   Q1.visible=false;
   OP1.visible=false;
   OP2.visible=false;
   OP3.visible=false;
OP4.visible=false;
  if(mousePressedOver(OP15)){
    Score=Score+5;
  }
  if(mousePressedOver(OP25)){
    Score=Score+10;
  }if(mousePressedOver(OP35)){
    Score=Score+20;
  }if(mousePressedOver(OP45)){
    Score=Score+30;
  }
 if(mousePressedOver(OP15)||mousePressedOver(OP25)||mousePressedOver(OP35)||mousePressedOver(OP45)){
    gameState=Question7
 }
}
if(gameState===Question7){
  OP16.visible=true;
  OP26.visible=true;
  OP36.visible=true;
  OP46.visible=true;
  OP15.visible=false;
  OP25.visible=false;
  OP35.visible=false;
  OP45.visible=false;
  Q7.visible=true;
  Q6.visible=false;
   Q1.visible=false;
   OP1.visible=false;
   OP2.visible=false;
   OP3.visible=false;
OP4.visible=false;
  if(mousePressedOver(OP16)){
    Score=Score+5;
  }
  if(mousePressedOver(OP26)){
    Score=Score+10;
  }if(mousePressedOver(OP36)){
    Score=Score+20;
  }if(mousePressedOver(OP46)){
    Score=Score+30;
  }
  if(mousePressedOver(OP16)||mousePressedOver(OP26)||mousePressedOver(OP36)||mousePressedOver(OP46)){
    gameState=END
 }
}
if(gameState===END){
  Q7.visible=false;
  OP16.visible=false;
  OP26.visible=false;
  OP36.visible=false;
  OP46.visible=false;
  if(Score>0 && Score<41){
    Result1.visible=true;
  }
  if(Score>42 && Score<81){
    Result2.visible=true;
  }
  if(Score>82 && Score<121){
    Result3.visible=true;
  }
  if(Score>122 && Score<161){
    Result4.visible=true;
  }
  if(Score>162 && Score<191){
    Result5.visible=true;
  }
  if(Score>192 && Score<206){
    Result6.visible=true;
  }
  if(Score>207 && Score<282){
    Result7.visible=true;
  }
}
drawSprites();
 
}
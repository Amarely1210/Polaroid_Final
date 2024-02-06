function preload(){
  beachImg = loadImage('IMG_3221.PNG');
  polariod1Img = loadImage('IMG_5315.png');
  polariod2Img = loadImage('Tulip Field.png');
  polariod3Img = loadImage('Boardwalk.png');
  polariod4Img = loadImage('Venice.png');
  polariod5Img = loadImage('Bush Gardens.png');
  polariod6Img = loadImage('Fair.png');
  polaroid7Img = loadImage('Disney.png');
  polaroid8Img = loadImage('Tiki Bar.png');
  polaroid9Img = loadImage('Mom.png');
  polaroid10Img = loadImage('Malibu.png');
  polaroid11Img = loadImage('IMG_6044.png');
  polaroid12Img = loadImage('Rauw.png');
  polaroid13Img = loadImage('Dock.png');
  polaroid14Img = loadImage('Bridge.png');
  polaroid15Img = loadImage('Falls.png');
  polaroid16Img = loadImage('Azul.png');
  polaroid17Img = loadImage('View.png');
  polaroid18Img = loadImage('Ocean City.png');//
  polaroid19Img = loadImage('Universal.png');
  polaroid20Img = loadImage('IMG_6066.png');//
  polaroid21Img = loadImage('IMG_6069.png');
  polaroid22Img = loadImage('IMG_6068.png');
 }

function setup() {
  let canvas = createCanvas(400, 500);
  canvas.parent('sketch-holder');

  
   let button =createButton('Random Picture');
  button.parent('button-holder');
  button.class('ChangePhoto');
  button.mousePressed(RandomPicture);
   
   let button1 =createButton('The Caption');
  button1.parent('button-holder');
  button1.class('ChangeTitle');
  button1.mousePressed(TheCaption);
  
   let button2 =createButton('The Dates');
  button2.parent('button-holder');
  button2.class('TheDay');
  button2.mousePressed(TheDates);

 
  background(0);
  strokeWeight(60);
  fill(250);
  rect(0,0,400,400);
 
  
}

function RandomPicture(){
  let imgArray = [beachImg,polariod1Img,polariod2Img,polariod3Img,polariod4Img,polariod5Img,polariod6Img,polaroid7Img, polaroid8Img,polaroid9Img,polaroid10Img,polaroid11Img,polaroid12Img,polaroid13Img,polaroid14Img,polaroid15Img,polaroid16Img,polaroid17Img,polaroid18Img,polaroid19Img,polaroid20Img,polaroid21Img,polaroid22Img];
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], 30,30,340,350);
  
 }

 let captionTexts = ["Bush Gardens","Venice Beach,CA","Tiki Bar","Tulip Field","El Salvador","Niagara Falls","PWC Fair","Disneyland","Manhattan Beach","El Tunco","Washington DC","Malibu","Santa Monica","Ocean City,MD","Universal Studios","Santa Clara","Buffalo,NY","Sushitoto","San Salvador"];

 let datesYear = ["08/19/2023","06/27/2023","04/15/2023","01/19/2023","01/15/2023","12/22/2022","12/19/2022","12/16/2022","07/09/2019","07/10/2022","12/17/2022","03/27/2021","06/28/2018","12/23/2022","03/15/2019","12/10/2022"];

function TheCaption(){
  rect(50,420,500,60);
  textSize(35);
  textFont('Courier New');
  let ranTexts= int(random(captionTexts.length));
  text(captionTexts[ranTexts],30,450);
}

function TheDates(){
  rect(50,440,500,60);
  let ranText= int(random(datesYear.length));
  text(datesYear[ranText],80,445);
 }

function draw() {
  
  
  //fill(0);
  //rect(0,200,400,200);
   

  
}
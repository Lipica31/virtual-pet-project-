//Create variables here
var dog, happyDog;
 var database, foodS, foodStock;
function preload()
{
  //load images here
  dog = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");

}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(200,300,20,10);
  dog.scale = 0.3;
  dog.addImage(dogImg);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);

}


function draw() {  
background(46, 139, 87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg);
  
}
if(keyWentDown(DOWN_ARROW)){
dog.addImage(dogImg1);
}
  drawSprites();
  //add styles here
textSize(15);

text("Remaining Food",foodS,130,200);
textSize(15);
text("Press up arrow key to feed drago milk",60,50);

}

function readStock(data){
foodS = data.val();

}
function writeStock(X){
  if(x<=0){
    x=0;

  }else{
    x = x+1;
  }
  database.ref('/').update({
food:x
  })
}


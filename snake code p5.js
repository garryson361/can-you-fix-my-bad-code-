var snakeX = 0
var snakeY = 0
var gameover = false
var snakeYspeed = 0
var snakeXspeed = 0
var foodX = Math.floor(Math.random()* 375)
var foodY = Math.floor(Math.random()* 375)
var thing = 15
function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  foodX = (Math.ceil(foodX / 15) * 15);
  foodY = (Math.ceil(foodY / 15) * 15)
  frameRate(3)
  textSize(32)
  fill(255,255,255)
  rect(snakeX,snakeY,15,15)
  rect(foodX,foodY,15,15)
  if(keyCode == UP_ARROW){
  snakeYspeed = -15
    snakeXspeed = 0
  }
  if(keyCode == DOWN_ARROW){
  snakeYspeed = 15
    snakeXspeed = 0
  }
  if(keyCode == LEFT_ARROW){
  snakeXspeed = -15
    snakeYspeed = 0
  }
  if(keyCode == RIGHT_ARROW){
  snakeXspeed = 15
    snakeYspeed = 0
  }
  if(snakeX < 0 || snakeX > 390 || snakeY < 0 || snakeY > 390){
  gameover = true
  }
  for(var i = 0; i < length; i++){
    rect(snakeX * i - 15,snakeY,15,15)
  }
  if(snakeX == foodX && snakeY == foodY){
    thing = thing - 15
  length = length + 1
    foodX =  Math.floor(Math.random()* 375)
    foodY = Math.floor(Math.random()* 375)
  }
  if(gameover == true){
  fill(255,255,0)
  text("you lost!",140,180)
    snakeX = 1000
    
  }
  snakeX = snakeX + snakeXspeed
  snakeY = snakeY + snakeYspeed
}

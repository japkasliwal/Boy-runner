var path
var runner
var man
var road
var invisbleGroundOne
var invisbleGroundTwo
var bomb
var bombImage
var bombTwo
var bombTwoImage









function preload(){
  path = loadImage("path.png")
  runner = loadAnimation("Runner-1.png","Runner-2.png")
  bombImage = loadImage("bomb.png")
  bombTwoImage = loadImage("bomb.png")
}

function setup(){
  createCanvas(400,400);
  road = createSprite(200,200,20,20)
  man = createSprite(200,330,20,20)
  bomb = createSprite(150,70,20,20)
bombTwo = createSprite(300,70,20,20)

  road.addImage("bg", path);
  man.addAnimation("thief", runner);
  bomb.addAnimation("bomb",bombImage)
  bombTwo.addAnimation("bomb",bombTwoImage)
  man.scale=0.1
bomb.scale=0.1
bombTwo.scale=0.1
  road.velocityY=6
  bomb.velocityY=6
  bombTwo.velocityY=8
  invisbleGroundOne = createSprite(375,330,50,150)
invisbleGroundTwo = createSprite(25,330,50,150)
invisbleGroundOne.visible = false
invisbleGroundTwo.visible = false



}

function draw() {
  background(0);
drawSprites()
if (road.y>390){
  road.y=road.width/2
}
if (bomb.y>390){
  bomb.y=20 
}
if (bombTwo.y>390){
  bombTwo.y=20 
}
if (man.isTouching(bomb || bombTwo)){
bomb.velocityY=0
bombTwo.velocityY=0
fill("white")
textSize(25)
text("Game Over",150,200)

}















man.x=World.mouseX
man.collide(invisbleGroundOne)
man.collide(invisbleGroundTwo)


}

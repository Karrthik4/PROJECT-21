var bullet,thickness;
var wall,speed,weight

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  bullet = createSprite(50,200,50,25); 
  wall = createSprite(1200,200,thickness,height/2); 
  wall.shapeColor = color(80,80,80);

  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet.velocityX = speed;

}

function draw() {

  background(0); 
  
  if(bullet.x > 1168){ bullet.x=1168 }

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }

  fill("red");
  textSize(19);
  text("Wall Not Effective if Damage > 10",200,270);

  fill("green");
  textSize(19);
  text("Wall Effective if Damage < 10",200,310);

  fill("blue");
  textSize(19);
  text("Damage:"+Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness)),900,350);

  fill("violet");
  textSize(35);
  text("Mylitary Wall",600,50);

  fill("violet");
  textSize(35);
  text("Test",665,100);

  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  bullet.collide(wall);

  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}

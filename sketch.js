var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(400,1600);
  wall=createSprite(50, 200, 50, 50);
  wall.velocityX = speed;
  bullet=createSprite(1500,200,thickness,height/2);
  thickness=random(22,83);
  weight=random(223,321);
  speed=random(30,52);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  hasCollided();
}
function hasCollided(bullet,(wall)
{ 
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
   return false;
   if(hasCollided(bullet, wall))
   {
     bullet.velocityX=0;
     var damage=0.5 * weight * speed * speed/(thickness * thickness * thinkness);
     if(damage>10)
     {
       wall.shapeColor(255,0,0);
     }

     if(damage<10)
     {
       wall.shapeColor(0,255,0);
     }
   }
}
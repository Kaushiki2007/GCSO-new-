var car, wall, thickness;
var speed, weight, bullet;

function setup() {
  createCanvas(800, 400);
  

  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(22, 83);


  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200, 200, thickness, height / 2);

  wall.shapecolor = color(80, 80, 80);
  car.velocityX = speed;

  bullet = createSprite(50, 200, 30, 3);
  bullet.velocityX = speed;
  bullet.shapecolor = color(225)
}

function draw() {
  background(255, 255, 255);

  

  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22500;
    if (deformation > 180) {
      car.shapecolor = color(255, 0, 0);
    }
    if (deformation < 180) {
      car.shapecolor = color(230, 230, 0);
    }
    if (deformation < 100) {
      car.shapecolor = color(0, 255, 0);

    }
    hasCollided();


    if (hasCollided(bullet, wall)) {
      bullet.velocityX = 0;
      var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness)

      if (damage > 10) {
        wall.shapecolor = color(255, 0, 0);
      }
      if (damage < 10) {
        wall.shapecolor = color(0, 255, 0);
      }
      
    }
    
  }
  drawSprites();
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true;
  }
  return false;
}




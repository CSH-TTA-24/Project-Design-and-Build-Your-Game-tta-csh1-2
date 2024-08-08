let user;
let userX;
let userY;

let enemy1;
let enemyX1;
let enemyY1;

let enemy2;
let enemyX2;
let enemyY2;

let goal;
let goalX;
let goalY;

let end;
let endX;
let endY;

let eat;
let water;

let speed1;
let speed2;

let score = 0;


function preload() {
  user = loadImage("images/frog.gif");
  enemy1 = loadImage("images/whale.gif");
  enemy2 = loadImage("images/stingRay.gif");
  goal = loadImage("images/cockroach.gif")
  end = loadImage("images/Lily-Pad.png");
  eat = loadSound("sounds/eating.mp3")
  water = loadSound("sounds/water.mp3")
}

function setup() {
  createCanvas(500, 500);
  background(98, 169, 201);
  imageMode(CENTER);

  userX = 50;
  userY = 450;

  enemyY1 = 150;
  enemyY2 = 350;

  speed1 = random(2, 7)
  speed2 = random(2, 7)

  enemyX1 = 60;
  enemyX2 = 440;

  goalX = random(25, 473)
  goalY = random(25, 473)

  endX = (470, 437)
  endY = (35, 35)
}

function draw() {
  background(98, 169, 201);

  image(user, userX, userY, 50, 50);
  if (keyIsDown(38)) {
    userY -= 3;
  }
  if (keyIsDown(40)) {
    userY += 3;
  }
  if (keyIsDown(37)) {
    userX -= 3;
  }
  if (keyIsDown(39)) {
    userX += 3;
  }

  enemyX1 = enemyX1 + speed1
  image(enemy1, enemyX1, enemyY1, 100, 100)
  if (enemyX1 > 450) {
    enemyX1 = 25
    enemyY1 = random(50, 350)
  }

  enemyX2 = enemyX2 - speed2
  image(enemy2, enemyX2, enemyY2, 100, 100);
  if (enemyX2 < 50) {
    enemyX2 = 450
    enemyY2 = random(50, 350)
  }

  fill(255, 255, 255)
  textSize(20)
  let distance1 = dist(userX, userY, enemyX1, enemyY1);
  let distance2 = dist(userX, userY, enemyX2, enemyY2);
  if ((distance1 <= (25) + (50)) || (distance2 <= (25) + (50))) {
    text("Try again...", 200, 250)
    userX = 50;
    userY = 450;
    score = 0;
  }

  image(goal, goalX, goalY, 50, 50)
  let distanceG = dist(userX, userY, goalX, goalY)
  if (distanceG <= 50) {
    eat.play()
    goalX = random(25, 475)
    goalY = random(25, 475)
    score++;
  }

  let distanceE = dist(userX, userY, endX, endY)
  image(end, endX, endY, 35, 35)

  if (distanceE <= 42) {
    water.play()
    text("You win!!!", 190, 210)
  }
  if (score == 5) {
    text("Your full! Go back home or to your lily pad -->", 190, 250)
  } else {
    text("Score:" + score, 30, 30);
  }
}

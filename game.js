createCanvas(400,400);

var ball = createSprite(200,200,10,10);

var player1 = createSprite(200,35,50,10);
var player2 = createSprite(200,365,50,10);

var goal_1 = createSprite(200,15,150,20);
var goal_2 = createSprite(200,385,150,20);

goal_1.shapeColor = "yellow";
goal_2.shapeColor = "yellow";

ball.shapeColor = "white";

player1.shapeColor = "black";
player2.shapeColor = "black";


var gameState = "serve";

var playerScore1 = 0;
var playerScore2 = 0;


function draw() {
  
  fill("black");
  background("green");
  
  text(playerScore1,20,175);
  text(playerScore2,20,225);
  
  if (gameState === "serve") {
    text("Press Space to Serve",150,180);
  }
  
  if(keyDown("a")){
    player1.x -= 10;
  }
  if(keyDown("d")){
    player1.x += 10;
  }
  if(keyDown("LEFT")){
    player2.x -= 10;
  }
  if(keyDown("RIGHT")){
    player2.x += 10;
  }
  
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i + 10,200);
  }
  createEdgeSprites();
  ball.bounceOff(edges);
  ball.bounceOff(player1);
  ball.bounceOff(player2);
  player1.bounce(edges);
  player2.bounce(edges);
   
  if (keyDown("space") && gameState === "serve") {
    serve();
    gameState = "play";
  }
  
    if(ball.isTouching(goal_1)||ball.isTouching(goal_2)){
      if(ball.isTouching(goal_1)){
      playerScore2 = playerScore2 + 1;
    }
      if(ball.isTouching(goal_2)){
      playerScore1 = playerScore1 + 1;
    }
    reset();
    gameState = "serve";
  }
  
  if(playerScore1 === 10){
    gameState = "over";
    text("Game over, Sarhak wins",150,180);
  }
  if(playerScore2 === 10){
    gameState = "over";
    text("Game over, Atman wins",150,180);
  } 
  
  if(keyDown("R") && gameState === "over"){
    gameState = "serve";
    playerScore1 = 0;
    playerScore2 = 0;
  }
  
  drawSprites();
}

function serve() {
  ball.velocityX = 10;
  ball.velocityY = 8;
}

function reset() {
  ball.x = 200;
  ball.y = 200;
  ball.velocityX = 0;
  ball.velocityY = 0;
}

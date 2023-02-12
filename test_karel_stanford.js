/**
 * https://stanford.edu/~cpiech/karel/ide.html
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   createChessPattern();
}

function goToExtremeDiagonal(){
   while (frontIsClear()){
      move();
      turnLeft();
      move();
      turnRight();
   }
}

function putBeeperAlongDiagonal(){
   putBeeper();
   while (frontIsClear()){
      move();
      turnLeft();
      move();
      putBeeper();
      turnRight();
   }
}

function createOddRowChessPattern(){
   while(frontIsClear()){
      putBeeper();
      move();
      move();
   }
   putBeeper();
}

function createEvenRowChessPattern(){
   while(frontIsClear()){
      move();
      putBeeper();
      move();
   }
}

function goToUpperRowFromRightWall(){
   turnLeft();
   move();
   turnLeft();
}

function goToUpperRowFromLeftWall(){
   turnRight();
   move();
   turnRight();
}

function createChessPattern(){
   while(leftIsClear() || rightIsClear()){
      createOddRowChessPattern();
      goToUpperRowFromRightWall();
      createEvenRowChessPattern();
      goToUpperRowFromLeftWall();
   }
}

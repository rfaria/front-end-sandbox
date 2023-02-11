/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   putBeeperAlongDiagonal();
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

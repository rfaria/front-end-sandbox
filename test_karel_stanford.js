/**
 * https://stanford.edu/~cpiech/karel/ide.html
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   goToExtremeDiagonal();
}

function goToExtremeDiagonal(){
   while (frontIsClear()){
      move();
      turnLeft();
      move();
      turnRight();
   }
}

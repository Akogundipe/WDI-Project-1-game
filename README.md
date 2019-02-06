Connect Four

  # Project Overview
2 player connect four. First player to have four pieces match, vertically, horizontally, or diagonally wins.

## Project Description

Players will click on a square where they want to move their piece. A click event listener will accomplish this task.

MVP/PostMVP - 5min

MVP: 2 player game that starts when button is pressed. Clickable squares to place pieces. When a player wins, no more pieces can be placed. Player will have to press start button to reset the board.

Additional Libraries

Turning squares node list into an array called nodesArray as found on https://davidwalsh.name/nodelist-array

Code Snippet

/* setting variables for a while loop
while loop separates the nodesArray into a 2D array that matches the gameboard*/
let tempArray;
let twoDArray = [];

while (nodesArray.length) {
  tempArray = nodesArray.splice(nodesArray.length - 7, 7);
  twoDArray.push(tempArray);
}

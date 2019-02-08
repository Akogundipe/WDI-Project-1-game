## Tic Tac Toe with Colors!

<http://tic-tac-toe-with-colors-instead.surge.sh>

##  Project Overview
A two player game using a computer mouse or touchpad.

## Project Description

First player to have three pieces match, vertically, horizontally, or diagonally wins.

## User Stories
Players will click on a square where they want to move their piece. A click event listener will accomplish this task.

## MVP/PostMVP - 5min

MVP: Two player game that starts when button is pressed. Clickable squares to place pieces. When a player wins, no more pieces can be placed. Player will have to press start button to reset the board.

## Additional Libraries

None used

## Code Snippet
```
const checkForWin = () => {
  if (squares[0].className === squares[1].className && squares[0].className === squares[2].className && squares[0].className == "square black" && squares[1].className == "square black" && squares[2].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if
  ...
  ```

## Issues and Resolutions
Check for win function was difficult. I had to act a lot of guard operators.

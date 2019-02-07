console.log("so excited to build this game!");

const board = document.getElementById('container');
let currentPlayer = 'red'

//squares is a node list with all the divs of the class 'square'
let squares = document.querySelectorAll(".square");
//turning squares node list into an array called nodesArray as found on https://davidwalsh.name/nodelist-array
let nodesArray = Array.prototype.slice.call(squares);
/* setting variables for a while loop
while loop separates the nodesArray into a 2D array that matches the gameboard*/
let tempArray;
let twoDArray = [];

while (nodesArray.length) {
  tempArray = nodesArray.splice(nodesArray.length - 7, 7);
  twoDArray.push(tempArray);
}

squares.forEach((square, index) => square.id = "square" + index);
//make whole board clickable (eventListener) then event.target at div i touched event listeners

board.addEventListener('click', (event) => {
  if (event.target.className === "square") {
    event.target.classList.add(`${currentPlayer}`);
  }
    if (currentPlayer === "red") {
      currentPlayer = "black";
    } else {
      currentPlayer = "red";
    }
  });
for (let i = 0; i < twoDArray.length; i++) {
  for (let j = 0; j < twoDArray[i].length; j++) {
    twoDArray[i][j].classList[1] === twoDArray[i][j].classList[1] +1 === twoDArray[i][j].classList[1] +2 === twoDArray[i][j].classList[1] +3;
    console.log('u win');
  };
};








//win condition horizontal

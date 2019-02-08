const board = document.getElementById('container');
let currentPlayer = 'red';

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



const clickFunction = (event) => {
  if (event.target.className === "square") {
    event.target.classList.add(`${currentPlayer}`);

    if (currentPlayer === "red") {
      currentPlayer = "black";
    } else {
      currentPlayer = "red";
    }
    checkForWin();
    }
  }
  board.addEventListener('click', clickFunction);

let redPlayer = document.getElementsByClassName('square red');
let blackPlayer = document.getElementsByClassName('square black');
let counter = 0;

let starter = document.getElementById('startButton');

starter.addEventListener('click', (event) => {
  squares.forEach((square) => {
    square.classList.remove("black", "red");
  });
  board.addEventListener('click', clickFunction);
  currentPlayer = "red";
});

const checkForWin = () => {
  if (squares[0].className === squares[1].className && squares[0].className === squares[2].className && squares[0].className == "square black" && squares[1].className == "square black" && squares[2].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[3].className === squares[4].className && squares[3].className === squares[5].className && squares[3].className == "square black" && squares[4].className == "square black" && squares[5].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[6].className === squares[7].className && squares[6].className === squares[8].className && squares[6].className == "square black" && squares[7].className == "square black" && squares[8].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[0].className === squares[3].className && squares[0].className === squares[6].className && squares[0].className == "square black" && squares[3].className == "square black" && squares[6].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[1].className === squares[4].className && squares[1].className === squares[7].className && squares[1].className == "square black" && squares[4].className == "square black" && squares[7].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[2].className === squares[5].className && squares[2].className === squares[8].className && squares[2].className == "square black" && squares[5].className == "square black" && squares[8].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[0].className === squares[4].className && squares[0].className === squares[8].className && squares[0].className == "square black" && squares[4].className == "square black" && squares[8].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[2].className === squares[4].className && squares[2].className === squares[6].className && squares[2].className == "square black" && squares[4].className == "square black" && squares[6].className == "square black") {
    alert("Black wins");
    board.adremoveentListener('click', clickFunction);
  } else if (squares[0].className === squares[1].className && squares[0].className === squares[2].className && squares[0].className == "square red" && squares[1].className == "square red" && squares[2].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[3].className === squares[4].className && squares[3].className === squares[5].className && squares[3].className == "square red" && squares[4].className == "square red" && squares[5].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[6].className === squares[7].className && squares[6].className === squares[8].className && squares[6].className == "square red" && squares[7].className == "square red" && squares[8].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[0].className === squares[3].className && squares[0].className === squares[6].className && squares[0].className == "square red" && squares[3].className == "square red" && squares[6].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[1].className === squares[4].className && squares[1].className === squares[7].className && squares[1].className == "square red" && squares[4].className == "square red" && squares[7].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[2].className === squares[5].className && squares[2].className === squares[8].className && squares[2].className == "square red" && squares[5].className == "square red" && squares[8].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[0].className === squares[4].className && squares[0].className === squares[8].className && squares[0].className == "square red" && squares[4].className == "square red" && squares[8].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  } else if (squares[2].className === squares[4].className && squares[2].className === squares[6].className && squares[2].className == "square red" && squares[4].className == "square red" && squares[6].className == "square red") {
    alert("Red wins");
    board.removeEventListener('click', clickFunction);
  }
}

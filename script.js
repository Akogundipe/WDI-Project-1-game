console.log("so excited to build this game!");
let gameboard = [];

const makeNewGame = () => {
  for (row=0; row<=5; row++) {
  	gameboard[row] = [];
  		for (col=0; col<=6; col++) {
  		gameboard[row][col] = 0;
      };
    };
}
makeNewGame();

gameboard =  [[0,0 ],[ 0,1 ],[ 0,2 ],[ 0,3 ],[ 0,4 ],[ 0,5 ],[ 0,6 ],[
],[ 1,0 ],[ 1,1 ],[ 1,2 ],[ 1,3 ],[ 1,4 ],[ 1,5 ],[ 1,6 ],[
],[ 2,0 ],[ 2,1 ],[ 2,2 ],[ 2,3 ],[ 2,4 ],[ 2,5 ],[ 2,6 ],[
],[ 3,0 ],[ 3,1 ],[ 3,2 ],[ 3,3 ],[ 3,4 ],[ 3,5 ],[ 3,6 ],[
],[ 4,0 ],[ 4,1 ],[ 4,2 ],[ 4,3 ],[ 4,4 ],[ 4,5 ],[ 4,6 ],[
],[ 5,0 ],[ 5,1 ],[ 5,2 ],[ 5,3 ],[ 5,4 ],[ 5,5 ],[ 5,6 ]];

const squares = document.querySelectorAll(".square");

squares.forEach((square, index) => square.id = "square" + index);

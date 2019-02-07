Project Overview
Project Description
Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
2 player connect four. First player to have four pieces match, vertically, horizontally, or diagonally wins.

User Stories
User story is a description of objective, which helps a person to achieve a feature. So that he able to utilize that feature when using software application. User story is a part of Agile development process.
User Story Best Practices
Players will click on a square where they want to move their piece. A click event listener will accomplish this task.

Wireframes
Upload images of wireframe to cloudinary or Google Drive and add the link here with a description of the specific wireframe.

MVP/PostMVP - 5min
The functionality will then be divided into two separate lists: MVP and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

MVP: 2 player game that starts when button is pressed. Clickable squares to place pieces. When a player wins, no more pieces can be placed. Player will have to press start button to reset the board.

Additional Libraries
Use this section to list all supporting libraries and thier role in the project.
turning squares node list into an array called nodesArray as found on https://davidwalsh.name/nodelist-array

Code Snippet
Use this section to include a brief code snippet of functionality that you are proud of an a brief description

/* setting variables for a while loop
while loop separates the nodesArray into a 2D array that matches the gameboard*/
let tempArray;
let twoDArray = [];

while (nodesArray.length) {
  tempArray = nodesArray.splice(nodesArray.length - 7, 7);
  twoDArray.push(tempArray);
}

Issues and Resolutions
Use this section to list of all major issues encountered and their resolution. This section will help you track errors and how you resolved them.

SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier
**RESOLUTION**: Missing comma after first object in sources {} object

	Technologies
	html - boilerplate, tables
	css - positioning and styling of the table, keyframe animations
	js - win conditions, setting up the arrays data

	Problems

	Listing all the array win conditions. Will be a challenge to implement how the AI moves. It will check for which array column spot is not occupied with a piece. I can set a certain time after human player drops the piece to give impression of AI thinking
	It's a lot but it is enough to list. Not 100 win conditions or anything.

	for (let i = 0; i < twoDArray.length; i++) {
	  for (let j = 0; j < twoDArray[i].length; j++) {
	  console.log(twoDArray)
	  console.log('i', twoDArray[i])
	  console.log('j', twoDArray[j])
	  if(twoDArray[i][j].classList[0] === twoDArray[i][j].classList[0]) {
	      console.log('this is true')
	  } else if (twoDArray[i][j].classList[0] === twoDArray[i][j].classList[0]) {
	    console.log('this is also true')
	  }

	  }
	}

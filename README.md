# WDI-Project-1-game

#### For the proposal:
- A collection of wireframes - hand-drawn or digitally created - outlining the important pages of your site, as well as the critical states of your game (start state, play state(s) win state). As some games have many or infinite numbers of play states and win state, you can just provide a few simplified diagrams to convey the general idea.
Hand drawn
- A proposal including:
	- A description of the game you'll be building with the objective described in non-technical language.
	- Proper [Markdown Syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
   - A list of the main technologies you plan to use.
	- An explanation of the major problems you plan to face while implementing this game.
	- An explanation of how you foresee yourself solving the aforementioned problems.
  
  # Project Overview
A 1 player connect four game. Drop pieces into columns one at a time. Four connecting pieces wins.

## Project Description

Move the pieces into the columns. If four pieces match up, the player wins. It will use a series of arrays to determine win condition. Since the board is 6 x 7, it won't be difficult to list all the array combinations. 

Technologies
html - boilerplate, tables
css - positioning and styling of the table, keyframe animations
js - win conditions, setting up the arrays data

Problems

Listing all the array win conditions. Will be a challenge to implement how the AI moves. It will check for which array column spot is not occupied with a piece. I can set a certain time after human player drops the piece to give impression of AI thinking
It's a lot but it is enough to list. Not 100 win conditions or anything.

Javascript

let gameboard = []
//each block in gameboard will be an array
| 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
| 1,0 | 1,1 | 1,2 | 1,3 | 1,4 | 1,5 | 1,6 |
| 2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
| 3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
| 4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
| 5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |

for (row=0; row<=5; row++) {
	gameboard[row] = [];
		for (col=0; col<=6; col++) {
		gameboard[row][col] = 0;
		}	
	}	

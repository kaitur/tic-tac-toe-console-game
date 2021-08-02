import { makeBoard, printBoard, board } from './playing-field-display.js';

import pkg_1 from 'colors';
const { green } = pkg_1;


//*** function to check the value ***\\
export function isInt(value) {
    let x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

//*** function to validate ***\\
function validate(position) {
    return (isInt(position) && board[position] === ' ')
}

//*** win combinations ***\\
let winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

//*** function to check win ***\\
function checkwin(player) {
    for (let i = 0; i < winCombinations.length; i++) {
        let mark = 0, count = 0;
        for (let j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                mark++;
            }
            if (mark === 3) {
                count++;
                if (count === 0) {
                    console.log(coformslors.green.bold('DRAW'));
                    return;
                }
                return true;
            }
        }
    }
    return false;
}

export function playerTurn(player, position) {
    console.log(position);
    console.log('Your turn player: ', player);
    if (validate(position) === true) {
        makeBoard(position, player);
        printBoard();
        if (checkwin(player) === true) {
            console.log(green.bold(`Won: ${player}!`));
            return;
        }
    }
    else {
        console.log(green.bold('incorrect input please try again..'));
        //playerTurn(player, res);
    }
}

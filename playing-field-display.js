import pkg from 'colors';
const { green } = pkg;

export let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

//*** function to print position and marks ***\\
export function makeBoard(position, mark) {
    board[position] = mark.toUpperCase();
}

//*** function to print to console ***\\
export function printBoard() {
    console.log(green.bold('\n' +
        '\t\t\t\t\t\t' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        '\t\t\t\t\t\t' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        '\t\t\t\t\t\t' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n'
    ));
}

console.log(green.bold('Game started, select a position by numbers : \n\n' +
    '\t\t\t\t\t\t1 | 2 | 3 \n' +
    '\t\t\t\t\t\t4 | 5 | 6 \n' +
    '\t\t\t\t\t\t7 | 8 | 9 \n'));
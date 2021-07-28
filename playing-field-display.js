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
        '                             ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        '                             ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        '                             ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n'
    ));
}

export let gh = console.log(green.bold('Game started : \n' +
    '                              1 | 2 | 3 \n' +
    '                              4 | 5 | 6 \n' +
    '                              7 | 8 | 9 \n'));
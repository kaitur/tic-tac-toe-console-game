import { createServer } from 'net';
import { isInt, playerTurn } from './game_logic.js';
import { write } from 'fs';

import pkg from 'colors';
const { green } = pkg;

let map = new Map();
let players = [];
let simbol = '';
let turn = true;

const server = createServer(function (socket) {

    const port = socket.remotePort;
    console.log('Player IP. Port: ', socket.remoteAddress);
    console.log('Client connected. Port: ', port);
    players.push(socket);
    Connect();

    socket.on('data', message => {
        if (turn) {
            let position = message.toString().replace(/\s/g, '');
            playerTurn('X', position);
            turn = !turn;
        }
        else {
            let position = message.toString().replace(/\s/g, '');
            playerTurn('O', position);
            turn = !turn;
        }
    });
    socket.on('close', () => {
        let index = players.indexOf(socket);
        players.splice(index, 1);
        console.log('Closed', port, index);
    });

    function Connect() {
        if (players.length <= 2) {
            let index = players.indexOf(socket);
            if (players.length === 1) {
                simbol = 'X';
                map.set(simbol, index);
                socket.write(green.bold('Game started, select a position by numbers : \n\n' +
                    '\t\t\t\t\t\t1 | 2 | 3 \n' +
                    '\t\t\t\t\t\t4 | 5 | 6 \n' +
                    '\t\t\t\t\t\t7 | 8 | 9 \n'));
            }
            else {
                simbol = 'O';
                map.set(simbol, index);
                socket.write(green.bold('Game started, select a position by numbers : \n\n' +
                    '\t\t\t\t\t\t1 | 2 | 3 \n' +
                    '\t\t\t\t\t\t4 | 5 | 6 \n' +
                    '\t\t\t\t\t\t7 | 8 | 9 \n'));
            }
        }
    }

    socket.pipe(process.stdout);

});

server.listen(6666, '10.0.0.178');
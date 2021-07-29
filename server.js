import { createServer } from 'net';
import { makeBoard, printBoard, board } from './playing-field-display.js';
import { isInt, playerTurn } from './game_logic.js';

const players = [{simbol: 'X', socket: "ww"},
{simbol: 'O', socket: "aw"}
];

let user1 = {
    simbol: 'X',
    sockt: undefined
};
let user2 = {
    simbol: 'O',
    sockt: undefined
};
let players = [user1, user2];

const server = createServer(function (socket) {

    const port = socket.remotePort;
    console.log('Player IP. Port: ', socket.remoteAddress);
    console.log('Client connected. Port: ', port);

    socket.on('data', message => {
        //let res = { 'position': message.toString() }
        //playerTurn('X', res);
    });

    socket.on('close', () => {
        let index = players.indexOf(socket);
        players.splice(index, 1);
        console.log('Closed', port);
    });

    players.user1.sockt !== undefined ?  players.user1.sockt.push(socket) :  players.user2.sockt.push(socket);

    //players.push(socket);

    //socket.pipe(process.stdout);

});

server.listen(6666, '10.0.0.178');
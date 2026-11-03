const net = require('net');

const socket = net.connect(4000, 'localhost', () => {
    console.log('Connected! Type a message and press enter');

    socket.on('data', (data) => {
        console.log('Them: ' + data.toString().trim());
    })
});

process.stdin.on('data', (typed) => {
    socket.write(typed);
});
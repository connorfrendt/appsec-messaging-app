const net = require('net');
const PORT = 4000;

const server = net.createServer((socket) => {
    console.log('Friend Connected! Start typing.');

    socket.on('data', (data) => {
        console.log('Them: ' + data.toString().trim());
    });
    
    process.stdin.on('data', (typed) => {
        socket.write(typed);
    });
});


server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
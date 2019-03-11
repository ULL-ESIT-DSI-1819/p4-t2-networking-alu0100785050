'use strict';
const fs = require('fs');
const net = require('net');
let sockets = [];
let user = 0;

function broadcast(from, message) {
	if(sockets.length !== 0){ //si quedan clientes conectados
		sockets.forEach(array => { //se mandan los mensajes a todos los conectados
			if(from != sockets.indexOf(array))
				array.write(`user${from} > ${message}`);
		});
	}
};

net.createServer(connection => {
	//Reporting.
	sockets[user] = connection;
	user++;
	console.log('Guest '+ user +' connected.');

	connection.on('data', data => {
		broadcast(sockets.indexOf(connection),data);
	});

	//Cleanup.
	connection.on('close', () => {
		console.log('Subscriber ' +sockets.indexOf(connection)+  ' disconnected.');
		sockets.splice(sockets.indexOf(connection));
	});
}).listen(8000, () => console.log('Listening for subscribers...'));

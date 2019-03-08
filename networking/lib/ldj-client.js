'use strict'
const EventEmitter = require('events').EventEmitter;
class LDJClient extends EventEmitter {
	constructor(stream) {
		if (stream === null)
			throw new Error('Stream is null');
		super();
		let buffer = '';
		stream.on('data', data => {
			buffer += data;
			let boundary = buffer.indexOf('\n');
			while (boundary !== -1) {
				const input = buffer.substring(0,boundary);
				buffer = buffer.substring(boundary+1);
				try {
					this.emit('message', JSON.parse(input));
				} catch (e) {
					throw new Error('Non JSON message sent to client.');
				}
				boundary = buffer.indexOf('\n');
			}
		});
	}

	static connect(stream) {
		return new LDJClient(stream);
	}
}

module.exports = LDJClient;

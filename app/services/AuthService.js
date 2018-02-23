// AuthService.js

import io from 'socket.io-client';

class AuthService {
    createSocket() {
	var socket = io("https://www.copyeverythingapp.com");
	return socket;
    }
    login(username, password, callback) {
	if(typeof this.socket == 'undefined'){
	    this.socket = this.createSocket();
	}

	this.socket.emit('auth', {
		username: username, 
		password: password
	});
	this.socket.once('auth resp', callback);
    }
}

export default new AuthService();

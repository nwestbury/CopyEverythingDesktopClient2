// AuthService.js

import io from 'socket.io-client';

class AuthService {
    init() {
	var socket = io("https://www.copyeverythingapp.com");
	return socket;
    }
    login(username, password, callback) {
	if(typeof this.socket == 'undefined'){
	    this.socket = this.init();
	}

	this.socket.emit('auth', {
		username: username, 
		password: password
	});
	this.socket.once('auth resp', callback);
    }
}

export default AuthService;

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

    set_clipboard_pull_callback(callback){
	this.socket.on('new server copy', callback);
    }

    push_clipboard(text){
	this.socket.emit('new client copy', text);
    }
}

export default AuthService;








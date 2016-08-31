import AuthService from '../services/AuthService.js';

const initialState = {
    login: false,
    status: "",
    auth: undefined,
}

const callback = (state, action) => {
    switch (action.type) {
    case 'AUTH_INIT':
	console.log("TEST");
	break;
    case 'LOGIN_REQUEST':
	console.log("OK fine");
	break;
    case 'TOGGLE_TODO':
	console.log("OK fine2");
	break;
    default:
	console.log("DEfault");
	break;
  }
}

const actions = (state = initialState, action) => {
    switch (action.type) {
    case 'AUTH_INIT':
	if (!state.auth){
	    return Object.assign({}, state, {
		auth: new AuthService(),
	    });
	}
	return state;
    case 'LOGIN_FAIL':
	return Object.assign({}, state, {
	    login: false,
	    status: action.status,
	});
    case 'LOGIN_SUCCESS':
	return Object.assign({}, state, {
	    login: true,
	    status: action.status,
	});
    default:
	return state;
  }
}

export default actions





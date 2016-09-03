import AuthService from '../services/AuthService.js';

const initialState = {
    data: [],
    active_id: -1,
    login: false,
    errors: [],
    auth: undefined,
    loading: false,
}

const actions = (state = initialState, action) => {
    switch (action.type) {
    case 'LOGIN_REQUEST':
	if (!state.auth){
	    return Object.assign({}, state, {
		auth: new AuthService(),
		loading: true,
	    });
	}
	return Object.assign({}, state, {
	    loading: true,
	});
	
    case 'LOGIN_FAIL':
	return Object.assign({}, state, {
	    login: false,
	    loading: false,
	    errors: action.errors,
	});
    case 'LOGIN_SUCCESS':
	return Object.assign({}, state, {
	    login: true,
	    loading: false,
	    errors: [],
	});
    case 'RESET_ERRORS':
	return Object.assign({}, state, {
	    errors: [],
	});
    default:
	return state;
  }
}

export default actions;

export const loginFail = (user, pass) => {
  return {
      type: 'LOGIN_FAIL',
      status,
  }
}

export const loginSuccess = (user, pass) => {
  return {
      type: 'LOGIN_SUCCESS',
      status,
  }
}

export const authInit = (user, pass) => {
  return {
      type: 'AUTH_INIT',
      user,
      pass,
  }
}

export function login(user, pass) {
    return (dispatch, getState) => {

	dispatch(authInit(user, pass));

	var state = getState();

	state.auth.login(user, pass, function(resp){
	    if(resp[0]){
		dispatch(loginSuccess(resp[1]));
	    }else{
		dispatch(loginFail(resp[1]));
	    }
	});
    }
}

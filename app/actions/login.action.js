import { push } from 'react-router-redux';

export const resetErrors = () => {
    return {
	type: 'RESET_ERRORS',
    }
}

export const loginFail = (errors) => {
  return {
      type: 'LOGIN_FAIL',
      errors,
  }
}

export const loginSuccess = (errors) => {
  return {
      type: 'LOGIN_SUCCESS',
      errors,
  }
}

export const loginInit = (user, pass) => {
  return {
      type: 'LOGIN_REQUEST',
      user,
      pass,
  }
}

// Function call on function (resp)onse from server expects the result
// in the format: [boolean success, string error message] 
export function login(user, pass) {
    return (dispatch, getState) => {

	dispatch(loginInit(user, pass));

	var state = getState().loginReducer;

	state.auth.login(user, pass, function(resp){
	    var status = [resp[1]];
	    if(resp[0]){
		dispatch(loginSuccess(status));
		dispatch(push('/main'));
	    }else{
		dispatch(loginFail(status));
	    }
	});
    }
}

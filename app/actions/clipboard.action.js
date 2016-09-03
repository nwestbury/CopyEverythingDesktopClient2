export const clipPullAction = () => {
  return {
      type: 'CLIP_PULL',
  }
}

export const clipPushAction = (text) => {
    return {
	type: 'CLIP_PUSH',
	text,
    }
}


export function setClipPull(callback) {
    return (dispatch, getState) => {

	var state = getState().loginReducer;
	state.auth.set_clipboard_pull_callback(callback);
	dispatch(clipPullAction());
    }
}

export const clipPush = (text) => {
    return (dispatch, getState) => {

	var state = getState().loginReducer;
	state.auth.push_clipboard(text);

	dispatch(clipPushAction(text));
    }
}

  

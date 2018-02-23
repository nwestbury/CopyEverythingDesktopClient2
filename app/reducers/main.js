const callback = (state, action) => {
    console.log("TESTY", state, action, action.type)
    switch (action.type) {
    case 'LOGIN':
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

const actions = (state = [], action) => {
  switch (action.type) {
    case 'LOGIN':
      return [
        ...state,
        callback(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        callback(t, action)
      )
    default:
      return state
  }
}

export default actions

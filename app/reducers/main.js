const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("OK fine");
  case 'TOGGLE_TODO':
      console.log("OK fine2");
  default:
      console.log("DEfault");
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos

const initialState = {
    data: [],
    active_id: -1,
    login: false,
    errors: [],
    auth: undefined,
    loading: false,
    settings: {
	history_length: 10,
	poll_frequency: 1000,
    }
}

function push_history (state, text){

    var new_entry = {type: 'Text', content: text, time: Date.now()};
    var data      = state.data.slice(); // Deep copy because react :(
    var active_id = state.active_id;
    
    if( data.length >= state.settings.history_length ){
	data.shift();
    }else{
	++active_id;
    }
    
    data.push(new_entry);
    
    return Object.assign({}, state, {
	data: data,
	active_id: active_id
    });
}

const actions = (state = initialState, action) => {
    switch (action.type) {
    case 'CLIP_PUSH':
	return push_history(state, action.text);
    default:
	return state;
    }
}

export default actions;

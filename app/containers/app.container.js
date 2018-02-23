//React library
import React from 'react';
import Login from '../components/login.component';
import Main from '../components/main.component';

import { Router, Route, hashHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';

// Annoying React Redux stuff, blame/praise Nathan1 for this...
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerMiddleware, syncHistoryWithStore, routerReducer } from 'react-router-redux';

import loginReducer from '../reducers/login.reducer';
import clipboardReducer from '../reducers/clipboard.reducer';

const routerMiddlewareInstance = routerMiddleware(hashHistory);
let store = createStore(
    combineReducers({
	loginReducer,
	clipboardReducer,
	routing: routerReducer
    }),
    applyMiddleware(thunkMiddleware, routerMiddlewareInstance)
);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

class AppContainer extends React.Component {

    constructor(props) {
	    super(props);
	    this.state = {};
    }
    
    render () {
	return (
		<Provider store={store}>
		    <Router history={history}>
	                <Route path="/" component={Login} />
	                <Route path="/main" component={Main} />
		    </Router>
		</Provider>
	);
    }
}


export default AppContainer

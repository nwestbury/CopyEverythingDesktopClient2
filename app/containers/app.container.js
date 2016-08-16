//React library
import React from 'react';
import Login from '../components/login.component';
import Main from '../components/main.component';

import { Router, Route, hashHistory } from 'react-router';

// Annoying React Redux stuff, blame/praise Nathan1 for this...
import { Provider } from 'react-redux'
import { createStore } from 'redux';

const store = createStore();

class AppContainer extends React.Component {

    constructor(props) {
	super(props);
	this.state = {};
    }
    
    render () {
	return (
		<Provider store={store}
		    <Router history={hashHistory}>
	                <Route path="/" component={Login} />
	                <Route path="/main" component={Main} />
		    </Router>
		</Provider>
	);
    }
}


export default AppContainer

//React library
import React from 'react';
import Login from '../components/login.component';
import Main from '../components/main.component';

import { Router, Route, hashHistory } from 'react-router'

class AppContainer extends React.Component {

    constructor(props) {
	super(props);
	this.state = {};
    }
    
    render () {
	return (
	     <Router history={hashHistory}>
	        <Route path="/" component={Login} />
	        <Route path="/main" component={Main} />
	    </Router>
	);
    }
}


export default AppContainer

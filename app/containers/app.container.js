//React library
import React from 'react';
//Axios for Ajax
import Axios from 'axios';
//Custom components
import Details from '../components/details.component';
import Progress from '../components/progress.component';
import Search from '../components/search.component';
import Login from '../components/login.component';
import Footer from '../components/footer.component';

class AppContainer extends React.Component {

    constructor(props) {
	super(props);
	this.state = {};
    }
    
    render () {
	return (
		<Login/>
	);
    }
}

export default AppContainer

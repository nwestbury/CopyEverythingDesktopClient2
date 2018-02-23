import React from 'react';
import ClassNames from 'classnames';
import Auth from '../services/AuthService';

export default class Main extends React.Component {

    constructor(props) {
	super(props);

	this.state = {
	    user: '',
	    password: '',
	    errors: [],
	    loading: false,
	};
    }

    render() {
	return (
		<div className="form-horizontal row">
                    FUN TIME MOTHER FUCKKKKER!
		</div>
    );
  }
}

export default Main

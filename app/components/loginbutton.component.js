import React from 'react';
import ClassNames from 'classnames';

export default class LoginButton extends React.Component {

    constructor(props) {
	super(props);
    }

    render() {
	if(this.props.loading){
	    return (
		    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
		          <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
		    </svg>
	    );
	}else{
	    return (
		    <button type="submit" className="button" onClick={this.props.onClick}>Submit</button>
	    );
	}
  }
}

export default LoginButton

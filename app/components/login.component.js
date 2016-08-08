import React from 'react';
import ClassNames from 'classnames';
import Auth from '../services/AuthService';
import ErrorMessages from '../components/errormessages.components.js';

export default class Login extends React.Component {

    constructor(props) {
	super(props);

	this.state = {
	    user: '',
	    password: ''
	};
	this.login = this.login.bind(this);
	this.handleChange = this.handleChange.bind(this);
	this.loginResp = this.loginResp.bind(this);
    }

    // Sets the state to the input value, called when inputs change
    handleChange(e) {
	this.setState({[e.target.name]: e.target.value});
    }

    // This will be called when the user clicks on the login button
    login(e) {
	e.preventDefault();
	Auth.login(this.state.user, this.state.password, this.loginResp);
    }

    // Function call on function (resp)onse from server expects the result
    // in the format: [boolean success, string error message] 
    loginResp(rep) {
	if(rep[0]){
	    
	}else{
	    console.log("GOT ERROR", rep[1]);
	}
    }

    render() {
	return (
		<div className="form-horizontal row">
                    <form role="form">
	                <div className="col-xs-offset-1 col-xs-10">
                            <div className="inner-addon left-addon">
             	                <i className="glyphicon glyphicon-user text-input-icon"></i>
	                        <input type="text" name="user" value={this.state.user} onChange={this.handleChange} className="form-control text-input" placeholder="username"></input>
                            </div>
      	                </div>
	               <div className="col-xs-offset-1 col-xs-10">
                           <div className="inner-addon left-addon">
             	              <i className="glyphicon glyphicon-lock text-input-icon"></i>
          	              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} className="form-control text-input" placeholder="password"></input>
                           </div>
       	               </div>
	               <div className="col-xs-offset-3 col-xs-6">
                           <button type="submit" className="button" onClick={this.login}>Submit</button>
	               </div>
	        </form>
		<div className="row col-xs-offset-1 col-xs-10 top-margin-10">
		    <ErrorMessages />
		</div>
		</div>
    );
  }
}

export default Login

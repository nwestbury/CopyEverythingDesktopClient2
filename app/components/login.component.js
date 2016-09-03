import React from 'react';
import ClassNames from 'classnames';
import ErrorMessages from '../components/errormessages.component';
import LoginButton from '../components/loginbutton.component';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { login, resetErrors } from '../actions/login.action';

export default class Login extends React.Component {

    constructor(props) {
	super(props);

	this.state = {
	    user: 'geek42@hotmail.com',
	    password: 'lalalala',
	};
	this.dispatch = this.props.dispatch;
	this.login = this.login.bind(this);
	this.handleChange = this.handleChange.bind(this);
    }

    // Sets the state to the input value, called when inputs change
    handleChange(e) {
	this.dispatch(resetErrors());
	this.setState({[e.target.name]: e.target.value});
    }

    // This will be called when the user clicks on the login button
    login(e) {
	e.preventDefault();
	this.dispatch(login(this.state.user, this.state.password));
    }

    render() {
	return (
		<div className="form-horizontal row">
                    <form role="form">
	                <div className="col-xs-offset-1 col-xs-10">
                            <div className="inner-addon left-addon">
             	                <i className="glyphicon glyphicon-user text-input-icon"></i>
	                        <input type="text" name="user" value={this.state.user} disabled={this.state.loading} onChange={this.handleChange} className="form-control text-input" placeholder="username"></input>
                            </div>
      	                </div>
	               <div className="col-xs-offset-1 col-xs-10">
                           <div className="inner-addon left-addon">
             	              <i className="glyphicon glyphicon-lock text-input-icon"></i>
          	              <input type="password" name="password" value={this.state.password} disabled={this.state.loading} onChange={this.handleChange} className="form-control text-input" placeholder="password"></input>
                           </div>
       	               </div>
	               <div className="col-xs-offset-3 col-xs-6 top-margin-10">
		           <LoginButton onClick={this.login} loading={this.state.loading}/>
	               </div>
	            </form>
		<div className="row col-xs-offset-1 col-xs-10 top-margin-10">
		    <ErrorMessages errors={this.props.errors} />
		</div>
		</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      login: state.loginReducer.login,
      loading: state.loginReducer.loading,
      errors: state.loginReducer.errors,
  }
}

Login = connect(mapStateToProps)(Login);

export default Login

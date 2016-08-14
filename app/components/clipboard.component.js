import React from 'react';
import ClassNames from 'classnames';
const {clipboard} = require('electron');

export default class Login extends React.Component {

    constructor(props) {
	super(props);

	this.state = {
	    data: [],
	    poll_frequency: 1000,
	    history_length: 10,
	    errors: [],
	    loading: false,
	};
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
		    <ErrorMessages errors={this.state.errors} />
		</div>
		</div>
    );
  }
}

export default Login

import React from 'react';
import ClassNames from 'classnames';

var List = React.createClass({
    render: function() {
        return (<div>
		{ this.props.data.map(function(item, i) {
                    return <div key={i}>{item}</div>
            })
        }
        </div>);
    }
});

export default class ErrorMessages extends React.Component {

    constructor(props) {
	super(props);

	this.state = {
	    errors: [] // ["Enter a valid email", "TEST"]
	};
    }

    render() {
	return (
	    {this.state.errors &&
		<div className="alert alert-danger" role="alert">
		{ this.state.errors.map(function(item, i) {
		    return <div key={i}>
			<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			<span className="sr-only">Error: </span>
			<span> {item}</span>
		    </div>
		})}
	     </div>
	    }
    );
  }
}

export default ErrorMessages

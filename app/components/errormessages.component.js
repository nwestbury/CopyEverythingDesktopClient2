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
    }

    render() {
	if(this.props.errors.length == 0){
	    return null;
	}
	
	return (
		<div className="alert alert-danger" role="alert">
		{ this.props.errors.map(function(item, i) {
		    return <div key={i}>
			<span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
			<span className="sr-only">Error: </span>
			<span> {item}</span>
		    </div>
		})}
	     </div>
    );
  }
}

export default ErrorMessages

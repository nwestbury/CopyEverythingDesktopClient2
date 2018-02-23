import React from 'react';
import ClassNames from 'classnames';
import Clipboard from '../components/clipboard.component';

export default class Main extends React.Component {

    constructor(props) {
	super(props);
    }

    render() {
	return (
		<div className="row">
		    <div className="col-xs-offset-1 col-xs-10">
	               <Clipboard />
	            </div>
		</div>
    );
  }
}

export default Main

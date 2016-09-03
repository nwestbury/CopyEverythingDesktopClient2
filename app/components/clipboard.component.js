import React from 'react';
import ClassNames from 'classnames';
import {clipPush, setClipPull} from '../actions/clipboard.action';
import {connect} from 'react-redux';
const  {clipboard} = window.require('electron');

export default class Clipboard extends React.Component {

    constructor(props) {
	super(props);

	this.dispatch = this.props.dispatch;
	this.dispatch(setClipPull(this.set_clipboard));
	this.update_clipboard();
    }

    cur_contents() {
	if (this.props.active_id >= 0){
	    return this.props.data[this.props.active_id].content;
	}else{
	    return '';
	}
    }

    set_clipboard(text) {
	clipboard.writeText(text);
    }

    update_clipboard() {
	var text = clipboard.readText();

	if(text !== this.cur_contents()){
	    this.dispatch(clipPush(text));
	}
	
	setTimeout(this.update_clipboard.bind(this), this.props.settings.poll_frequency);
    }

    render() {
	var content_decorator = (item) => {
	    var str = item.content;
	    if(str.length > 40){
		return str.substr(0, 40) + " […]"
	    }
	    return str
	};
	
	return (
	    <div className="panel panel-default">
		<div className="panel-heading">History</div>
   		<table className="table text-center">
		<thead>
		    <tr>
		        <th className="text-center">#</th>
		        <th className="text-center">Type</th>
		        <th className="text-center">Contents</th>
		    </tr>
		</thead>
		<tbody>
		{  this.props.data.map(function(item, index) {
		    return (<tr key={index}>
			    <td className="text-center">{index + 1}</td>
			    <td className="text-center">{item.type}</td>
			    <td className="text-center">{content_decorator(item)}</td>
			    </tr>);
		} ) }
	        </tbody>
	        </table>
	    </div>
	);
    }
}

const mapStateToProps = (state) => {
    return {
      active_id: state.clipboardReducer.active_id,
      data: state.clipboardReducer.data,
      settings: state.clipboardReducer.settings,
  }
}

Clipboard = connect(mapStateToProps)(Clipboard);

export default Clipboard;

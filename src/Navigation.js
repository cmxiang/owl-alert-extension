import React, { Component } from 'react';
import './Settings.css';

class Settings extends Component {
	/*constructor (props) {
		super();
	}*/

	goToSettings = () => {

	}

	// TODO: 
	// spoiler free mode?
	
	render() {
		return(
    		<div className="Settings">
    			<p>Filters: </p>
    			<button className="settings-button" onClick={this.goToSettings}>Settings</button>
    		</div>
    	)
    }
}


export default Carousel;
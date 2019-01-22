import React, { Component } from 'react';
import './Countdown.css';
import { getTimeDifference, getNextMatch } from './timefunctions.js';

class Countdown extends Component {
	constructor (props) {
		super();
		this.state = {
			currDate: new Date()
		}
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
		5000);
	}

	tick() {
		let temp_date = new Date();
		if (temp_date.getMinutes() != this.state.currDate.getMinutes()){
			this.setState({ currDate: temp_date });
		}
	}

	render() {
		let nextMatch = getNextMatch(this.props.matches, this.state.currDate);
		let diff = getTimeDifference(this.state.currDate - nextMatch.match.date);

		if (nextMatch.live == true) {
			return(
				<div className="Countdown">
					<h1>Time till next match...</h1>
					<p class="ticker">
						<a className="live" href="https://www.twitch.tv/overwatchleague">NOW LIVE</a>
					</p>
				</div>
			)
		}
		else {
			return(
	    		<div className="Countdown">
	    			<h1>Time till next match...</h1>
	    			<p class="ticker">
	    				<span className="days">{diff[0]} days </span>
	    				<span className="hours">{diff[1]} hours </span>
	    				<span className="minutes">{diff[2]} minutes </span>
	    			</p>
	    		</div>
	    	)
		}
    }
}

export default Countdown;
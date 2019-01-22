import React, { Component } from 'react';
import './Card.css';
import { getTimeDifference } from './timefunctions.js';
import { logos } from './logos.js';

class Card extends Component {
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
		let matches = this.props.matches;
		let curr_date = this.state.currDate;

		return(
    		<div className="Card">
    			<table className="schedule-table">

    				{
    					matches.map((match, i) => {
    						let diff = getTimeDifference(curr_date - match.date);
    						let getTime = () => {
    							if (diff[0] == 0 && diff[1] <= 1 && curr_date - match.date >= 1) {
    								return ["LIVE", ""];
    							}
    							else if (curr_date - match.date < 1) {
    								if (diff[0] >= 1){
    									return [diff[0], " days"];
    								}
    								else if (diff[1] >= 1) {
    									return [diff[1], " hours"];
    								}
    								else {
    									return [diff[2], " minutes"];
    								}
    							}
    							else {
    								return ["", ""];
    							}    							
    						};
    						let time = getTime();
				        	return (
				           		<tr className="schedule-row">
				           			<td className="schedule-row-el time">
				           				<div className="time-div">
				           					<span className="time-value">{time[0]}</span> 
				           					<span className="time-type">{time[1]}</span>
				           				</div>
				           			</td>				    
				           			<td className="schedule-row-el team-logo">
				           				<img className="team-logo-img" src={`./team_logos/${logos[match.team1]}`}/>
				           			</td>
				           			<td className="schedule-row-el team team1">{match.team1}</td> 
				           			<td className="schedule-row-el vs">VS</td>
				           			<td className="schedule-row-el team team2">{match.team2}</td> 
				           			<td className="schedule-row-el team-logo">
				           				<img className="team-logo-img" src={`./team_logos/${logos[match.team2]}`}/>
				           			</td>
				           		</tr>
				        	);
				    	})
					}
    			</table>
    		</div>
    	)
    }
}

export default Card;
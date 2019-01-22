import React, { Component } from 'react';
import Card from './Card.js';
import './Carousel.css';
import { getNextMatch } from './timefunctions.js';

class Carousel extends Component {
	constructor (props) {
		super();
		this.state = {
			currDate: new Date(),
			currWeek: 1,
			totalWeeks: 2
		}
	}

	componentDidMount() {
		let week = getNextMatch(this.props.matches, this.state.currDate).match.event;
		week = week.split(" ")[1];
		this.setState({ currWeek: week })
	}

	nextCard = () => {
		let this_week = this.state.currWeek;
		let total_weeks = this.state.totalWeeks;

		if (this_week+1 > total_weeks){
			this.setState({ currWeek: 1 });
		}
		else {
			this.setState({ currWeek: this_week+1 });
		}
	}

	prevCard = () => {
		let this_week = this.state.currWeek;
		let total_weeks = this.state.totalWeeks;

		if (this_week-1 <= 0){
			this.setState({ currWeek: total_weeks });
		}
		else {
			this.setState({ currWeek: this_week-1 });
		}
	}

	render() {
		return(
    		<div className="Carousel">
    			<div className="nav-header">
	    			<button className="nav-button" onClick={this.prevCard}>
	    				<img className="chevron" src="https://maxcdn.icons8.com/Android_L/PNG/512/Arrows/chevron_left-512.png" alt="<"/>
	    			</button>
	    			<p className="schedule-header">Week {this.state.currWeek}</p>
	    			<button className="nav-button" onClick={this.nextCard}>
	    				<img className="chevron" src="https://maxcdn.icons8.com/Android_L/PNG/512/Arrows/chevron_right-512.png" alt=">"/>
	    			</button>
	    		</div>
    			<Card matches={this.props.matches.filter( (match) => {
    				return match.event === "Week " + this.state.currWeek;
    			})}/>
    		</div>
    	)
    }
}


export default Carousel;
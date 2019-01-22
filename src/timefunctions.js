export const getTimeDifference = (millisecs) => {
	let diff = [0, 0, 0];
	let secs = parseInt(Math.abs(millisecs)/1000);
	
	let days = Math.floor(secs/86400);
	let rem = secs%86400;
	diff[0] = days;

	let hours = Math.floor(rem/3600);
	rem = rem%3600;
	diff[1] = hours;

	let mins = Math.floor(rem/60);
	diff[2] = mins;

	return diff;
}

export const getNextMatch = (matches, curr_date) => {
	let next_match;

	for (let i=0; i<matches.length; i++){
		// If current time is before match time, 
		// and next_match is undefined
		// or the difference is less than next_match, overwrite next_match
		if (curr_date - matches[i].date < 0){
			if (next_match === undefined) {
				next_match = matches[i];
			}
			else if (Math.abs(curr_date - matches[i].date) < Math.abs(curr_date - next_match.date)){
				next_match = matches[i];
			}
		} 
		// If current time is after match time, but within two hours, then LIVE
		if (curr_date - matches[i].date >= 0 && 
			curr_date.getMonth() == matches[i].date.getMonth() &&
			curr_date.getDate() == matches[i].date.getDate() &&
			curr_date.getHours() - matches[i].date.getHours() <= 2){
			return {
				match: matches[i],
				live: true
			};
		}
	}

	return {
		match: next_match,
		live: false
	};
}
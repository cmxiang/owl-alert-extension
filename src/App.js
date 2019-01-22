import React, { Component } from 'react';
import './App.css';
import Countdown from './Countdown';
import Carousel from './Carousel';
import Navigation from './Navigation';
import { matches } from './matches.js';

class App extends Component {
  constructor (props) {
    super();
    this.state = {
      ticker: true;
    }
  }

  goToSettings = () => {
    this.setState({ ticker: false });
  }

  render() {
    if (this.state.ticker == true) {
      return (
        <div className="App">
          <Countdown matches={matches}/>
          <Carousel matches={matches}/>
          <div className="filter-nav">
            <p>Filters: </p>
            <button className="settings-button" onClick={this.goToSettings}>Settings</button>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="App">
          <Navigation />
        </div>
      );
    }
    
  }
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/counter.js';
import Button from './components/button.js';
import Time from './utilities/time.js';
import { DURATION_IN_MINUTES } from './constants.js';

class PomoPomoDoroArea extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      countdown: 'initial',
      buttonText: 'Start'
    }

    this.startCountdown = this.startCountdown.bind(this);
    this.finishCountdown = this.finishCountdown.bind(this);
  }

  startCountdown() {
    this.setState({
      buttonDisabled: true,
      buttonText: 'Started',
      countdown: 'active',
      endTime: Time.minutesFromNow(DURATION_IN_MINUTES)
    });
  }

  finishCountdown() {
    this.setState({
      buttonDisabled: false,
      buttonText: 'Restart',
      countdown: 'finished',
      endTime: null
    })
  }

  render() {
    return (
      <div id="wrapper">
        <div id="counter">
          <Counter finishCountdown={this.finishCountdown} endTime={this.state.endTime} countdown={this.state.countdown} />
        </div>
        <div id="button">
          <Button className="button" startCountdown={this.startCountdown} text={this.state.buttonText} disabled={this.state.buttonDisabled} countdown={this.state.countdown}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <PomoPomoDoroArea />
  </div>,
  document.getElementById('main')
);

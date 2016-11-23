import React from 'react';
import Time from '../utilities/time.js';
import Clock from '../utilities/clock.js';
import Notifications from '../services/notifications.js';

export default class Counter extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.countdown == 'active' && (this.timer == null)) {
      this.startCountdown();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  tick() {
    this.setState({
      remaining: Time.getTimeRemaining(this.props.endTime)
    });
  }

  startCountdown() {
    this.tick();
    this.timer = setInterval(() => {
      const remaining = Time.getTimeRemaining(this.props.endTime);
      const total = Time.objectify(remaining).total;

      if (total > 0) {
        this.tick();
      } else {
        clearInterval(this.timer);
        this.props.finishCountdown();
        this.notifyUser();
        this.timer = null;
        this.setState({remaining: 0});
      }
    }, 1000);
  }

  notifyUser() {
    Notifications.trigger();
  }

  printMinutes() {
    if (this.props.countdown == 'active' && this.state) {
      return Clock.printMinutes(this.state.remaining);
    } else {
      return Clock.printInitialMinutes();
    }
  }

  printSeconds() {
    if (this.props.countdown == 'active' && this.state) {
      return Clock.printSeconds(this.state.remaining);
    } else {
      return Clock.printInitialSeconds();
    }
  }

  render() {
    return (
      <div>
        <div id="clockdiv">
          <div>
            <span className="minutes">{this.printMinutes()}</span>
          </div>
          <div>:</div>
          <div>
            <span className="seconds">{this.printSeconds()}</span>
          </div>
        </div>
      </div>
    );
  }
}

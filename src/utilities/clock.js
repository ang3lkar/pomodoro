import Time from './time.js';
import { DURATION_IN_MINUTES } from '../constants.js';

export default class Clock {

  static printInitialMinutes() {
    const minutes = DURATION_IN_MINUTES.toString();
    if (minutes.length == 1) {
      return '0' + minutes;
    } else {
      return minutes;
    }
  }

  static printMinutes(timeRemaining) {
    return this.printValue('minutes', timeRemaining)
  }

  static printInitialSeconds() {
    return '00';
  }

  static printSeconds(timeRemaining) {
    return this.printValue('seconds', timeRemaining)
  }

  static printValue(attr, timeRemaining) {
    const num = Time.objectify(timeRemaining)[attr];
    const length = num.toString().length;

    if(length == 1) {
      return '0' + num;
    } else {
      return num;
    }
  }
}

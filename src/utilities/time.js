export default class Time {

  static minutesFromNow(minutes = 25) {
    const time_in_millis = minutes * 60 * 1000;
    const currentDate = new Date();
    return new Date(currentDate.getTime() + time_in_millis);
  }

  static parseTimeRemaining(endTime) {
    const timeRemaining = this.getTimeRemaining(endTime);
    return this.parse(timeRemaining);
  }

  static getTimeRemaining(endTime) {
    return Date.parse(endTime) - Date.parse(new Date());
  }

  static objectify(time) {
    const seconds = Math.floor( (time/1000) % 60 );
    const minutes = Math.floor( (time/1000/60) % 60 );

    return {
      'total': time,
      'minutes': minutes,
      'seconds': seconds
    };
  }

}

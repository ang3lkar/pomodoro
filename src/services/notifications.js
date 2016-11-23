export default class Notifications {

  static trigger() {
    if (!Notification) {
      return;
    }

    if (Notification.permission !== "granted")
      Notification.requestPermission();
    else {
      const ding = new Audio('assets/audio/ding.mp3');
      ding.play();

      const notification = new Notification('Session Complete', {
        icon: 'assets/images/tomato.png',
        body: "You’ve spent an entire, interruption-less Pomopomodoro!",
        vibrate: [200]
      });
    }
  }
}

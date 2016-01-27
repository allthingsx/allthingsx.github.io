// FINAL COUNTDOWN
var doomsday = 'February 26 2016 00:00:00 GMT-06:00';

function countdownToDoomsday(doomsday) {
  var totalTime = Date.parse(doomsday) - Date.parse(new Date());
  var seconds = Math.floor( (totalTime/1000) % 60 );
  var minutes = Math.floor( (totalTime/1000/60) % 60 );
  var hours = Math.floor( (totalTime/(1000*60*60)) % 24 );
  var days = Math.floor( totalTime/(1000*60*60*24) );

  return {
    'total': totalTime,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeDoomsday(id, doomsday) {
  var clock = document.getElementById(id);
  var timeInterval = setInterval(function() {
    var t = countdownToDoomsday(doomsday);
    clock.innerHTML =
    '<ul class="time">' +
      '<li class="days">' + t.days +
      '<li class="hours">' + t.hours +
      '<li class="minutes">' + t.minutes +
      '<li class="seconds">' + t.seconds + '</ul>';
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

initializeDoomsday('clock', doomsday);

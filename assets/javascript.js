const currentTime = moment();
const displayTime = document.querySelector('#currentDay');

// display current time in string:

displayTime.textContent = currentTime.format('dddd, MMMM DD, YYYY - hh:mm a');


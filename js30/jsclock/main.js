const secondHand = document.querySelector('.second-hand');

const minuteHand = document.querySelector('.min-hand');

const hourHand = document.querySelector('.hour-hand');

// setInterval(setDate, 1000);
setInterval(setDate,1000);

function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) *360) + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) *360) + 90;

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) *360) + 90;

  const ampm = hours >= 12 ? 'pm' : 'am';
  let tweleveHourFormat = hours % 12;
  tweleveHourFormat = tweleveHourFormat ? tweleveHourFormat : 12;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  document.getElementById('hour').innerText = `${tweleveHourFormat}:`;
  document.getElementById('min').innerText = `${minutes}:`;
  document.getElementById('second').innerText = `${seconds}`;

  document.getElementById('format').innerText = `${ampm}`;
}


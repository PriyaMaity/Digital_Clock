function updateBackground() {
  const hours = new Date().getHours();
  const background = document.getElementById('background');

  if (hours >= 18 && hours < 21) {
    background.style.background = 'url(./Images/evening1.jpg) no-repeat center center/cover';
} else if (hours >= 6 && hours < 12) {
    background.style.background = 'url(./Images/sunrise1.jpg) no-repeat center center/cover';
} else if (hours >= 12 && hours < 18) {
    background.style.background = 'url(./Images/afternoon.jpg) no-repeat center center/cover';
} else {
  background.style.background = 'url(./Images/night.jpg) no-repeat center center/cover';
}
}

function updateClock() {
  const timezone = document.getElementById('timezone').value;
  const now = timezone === 'local' ? new Date() : new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById('hours').textContent = String(hours % 12 || 12).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  document.getElementById('ampm').textContent = hours >= 12 ? 'PM' : 'AM';

  updateGreeting(hours);
}

function updateGreeting(hours) {
  const greeting = document.getElementById('greeting');

  if (hours >= 6 && hours < 12) {
      greeting.textContent = 'Good Morning!';
  } else if (hours >= 12 && hours < 18) {
      greeting.textContent = 'Good Afternoon!';
  } else if (hours >= 18 && hours < 21) {
      greeting.textContent = 'Good Evening!';
  } else {
      greeting.textContent = 'Good Night!';
  }
}
const countdownBtn = document.getElementById("countdownBtn");
const countdownElement = document.getElementById("countdown");

let countdownTimer;
countdownBtn.addEventListener("click", () => {
  const targetTime = prompt("Enter countdown target (in seconds):");
  if (isNaN(targetTime) || targetTime <= 0) {
    alert("Invalid input. Please enter a positive number.");
    return;
  }

  let remainingTime = parseInt(targetTime);
  clearInterval(countdownTimer);

  countdownTimer = setInterval(() => {
    countdownElement.textContent = `Countdown: ${remainingTime--} seconds`;
    if (remainingTime < 0) {
      clearInterval(countdownTimer);
      countdownElement.textContent = "Time's up!";
    }
  }, 1000);
});

// Random time facts
const timeFacts = [
  '"Time is what we want most, but what we use worst." - William Penn',
  'A year on Venus is shorter than a day on Venus.',
  'The earliest mechanical clocks appeared in the 14th century.',
  'There are 31,556,952 seconds in a year.',
  'The shortest war in history lasted 38 minutes.'
];
function showRandomFact() {
  const fact = timeFacts[Math.floor(Math.random() * timeFacts.length)];
  document.getElementById('fact').textContent = fact;
}
document.getElementById('show-fact').addEventListener('click', showRandomFact);

updateBackground();
setInterval(updateClock, 1000);
fetchWeather();
showRandomFact();
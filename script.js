const square = document.querySelector('#square');
const taps = document.querySelector('.taps');
const start = document.querySelector('#start');
const timer = document.querySelector('#timer');
let time = 10;
let number = 0;

function handleTap(e) {
  if (!square.hasAttribute('disabled')) {
    number = number + 1;
    taps.innerText = number;
  }
}

let startTimer;

function handleStart() {
  if (!startTimer) {
    square.removeAttribute('disabled');
    startTimer = setInterval(() => {
      time = time -1;
      timer.innerText = time;
    }, 1000);
  }

  setTimeout(() => {
    square.setAttribute('disabled', true);
    clearInterval(startTimer);
    time = 10;
    number = 0;
  }, 11000);
}

square.addEventListener('click', handleTap);
start.addEventListener('click', handleStart);

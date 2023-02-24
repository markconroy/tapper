const tapper = document.querySelector("#tapper");
const score = document.querySelector("#score");
const start = document.querySelector("#start");
const timer = document.querySelector("#timer");
let time = 10;
let number = 0;

let startTimer;
function handleTap(e) {
  if (!tapper.hasAttribute("disabled")) {
    number = number + 1;
    score.innerText = number;
  }
}


function handleStart() {
  time = 10;
  number = 0;
  timer.innerText = time;
  timer.setAttribute('data-time-left', 'lots');
  tapper.removeAttribute("disabled");
  start.setAttribute('disabled', true);
  startTimer = setInterval(() => {
    time = time - 1;
    timer.innerText = time;
    if (time > 6 ) {
      timer.setAttribute('data-time-left', 'lots');
    } else if (time > 3) {
      timer.setAttribute('data-time-left', 'some');
    } else {
      timer.setAttribute('data-time-left', 'little');
    }
  }, 1000);

  setTimeout(() => {
    tapper.setAttribute("disabled", true);
    start.removeAttribute("disabled");
    clearInterval(startTimer);
    time = 10;
    number = 0;
  }, 11000);
}

tapper.addEventListener("click", handleTap);
start.addEventListener("click", handleStart);

import Sounds from "./sounds.js";

export default function Timer() {
  const elementMinutes = document.querySelector(".minutes");
  const elementSeconds = document.querySelector(".seconds");

  let minutes = Number(elementMinutes.textContent);
  let seconds = Number(elementSeconds.textContent);

  let timer;

  function play() {
    timer = setInterval(() => {
      countDown();
      updateView();
    }, 1000);
  }

  function pause() {
    clearInterval(timer);
  }

  function stop() {
    pause();
    minutes = 25;
    seconds = 0;
    updateView();
  }

  function increment() {
    minutes += 5;
    updateView();
  }

  function decrement() {
    if (minutes - 5 > 0) {
      minutes -= 5;
      updateView();
    }
  }

  function countDown() {
    if (minutes == 0 && seconds == 0) {
      pause();
      Sounds().playKichenTimer();
    } else {
      if (seconds > 0) {
        seconds--;
      } else {
        minutes--;
        seconds = 59;
      }
    }
  }

  function updateView() {
    elementMinutes.textContent = String(minutes).padStart(2, "0");
    elementSeconds.textContent = String(seconds).padStart(2, "0");
  }

  return {
    play,
    pause,
    stop,
    increment,
    decrement,
  };
}

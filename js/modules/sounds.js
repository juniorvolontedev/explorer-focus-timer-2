export default function Sounds() {
  const btnPlayFlorest = document.querySelector(".btn-play-florest");
  const btnPlayRain = document.querySelector(".btn-play-rain");
  const btnPlayCoffee = document.querySelector(".btn-play-coffee");
  const btnPlayFireplace = document.querySelector(".btn-play-fireplace");

  const soundFlorest = new Audio("../../sounds/florest.wav");
  const soundRain = new Audio("../../sounds/rain.wav");
  const soundCoffee = new Audio("../../sounds/coffee.wav");
  const soundFireplace = new Audio("../../sounds/fireplace.wav");
  const soundKichenTimer = new Audio("../../sounds/kichen-timer.mp3");

  soundFlorest.loop = true;
  soundRain.loop = true;
  soundCoffee.loop = true;
  soundFireplace.loop = true;

  function playKichenTimer() {
    soundKichenTimer.play();
  }

  function playFlorest() {
    btnPlayFlorest.classList.toggle("active");

    if (btnPlayFlorest.classList.contains("active")) {
      soundFlorest.play();
    } else {
      soundFlorest.pause();
    }
  }

  function playRain() {
    btnPlayRain.classList.toggle("active");

    if (btnPlayRain.classList.contains("active")) {
      soundRain.play();
    } else {
      soundRain.pause();
    }
  }

  function playCoffee() {
    btnPlayCoffee.classList.toggle("active");

    if (btnPlayCoffee.classList.contains("active")) {
      soundCoffee.play();
    } else {
      soundCoffee.pause();
    }
  }

  function playFireplace() {
    btnPlayFireplace.classList.toggle("active");

    if (btnPlayFireplace.classList.contains("active")) {
      soundFireplace.play();
    } else {
      soundFireplace.pause();
    }
  }

  btnPlayFlorest.addEventListener("click", playFlorest);
  btnPlayRain.addEventListener("click", playRain);
  btnPlayCoffee.addEventListener("click", playCoffee);
  btnPlayFireplace.addEventListener("click", playFireplace);

  return {
    playKichenTimer,
  };
}

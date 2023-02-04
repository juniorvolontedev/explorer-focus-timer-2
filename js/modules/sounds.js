export default function Sounds() {
  const btnPlayFlorest = document.querySelector(".btn-play-florest");
  const btnPlayRain = document.querySelector(".btn-play-rain");
  const btnPlayCoffee = document.querySelector(".btn-play-coffee");
  const btnPlayFireplace = document.querySelector(".btn-play-fireplace");

  const volumeFlorest = document.querySelector(".volume-florest");
  const volumeRain = document.querySelector(".volume-rain");
  const volumeCoffee = document.querySelector(".volume-coffee");
  const volumeFireplace = document.querySelector(".volume-fireplace");

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

  btnPlayFlorest.querySelector("svg").addEventListener("click", playFlorest);
  btnPlayRain.querySelector("svg").addEventListener("click", playRain);
  btnPlayCoffee.querySelector("svg").addEventListener("click", playCoffee);
  btnPlayFireplace
    .querySelector("svg")
    .addEventListener("click", playFireplace);

  volumeFlorest.addEventListener("change", () => {
    soundFlorest.volume = Number(volumeFlorest.value) / 10;
  });

  volumeRain.addEventListener("change", () => {
    soundRain.volume = Number(volumeRain.value) / 10;
  });

  volumeCoffee.addEventListener("change", () => {
    soundCoffee.volume = Number(volumeCoffee.value) / 10;
  });

  volumeFireplace.addEventListener("change", () => {
    soundFireplace.volume = Number(volumeFireplace.value) / 10;
  });

  return {
    playKichenTimer,
  };
}

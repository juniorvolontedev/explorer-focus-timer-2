export default function Controls({ Timer }) {
  const btnPlay = document.querySelector(".btn-play");
  const btnStop = document.querySelector(".btn-stop");
  const btnIncrement = document.querySelector(".btn-increment");
  const btnDecrement = document.querySelector(".btn-decrement");
  const timer = Timer();

  btnPlay.addEventListener("click", timer.play);
  btnStop.addEventListener("click", timer.stop);
  btnIncrement.addEventListener("click", timer.increment);
  btnDecrement.addEventListener("click", timer.decrement);
}

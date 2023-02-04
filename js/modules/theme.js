export default function Theme() {
  const body = document.querySelector("body");
  const btnLightMode = document.querySelector(".btn-light-mode");
  const btnDarkMode = document.querySelector(".btn-dark-mode");

  btnLightMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    btnLightMode.classList.toggle("hide");
    btnDarkMode.classList.toggle("hide");
  });

  btnDarkMode.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    btnLightMode.classList.toggle("hide");
    btnDarkMode.classList.toggle("hide");
  });
}

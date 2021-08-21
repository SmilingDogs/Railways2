const burger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  burger.classList.remove("active");
});

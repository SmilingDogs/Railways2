const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const lines = document.querySelectorAll(".burger__line");

window.addEventListener("click", dropMenu);

function dropMenu(e) {
  menu.classList.toggle("active");
  

  for (let el of lines) {
    el.classList.toggle("active");
  }

}

menu.addEventListener('click', (e)=> {
    e.stopPropagation()
})

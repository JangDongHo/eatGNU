const menubtn = document.querySelector(".top-bars__menu");
const menubar = document.querySelector(".menu-bars__container");
const menuclosebtn = document.querySelector(".menu-bars__btn__close");

function openMenu() {
  document.body.style.overflow = "hidden";
  menubar.classList.toggle("invisible")
  menuclosebtn.addEventListener("click", closeMenu);
}

function closeMenu() {
  document.body.style.overflow = "visible";
  menubar.classList.toggle("invisible")
}

menubtn.addEventListener("click", openMenu);
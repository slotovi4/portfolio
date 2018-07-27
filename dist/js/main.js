/* Select DOM items */
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menuBtnLine = document.querySelectorAll(".menu-btn__line");
const navItems = document.querySelectorAll(".menu-nav__item");

/* Set Initial State Of Menu */
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("menu_show");
    menuNav.classList.add("menu-nav_show");
    menuBranding.classList.add("menu-branding_show");

    menuBtn.classList.add("menu-btn_close");

    menuBtnLine.forEach(item => item.classList.add("menu-btn__line_close"));
    navItems.forEach(item => item.classList.add("menu-nav__item_show"));

    /* Set Menu State */
    showMenu = true;
  } else {
    menu.classList.remove("menu_show");
    menuNav.classList.remove("menu-nav_show");
    menuBranding.classList.remove("menu-branding_show");

    menuBtn.classList.remove("menu-btn_close");

    menuBtnLine.forEach(item => item.classList.remove("menu-btn__line_close"));
    navItems.forEach(item => item.classList.remove("menu-nav__item_show"));

    /* Set Menu State */
    showMenu = false;
  }
}

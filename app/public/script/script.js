// MENU: PERFIL - DESKTOP
let infoProfile = document.getElementById("info-profile");
let menuProfile = document.getElementById("menu-profile");

infoProfile.addEventListener("click", function(){
  if (menuProfile.style.visibility === "hidden") {
    menuProfile.style.visibility = "visible";
  } else {
    menuProfile.style.visibility = "hidden";
  }
});

// MENU - MOBILE
function openMenu () {
  let menu = document.getElementById('nav-menu');
  console.log(menu)
  menu.style.display = 'block';
}

function closeMenu () {
  let width = window.innerWidth;
  let menu = document.getElementById('nav-menu');

  if (width <= 769) {
    menu.style.display = 'none';
  }
}

function verification () {
  let width = window.innerWidth;
  let menu = document.getElementById('nav-menu');
  let iconeBars = document.getElementById('cn-menu-bars');
  let iconeClose= document.getElementById('cn-menu-close');

  if (width <= 769) {
    menu.style.display = 'none';
    iconeBars.style.display = 'block';
    iconeClose.style.display = 'block';
  } else {
    menu.style.display = 'block';
    iconeBars.style.display = 'none';
    iconeClose.style.display = 'none';
  }
}

window.addEventListener('load', verification);
window.addEventListener('resize', verification);

let iconeBars = document.getElementById ('cn-menu-bars');
let iconeClose = document.getElementById ('cn-menu-close');

iconeBars.addEventListener ('click', openMenu);
iconeClose.addEventListener ('click', closeMenu);

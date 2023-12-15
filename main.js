function redirectLogin() {
    window.location.href = "/login.html";
}

let navbarDesktop = document.querySelectorAll("#navbar-desktop");
let navBarMovil = document.querySelectorAll("#navBarMovil");
let headerMovil = document.querySelectorAll("#headerMovil");

function atualizarEstilo() {
    let anchoPantalla = window.innerWidth;

    if (anchoPantalla < 530) {
        navbarDesktop.style.display = "none";
        headerMovil.style.opacity = "100%";
    } else {
        navbarDesktop.style.display = "block";
        navBarMovil.style.left = "-250px";
        headerMovil.style.opacity = "0%";
    }
}

atualizarEstilo();

window.addEventListener("resize", actualizarEstilo);

document.addEventListener("DOMContentLoaded", function () {
  var navBarMovil = document.querySelector("#navBarMovil");
  var iconHamburger = document.querySelector(".nav-bar-movil img");

  iconHamburger.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleNavBar();
  });

  document.addEventListener("click", function () {
      navBarMovil.classList.remove("show-nav");
  });
});

function toggleNavBar() {
  var navBarMovil = document.getElementById("navBarMovil");
  navBarMovil.classList.toggle("show-nav");
}

function removeNavBar() {
  var navBarMovil = document.getElementById("navBarMovil");
  navBarMovil.classList.remove("show-nav");
}

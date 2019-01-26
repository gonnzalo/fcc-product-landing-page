const navbar = document.getElementById("header");
const links = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const navBarToggle = document.getElementById("js-navbar-toggle");
const navDrop = document.getElementById("nav-drop");
const mediaquery = window.matchMedia("(min-width: 750px)");

function navColor() {
  const topSection = window.scrollY + 55;
  sections.forEach((section, i) => {
    if (i < 2) {
      if (
        topSection > section.offsetTop &&
        topSection < sections[i + 1].offsetTop
      ) {
        links[i].classList.add("active");
      } else {
        links[i].classList.remove("active");
      }
    } else if (topSection >= sections[2].offsetTop) {
      links[2].classList.add("active");
    } else {
      links[i].classList.remove("active");
    }
  });

  if (mediaquery.matches) {
    if (window.scrollY < 10) {
      navbar.style.backgroundColor = "rgba(24, 27, 33, 0.1)";
    } else {
      navbar.style.backgroundColor = "rgba(24, 27, 33, 0.95)";
    }
  }
}

window.addEventListener("scroll", navColor);
navBarToggle.addEventListener("click", () => {
  navDrop.classList.toggle("nav-drop-active");
  navBarToggle.classList.toggle("open");
});

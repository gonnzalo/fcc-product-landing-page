const navbar = document.getElementById('header');
const links = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');
const navBarToggle = document.getElementById('js-navbar-toggle');
const navDrop = document.getElementById('nav-drop');
const mediaquery = window.matchMedia( "(min-width: 750px)" );

function navColor() {
    let topSection = window.scrollY + 55;
    sections.forEach((section, i) => {
        if (i < 2) {
            if(topSection > section.offsetTop && topSection < sections[i+1].offsetTop) {
                links[i].classList.add('active');
            } else {
                links[i].classList.remove('active');
            }
        } else if (topSection>= sections[2].offsetTop) {     
            links[2].classList.add('active');
         } else {
            links[i].classList.remove('active');
         }  
    });

    if (mediaquery.matches) {
        if (window.scrollY < 10) {
            navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        } else {navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';}
    }
   
};

window.addEventListener('scroll', navColor);
navBarToggle.addEventListener('click', function () {
    navDrop.classList.toggle('nav-drop-active');
    navBarToggle.classList.toggle('open');
  });

// function linkColor(e) { 
//     if (mediaquery.matches) {
//     let active = e.target;
//     for (key of links) {
//         if(key !== e.target) {
//             key.classList.remove('active');
//             navbar.style.backgroundColor = 'rgba(22, 2, 22, 0.8)';
//         } 
//     }
//     active.classList.add('active');
//     }
// }

// links.forEach(link => link.addEventListener('click', linkColor));

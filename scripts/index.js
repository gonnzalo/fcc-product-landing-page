const navbar = document.getElementById('header');

function navColor() {
    if (this.scrollY < 10) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    } else {navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';}
    
};

window.addEventListener('scroll', navColor);
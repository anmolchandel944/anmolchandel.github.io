 // NAVIGATION BAR FUNCTION 
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    menuBtn.classList.toggle("responsive");
}


// ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING
window.onscroll = function() { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (window.scrollY > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}



// typing effect
var typingEffect = new Typed(".typedText", {
    strings: ["Developer"," Novelist", "Designer",  "Photographer", "Script Writer", "Creative Editor"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});




// SCROLL REVEAL ANIMATION 
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});




// HOME
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.featured-image', { delay: 300 });















// CHANGE ACTIVE LINK 
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY; 

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.add('active-link');
        } else {
            document
                .querySelector('.nav-menu a[href*=' + sectionId + ']')
                .classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive); 






// Show / Hide on Scroll + Smooth Scroll
const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.classList.add("show-top");
    } else {
        topBtn.classList.remove("show-top");
    }
});

topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




// download CV 
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'cv.pdf'; // PDF file ka path
    link.download = 'My_CV.pdf'; // Download hone par file ka naam
    link.click();
}



/*== scroll section link ======*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top>= offset && top <offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');

            });
        };
        
    });
    /*== scroll section link ======*/

    let header = document.querySelector('header');

    header.classList.toogle('sticky', window.scrollY > 100);
};


/*== toogle icon navbar ======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector ('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
};


/*== scroll animation ======*/
const sr = ScrollReveal ({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true 
})

sr.reveal('.home-content',{delay:200, origin:'right'});
sr.reveal('.home-img', {delay:500, origin:'bottom'});

sr.reveal('.about-img', {delay:200, origin:'top'});
sr.reveal('.about-content', {delay:500, origin:'right'});

sr.reveal('.input-box', {delay:200, origin:'top'});

sr.reveal('.portfolio-container', {delay:500, origin:'bottom'});


/*==================================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings: ['STUDENT', 'PROGRAMMER', 'GRAPHIC DESIGNER', 'GRAPHIC ARTIST'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
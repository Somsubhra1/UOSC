let navbtn = document.querySelector('.nav-btn'),
    navbtnclose = document.querySelector('.nav-btn-close');
    navbar = document.querySelector('.nav-bar');
    
navbtn.addEventListener("click", menuTrigger);
navbtnclose.addEventListener("click", menuTrigger);

function menuTrigger(){

    navbar.classList.toggle('open');
    navbar.classList.toggle('close');

    navbtn.classList.toggle('nbtn-vis');
    navbtn.classList.toggle('nbtn-hid');

    navbtnclose.classList.toggle('closebtn-vis');
    navbtnclose.classList.toggle('closebtn-hid');
}









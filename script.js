const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;

const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.navbar-link')
const progress = document.querySelector('.progress-bars-wrapper')
const progressBarPercents = [97, 89, 85, 87, 80, 70, 50];

window.addEventListener('scroll', () => {
  mainFn();
})

const mainFn = () => {
  //Checking if the page has been scrolled to or below the navbar or not, if yes then add the fixed positioning to it and remove it if scrolled above the initial posittion of navbar
  if (window.pageYOffset >= navbarOffsetTop) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky')
  }
  //here we are giving white color and border by adding change class to the section in whichever we are currently 
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      //also first removing the change class from all sections and then adding to the one in which we are currently so that all are not colored white
      navbarLinks.forEach(navbarLink => {
        navbarLink.classList.remove('change');
      })
      navbarLinks[i].classList.add('change')
    }
  });
  //displaying percents as we scroll to the about section.
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll('.progress-percent').forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`; //adding width to the bar
      el.previousElementSibling.firstElementChild.textContent = progressBarPercents[i]; //inserting the precentage stuff dynamically using js
    })
  }
}

mainFn();

//this for the page to reload when the window is resized
window.addEventListener('resize', () => {
  window.location.reload();
})
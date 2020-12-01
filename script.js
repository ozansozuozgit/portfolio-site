const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const navSlide = () => {
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    anime({
      targets: navLinks,
      translateX: [100, 0], // from to
      opacity: 1,
      scaleY: [0, 1],
      easing: 'easeOutExpo',
      delay: anime.stagger(300),
    });
    burger.classList.toggle('toggle');
  });
};

navSlide();

gsap.registerPlugin(ScrollTrigger);

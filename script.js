gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    if (nav.classList.contains('nav-active')) {
      tl.fromTo(
        navLinks,
        {
          opacity: 0,
          x: 100,
        },
        {
          duration: 1,
          delay: 0.5,
          stagger: 0.2,
          opacity: 1,
          x: 0,
          ease: 'elastic.out(1, 0.3)',
        },
        '-0.35'
      );
    } else {
      tl.clear();
    }

    burger.classList.toggle('toggle');
  });
};

navSlide();

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('callback - particles.js config loaded');
});

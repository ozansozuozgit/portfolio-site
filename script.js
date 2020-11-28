gsap.registerPlugin(ScrollTrigger);
let tl = gsap.timeline();

tl.from('.small-circles', {
  stagger: 0.1,
  opacity: 0,
  ease: Power4.easeOut,
  duration: 1,
});

tl.to(
  '.small-circles',
  {
    opacity: 0,
    display: 'none',
    duration: 0.2,
  },
  '+=0'
);

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
const profilePic = document.querySelector('.landing img');
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var myTimeline = anime.timeline();

myTimeline.add({
  targets: '.landing-text-contact',
  translateY: ['-100%', 0],
  opacity: [0, 1],
  translateZ: 0,
  duration: 750,
  delay: 750,
});
myTimeline.add({
  targets: '.ml6 .letter',
  translateY: ['1.1em', 0],
  translateZ: 0,
  duration: 750,
  delay: (el, i) => 50 * i,
});
myTimeline.add(
  {
    targets: [
      '.letter:nth-child(4)',
      '.letter:nth-child(5)',
      '.letter:nth-child(6)',
      '.letter:nth-child(7)',
    ],

    translateY: ['2.1em', 0],
    duration: 1000,
    color: '#d71e5b',
  },
  '+=300'
);
myTimeline.add(
  {
    targets: '.border-animate',
    opacity: [0, 1],
    scale: [0.2, 1],
    duration: 1500,
  },
  '-=1000'
);

myTimeline
  .add(
    {
      targets: '.ml5 .ampersand',
      opacity: [0, 1],
      scaleY: [0.5, 1],
      easing: 'easeOutExpo',
      duration: 600,
    },
    '-=1000'
  )
  .add(
    {
      targets: '.ml5 .letters-left',
      opacity: [0, 1],
      translateX: ['0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
    },
    '-=1000'
  )
  .add(
    {
      targets: '.ml5 .letters-right',
      opacity: [0, 1],
      translateX: ['-0.5em', 0],
      easing: 'easeOutExpo',
      duration: 600,
    },
    '-=500'
  );
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  start: 'top -80',
  end: 99999,
  toggleClass: {
    className: 'main-nav-bar--scrolled',
    targets: '.main-nav-bar',
  },
});
gsap.from('#about', {
  scrollTrigger: '#about img', // same as scrollTrigger: {trigger: ".line-1", toggleActions: "play none none none", start: "top bottom", end: "bottom top"}
  xPercent: -100,
  duration: 1,
  opacity: 0,
  // transformOrigin: 'left center',
  ease: 'power4.in',
});
// gsap.from('#about-nav', {
//   scrollTrigger: '#about img',
//   color: '#424',
//   duration: 2,
// });
// gsap.from('#about-nav', {
//   scrollTrigger: {
//     trigger: '#about',
//     // scrub: true,
//     toggleActions: 'play none none reverse',
//     start: 'bottom top', // [trigger] [scroller] positions
//     end: 'bottom top', // [trigger] [scroller] positions
//     toggleClass: 'active',
//     onEnter: () => console.log('enter'),

//     onLeave: () => console.log('left'),
//     // start: 'top top',
//     // end: 'bottom bottom',
//   },
//   // scaleX: 0,
//   // transformOrigin: 'left center',
//   // ease: 'none',
//   color: '#424',
// });
// // ScrollTrigger.batch(".box", {
// //   onEnter: (elements, triggers) => {
// //     gsap.to(elements, {opacity: 1, stagger: 0.15});
// //     console.log(elements.length, "elements entered");
// //   },
// //   onLeave: (elements, triggers) => {
// //     gsap.to(elements, {opacity: 0, stagger: 0.15});
// //     console.log(elements.length, "elements left");
// //   }
// // });
const navLinksTest = document.querySelectorAll('.nav-links li a');

navLinksTest.forEach((link) => {
  let id = link.getAttribute('href');
  // let section = document.querySelector(id);

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: id,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
      onEnter: () => console.log(id),
    },
  });
  tl.fromTo(id),
    {
      color: '#fff',
    },
    {
      color: '#524',
    };
});

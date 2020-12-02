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
    color: '#ff8c05',
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

gsap.from('.about-background', {
  scrollTrigger: {
    trigger: '.about-text',
    start: 'top center',
    end: 'center bottom',
    scrub: 2,
  },
  xPercent: 200,
  opacity: 0,
});

// Add fade out for each section and highlight current nav in navbar
document.querySelectorAll('.nav-link').forEach((link) => {
  const sectionTrigger = link.getAttribute('href').split('-')[0];

  gsap.to(sectionTrigger, {
    scrollTrigger: {
      trigger: sectionTrigger,
      start: 'top 20%',
      end: 'bottom 20%',
      scrub: 0.5,
      // pin: true,
      onEnter: () => {
        link.classList.add('active');
      },
      onEnterBack: () => {
        link.classList.add('active');
      },
      onLeave: () => {
        link.classList.remove('active');
      },
      onLeaveBack: () => {
        link.classList.remove('active');
      },
    },
    opacity: 0,
    duration: 1,
    // transformOrigin: 'left center',
    ease: 'power4.in',
  });
});

const reveal = gsap.utils.toArray('.reveal');
reveal.forEach((text, i) => {
  ScrollTrigger.create({
    trigger: text,
    toggleClass: 'active',
    start: 'top 80%',
    end: 'top 20%',
  });
});

const images = gsap.utils.toArray('.project-info');
images.forEach((image, i) => {
  ScrollTrigger.create({
    trigger: image,
    toggleClass: 'project-active',
    start: 'top 80%',
    end: 'top 20%',
  });
});
const projects = gsap.utils.toArray('.project-container');

const projectBackgrounds = gsap.utils.toArray('.project-background');
console.log(projects);
projectBackgrounds.forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: projects[i],
      start: 'top 100%',
      end: 'bottom 50%',
      // markers: true,
      scrub: 2,
    },
    xPercent: 200,
    opacity: 0,
  });
});

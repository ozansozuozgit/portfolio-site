const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const navSlide = () => {
  // Toggle Nav
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    gsap.fromTo(
      navLinks,
      {
        xPercent: 200,
        opacity: 0,
      },
      { stagger: 0, opacity: 1, duration: 0.9, xPercent: 0 }
    );
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
let tl = gsap.timeline();

tl.fromTo(
  '.landing-text-contact',
  { yPercent: -120 },
  { yPercent: 0, duration: 0.4, delay: 0.4 }
);
tl.fromTo(
  '.ml6 .letter',
  { y: '1.1em' },
  { y: 0, stagger: 0.1, duration: 0.2, ease: 'back.out(3.7)' }
);
tl.fromTo(
  [
    '.letter:nth-child(4)',
    '.letter:nth-child(5)',
    '.letter:nth-child(6)',
    '.letter:nth-child(7)',
  ],
  { y: '1.8em' },
  { y: 0, color: '#ff8c05', ease: 'power4.out', duration: 0.6 },
  '+=0.7'
);
tl.fromTo(
  'section img',
  { opacity: 0, scale: 0.2 },
  { opacity: 1, scale: 1, ease: 'power4.in', duration: 0.4 },
  '-=0.8'
);
tl.fromTo(
  '.second-word',
  { y: '1em', opacity: 0 },
  { y: 0, opacity: 1, delay: 1, ease: 'power4.out' },
  '-=1.2'
);
tl.fromTo(
  '.first-word',
  { x: '1em', opacity: 0 },
  { x: 0, opacity: 1, delay: 1, ease: 'power4.out' },
  '-=1'
);
tl.fromTo(
  '.third-word',
  { x: '-1em', opacity: 0 },
  { x: 0, opacity: 1, delay: 1, ease: 'power4.out' },
  '-=1'
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
projectBackgrounds.forEach((project, i) => {
  gsap.from(project, {
    scrollTrigger: {
      trigger: projects[i],
      start: 'top 100%',
      end: 'bottom 50%',
      scrub: 2,
    },
    xPercent: 200,
    opacity: 0,
  });
});

const techCategories = gsap.utils.toArray('.tech-category');

gsap.from('.tech-categories', {
  scrollTrigger: {
    trigger: '.about-text',
    start: 'top center',
    end: 'center bottom',
    scrub: 0.7,
  },
  scale: 0,
  ease: 'power4.out',
});

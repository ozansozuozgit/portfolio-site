const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

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
const profilePic = document.querySelector('#landing img');
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var myTimeline = anime.timeline();

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
    color: '#A54F77',
  },
  '+=300'
);
myTimeline.add(
  {
    targets: profilePic,
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

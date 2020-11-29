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
const name = document.querySelector('.letter:nth-child(4)');
console.log(name);

textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline({ loop: false }).add({
  targets: '.ml6 .letter',
  translateY: ['1.1em', 0],
  translateZ: 0,
  duration: 750,
  delay: (el, i) => 50 * i,
});
anime.timeline({ loop: false }).add(
  {
    targets: [
      '.letter:nth-child(4)',
      '.letter:nth-child(5)',
      '.letter:nth-child(6)',
      '.letter:nth-child(7)',
    ],

    translateY: ['2.1em', 0],
    duration: 1000,
    color: '#F3AC59',
  },
  '+=1500'
);
anime.timeline({ loop: false }).add({
  targets: profilePic,
  opacity: [0, 1],
  scale: [0.2, 1],
  durationIn: 1750,
  delay: 500,
});

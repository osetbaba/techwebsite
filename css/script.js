// change navbar style on scroll
alert();
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY >0)
});

// show/hide menu

const menu= document.querySelector(".nav")


window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {          // when you scroll down a bit
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
});

window.addEventListener('scroll', () => {
  const about = document.querySelector('.about');
  if (window.scrollY > 50) {          // when you scroll down a bit
    about.classList.add('visible');
  } else {
    about.classList.remove('visible');
  }
});

window.addEventListener('scroll', () => {
  const contact = document.querySelector('.contact-me');
  if (window.scrollY > 50) {          // when you scroll down a bit
    contact.classList.add('visible');
  } else {
    contact.classList.remove('visible');
  }
});
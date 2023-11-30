/** @format */

const menuIcon = document.querySelector('.menu-icon');
const xBtn = document.querySelector('.x-btn');
const navigation = document.querySelector('.navigation');

menuIcon.addEventListener('click', () => {
  navigation.classList.add('navigate');
});

xBtn.addEventListener('click', () => {
  navigation.classList.remove('navigate');
});

window.addEventListener('scroll', () => {
  const about = document.querySelector('.about');
  const services = document.querySelector('.services');
  if (window.pageYOffset >= 200) {
    about.classList.add('change');
  } else {
    about.classList.remove('change');
  }
    if (window.pageYOffset >= about.offsetTop +200) {
      services.classList.add('change');
    } else {
      services.classList.remove('change');
    }
console.log('about.offsetTop:', about.offsetTop);
console.log('window.pageYOffset:', window.pageYOffset);

});

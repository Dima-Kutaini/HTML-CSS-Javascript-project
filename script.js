/** @format */

const menuIcon = document.querySelector('.menu-icon');
const xBtn = document.querySelector('.x-btn');
const navigation = document.querySelector('.navigation');
let start = false;

menuIcon.addEventListener('click', () => {
  navigation.classList.add('navigate');
});

xBtn.addEventListener('click', () => {
  navigation.classList.remove('navigate');
});

window.addEventListener('scroll', () => {
  const about = document.querySelector('.about');
  const services = document.querySelector('.services');
  const portfolio = document.querySelector('.portfolio');
  const data = document.querySelector('.data');
  const myData = document.querySelectorAll('.num');

  if (window.scrollY >= 200) {
    about.classList.add('change');
  } else {
    about.classList.remove('change');
  }

  if (window.scrollY >= about.offsetTop + 200) {
    services.classList.add('change');
  } else {
    services.classList.remove('change');

    if (window.scrollY >= services.offsetTop ) {
      portfolio.classList.add('change');
    } else {
      portfolio.classList.remove('change');
    }
  }

  if (window.scrollY >= data.offsetTop - 300) {
    if (start) {
      myData.forEach((num) => {
        startCount(num);
      });
    }
    start = true;
  }
});

// const startCount = (el) => {
//   let max = el.dataset.val;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent === max) {
//       clearInterval(count);
//     }
//   }, 5);
// };



// const startCount = (el) => {
//   let max = parseInt(el.dataset.val, 10);
//   let current = 0;

//   let count = setInterval(() => {
//     current++;
//     el.textContent = current;

//     if (current >= max) {
//       el.textContent = max; // Set the final value to avoid exceeding data-val
//       clearInterval(count);
//     }
//   }, 5);
// };
const startCount = (el) => {
  let max = parseInt(el.dataset.val, 10);
  let current = 0;

  let count = setInterval(() => {
    current += Math.ceil((max - current) / 10); // Smooth increment
    el.textContent = current;

    if (current >= max) {
      el.textContent = max; // Set the final value
      clearInterval(count);
    }
  }, 5); // Adjust the interval as needed for smoothness
};

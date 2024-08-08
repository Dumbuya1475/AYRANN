
// // show/hide nav menu
// const menu = document.querySelector(".side-panel");
// const openBtn = document.querySelector("#open-menu-btn");
// const closeBtn = document.querySelector("#close-menu-btn");
// const mainBody = document.getElementById('main')
// // const about = document.getElementById('about');
// // const music = document.getElementById('music');
// // const subscribe = document.getElementById('subscribe')

// openBtn.addEventListener('click', () => {
//   menu.style.display = "flex";
//   closeBtn.style.display = "inline-block";
//   openBtn.style.display = "none"
//   mainBody.style.marginLeft = '17rem'
//   // about.style.padding = '5rem';
//   // subscribe.style.width ='300px'
// })


// closeBtn.addEventListener('click', () => {
//   menu.style.display = "none";
//   openBtn.style.display = "inline-block";
//   closeBtn.style.display = "none"
//   mainBody.style.marginLeft = '0rem'
// })
document.addEventListener('DOMContentLoaded', function () {
  const sidePanel = document.getElementById('sidePanel');
  const openBtn = document.getElementById('open-menu-btn');
  const closeBtn = document.getElementById('close-menu-btn');

  openBtn.addEventListener('click', function () {
    sidePanel.style.left = '0';
    sidePanel.style.display = 'block'; // Ensure nav bar is visible
  });

  closeBtn.addEventListener('click', function () {
    sidePanel.style.left = '-250px';
    sidePanel.style.display = 'none'; // Hide nav bar when closed
  });
});



const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(n) {
  if (n >= slide.length) {
    index = 0;
  } else if (n < 0) {
    index = slide.length - 1;
  } else {
    index = n;
  }
  slides.style.transform = 'translateX(' + (-index * 100) + '%)';
}

// next.addEventListener('click', () => {
//   showSlide(index + 1);
// });

// prev.addEventListener('click', () => {
//   showSlide(index - 1);
// });

setInterval(() => {
  showSlide(index + 1);
}, 2000);

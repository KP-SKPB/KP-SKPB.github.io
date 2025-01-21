
// darkmode
const darkModeToggle = document.getElementById('darkmode-toggle');

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');
}

darkModeToggle.onclick = function () {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    }
};

//header mobile
$(document).ready(function() {
  $('.fa-bars').click(function() {
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });
});

//scroll
window.addEventListener("scroll", () => {
  const content = document.querySelector('.content');
  const scrollY = window.scrollY;

  const homeSection = document.querySelector('.home');
  const homeHeight = homeSection.offsetHeight;

  const scrollRatio = Math.min(scrollY / homeHeight, 1);

  content.style.transform = `translateY(${scrollRatio * 150}%)`;

  if (scrollY > 500) {
      content.classList.add('hidden');
  } else {
      content.classList.remove('hidden');
  }
});

//toggle 
let toggle = document.querySelector('.toggle');
let main = document.querySelector('main');
toggle.onclick = function() {
  main.classList.toggle('active');
  if (main.classList.contains('active')) {
    localStorage.setItem('active', 'enabled');
  } else {
    localStorage.setItem('active', 'disabled');
  }
}





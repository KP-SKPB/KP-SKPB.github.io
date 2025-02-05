// Dark mode
const darkModeToggle = document.getElementById('darkmode-toggle');

if(darkModeToggle.checked) {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
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


function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('hidden-nav');
}
  

//submenu toggle
function toggleSubMenu(buttonElement) {
  // Ambil elemen <ol> (sub-menu) yang ada di sebelah tombol
  const subMenu = buttonElement.closest('a').nextElementSibling;

  // Toggle kelas 'show'
  subMenu.classList.toggle('show');
}

//buka tutup details
function saveDetailsState() {
  const detailsStates = Array.from(document.querySelectorAll("details")).map(details => details.open);
  localStorage.setItem("detailsStates", JSON.stringify(detailsStates));
}
function restoreDetailsState() {
  const detailsStates = JSON.parse(localStorage.getItem("detailsStates")) || [];
  document.querySelectorAll("details").forEach((details, index) => {
      if (detailsStates[index]) {
          details.setAttribute("open", "open");
      } else {
          details.removeAttribute("open");
      }
  });
}
restoreDetailsState();
document.querySelectorAll("details").forEach(details => {
  details.addEventListener("toggle", saveDetailsState);
});


// Scroll progress bar
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.height = scrolled + "%";
}

// Dark mode
const darkModeToggle = document.getElementById('darkmode-toggle');

// if (localStorage.getItem('dark-mode') === 'enabled') {
//     document.body.classList.add('dark-mode');
// }

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
  sidebar.classList.toggle('hidden');
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

// Function to restore the state of all <details> elements
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

// Restore the state when the page loads
restoreDetailsState();

// Save the state whenever a details element is toggled
document.querySelectorAll("details").forEach(details => {
  details.addEventListener("toggle", saveDetailsState);
});
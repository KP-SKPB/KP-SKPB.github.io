// Dark mode
document
  .querySelector("#dark-mode-toggle")
  .addEventListener('click', () => {
     document.body.classList.toggle("dark-mode");
  });



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
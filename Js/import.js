function importHTML(id, url) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      // Trigger layout reflow untuk sticky dan tinggi dinamis
      requestAnimationFrame(() => {
        document.body.style.overflow = "hidden";
        document.body.offsetHeight; // memaksa reflow
        document.body.style.overflow = "";
      });
    })
    .catch((error) => {
      console.error(`Error loading ${id}:`, error);
    });
}

window.addEventListener("DOMContentLoaded", function () {
  // Import semua bagian HTML secara paralel, lalu load script setelahnya
  Promise.all([
    importHTML("header", "../../HTML/header.html"),
    importHTML("sidebar", "../../HTML/sidebar_1.html"),
  ]).then(() => {
    // Setelah semua konten diimpor, load script belajar
    const script = document.createElement("script");
    script.src = "../../Js/learn.js";
    script.async = true;
    document.body.appendChild(script);
  });
});

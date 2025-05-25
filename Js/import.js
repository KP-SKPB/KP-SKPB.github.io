// const header = document.querySelector("#header");
// fetch("../../HTML/header.html")
//   .then((response) => response.text())
//   .then((data) => {
//     header.innerHTML = data;
//   })
//   .catch((error) => console.error("Error loading header:", error));

function importHTML(id, url) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((error) => {
      console.error(`Error loading ${id}:`, error);
    });
}

// Contoh penggunaan:
importHTML("header", "../../HTML/header.html");
importHTML("sidebar", "../../HTML/sidebar_1.html");

window.addEventListener("DOMContentLoaded", function () {
  const script = document.createElement("script");
  script.src = "../../Js/learn.js";
  script.defer = true;
  document.body.appendChild(script);
});

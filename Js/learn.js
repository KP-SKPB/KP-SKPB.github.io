// Dark mode
const darkModeToggle = document.getElementById("darkmode-toggle");

if (darkModeToggle.checked) {
  document.body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
}

darkModeToggle.onclick = function () {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "disabled");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "enabled");
  }
};

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("hidden-nav");
}

//submenu toggle
function toggleSubMenu(buttonElement) {
  const subMenu = buttonElement.closest("a").nextElementSibling;
  subMenu.classList.toggle("show");
}

//buka tutup details
function saveDetailsState() {
  const detailsStates = Array.from(document.querySelectorAll("details")).map(
    (details) => details.open
  );
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
document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("toggle", saveDetailsState);
});

// Scroll progress bar
let progress = document.querySelector(".progress-bar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.scrollY / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
  document.documentElement.style.setProperty(
    "--scroll-progress",
    progressHeight + "%"
  );
};
document
  .querySelector(".progress-container")
  .addEventListener("click", (event) => {
    let x = event.clientX; // Posisi X relatif terhadap viewport
    let y = event.clientY; // Posisi Y relatif terhadap viewport

    alert("Kursor diklik pada posisi: X = ${x}, Y = ${y}");
  });

//hidden jawaban latihan
document.querySelectorAll(".jawaban-latihan").forEach((details) => {
  const summary = details.querySelector("summary");
  details.addEventListener("toggle", () => {
    if (details.open) {
      summary.textContent = "Tutup";
      summary.classList.add("tutup-style");
    } else {
      summary.textContent = "Lihat Solusi";
      summary.classList.remove("tutup-style");
    }
  });
});

//radio unchecked
function toggleRadio(radio) {
  if (radio.checked) {
    if (radio.getAttribute("data-checked") === "true") {
      radio.checked = false;
      radio.setAttribute("data-checked", "false");
    } else {
      let radios = document.getElementsByName(radio.name);
      for (let i = 0; i < radios.length; i++) {
        radios[i].setAttribute("data-checked", "false");
      }
      radio.setAttribute("data-checked", "true");
    }
  }
}

//Hint
document.querySelectorAll(".hint-button").forEach((button) => {
  button.addEventListener("click", () => {
    const dialog = button.nextElementSibling;
    if (dialog && dialog.tagName === "DIALOG") {
      dialog.showModal();
    }
  });
});
document.querySelectorAll("dialog").forEach((dialog) => {
  dialog.addEventListener("click", () => {
    dialog.close();
  });
});
if (document.querySelector(".hint-content")) {
  document.querySelector(".hint-content").addEventListener("click", (event) => {
    event.stopPropagation();
  });
}

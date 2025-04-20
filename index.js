const sections = document.querySelectorAll("section");
const accordions = document.querySelectorAll(".accordion");
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");
const headerText = document.getElementById("header-text-span");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hidden");

      entry.target.classList.add("visible");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
  section.classList.add("hidden");
});

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordion.classList.toggle("active");

    const panel = accordion.nextElementSibling;
    panel.classList.toggle("show");
  });
});

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open-nav");
});

const texts = ["Blog Posts", "Tutorials", "Reviews", "Articles"];
let currentIndex = 0;

function changeText() {
  currentIndex = (currentIndex + 1) % texts.length;
  headerText.textContent = texts[currentIndex];
}

setInterval(changeText, 2000);

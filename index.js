const sections = document.querySelectorAll("section");
const accordions = document.querySelectorAll(".accordion");
const navBtn = document.querySelector(".nav-btn");
const navLinks = document.querySelector(".nav-links");

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
    // Toggle the active class
    accordion.classList.toggle("active");

    // Find the next sibling panel and toggle its visibility
    console.log(accordion.parentElement);

    const panel = accordion.nextElementSibling;
    panel.classList.toggle("show");
  });
});

navBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open-nav");
});

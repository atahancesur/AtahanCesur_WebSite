// Reveal animation on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < windowHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Project filtering (only affects cards with data-category)
const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterCards = document.querySelectorAll(".card[data-category]");

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    filterCards.forEach(card => {
      const category = card.dataset.category;
      if (filter === "all" || category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// =====================
// THEME TOGGLE
// =====================

const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");

// set initial theme
if (savedTheme) {
  document.body.classList.add(savedTheme);
} else {
  document.body.classList.add("light-theme");
}

// toggle theme
themeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    localStorage.setItem("theme", "light-theme");
  }
});

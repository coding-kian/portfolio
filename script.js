const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach(element => revealObserver.observe(element));

const filters = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filters.forEach(filter => {
  filter.addEventListener("click", () => {
    filters.forEach(button => button.classList.remove("active"));
    filter.classList.add("active");

    const selected = filter.dataset.filter;

    projectCards.forEach(card => {
      const categories = card.dataset.category || "";
      const shouldShow = selected === "all" || categories.includes(selected);
      card.hidden = !shouldShow;
    });
  });
});

const contactForm = document.querySelector("#contactForm");
const formNote = document.querySelector("#formNote");

if (contactForm) {
  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = encodeURIComponent(document.querySelector("#name").value.trim());
    const message = encodeURIComponent(document.querySelector("#message").value.trim());

    const subject = encodeURIComponent("Portfolio contact");
    const body = encodeURIComponent("Name: ") + name + encodeURIComponent("\n\nMessage:\n") + message;

    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Email draft opened. Replace you@example.com with your real email in contact.html.";
    }
  });
}

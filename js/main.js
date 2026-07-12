// index.html
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 80) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

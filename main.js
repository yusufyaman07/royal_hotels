// * Navigation
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle menu on click
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  // Toggle icon
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

// Close menu when link is clicked
navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

// * Scroll Reveal Animations
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header reveal
ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1000,
});

// Hotels reveal
ScrollReveal().reveal(".hotel__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Steps reveal
ScrollReveal().reveal(".steps__card", {
  ...scrollRevealOption,
  interval: 500,
});

// * Inspiration Scroll Effect
const inspiration = document.querySelector(".inspiration__wrapper");
const inspirationImages = Array.from(inspiration.children);

// Duplicate images for infinite scroll
inspirationImages.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  inspiration.appendChild(duplicateNode);
});

// Properties reveal
ScrollReveal().reveal(".property__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Trips reveal
ScrollReveal().reveal(".trip__card", {
  ...scrollRevealOption,
  interval: 500,
});

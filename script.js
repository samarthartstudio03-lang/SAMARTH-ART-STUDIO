document.addEventListener("DOMContentLoaded", function () {

  // Sticky header
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) header.classList.add("sticky");
    else header.classList.remove("sticky");
  });

  // Hamburger menu toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Image click zoom
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (images.length && lightbox && lightboxImg) {
    images.forEach(img => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    lightbox.addEventListener("click", () => {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  }

  // Form alert
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("Thank you! We will contact you shortly.");
      form.reset();
    });
  }

});

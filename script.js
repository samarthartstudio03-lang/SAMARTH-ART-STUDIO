// script.js - Full site interactions

document.addEventListener("DOMContentLoaded", function () {

  /* ================= FORM HANDLING ================= */
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = form.querySelector('input[placeholder="Your Name"]')?.value.trim();
      const email = form.querySelector('input[type="email"]')?.value.trim();

      if (!name || !email) {
        alert("Please enter your name and email.");
        return;
      }

      alert("Thank you! We will contact you shortly.");
      form.reset();
    });
  }

  /* ================= SMOOTH SCROLL ================= */
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId && targetId.length > 1) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* ================= IMAGE LIGHTBOX ================= */
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (images.length && lightbox && lightboxImg) {
    images.forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightbox.style.display = "flex";
      });
    });

    // Close lightbox on click anywhere
    lightbox.addEventListener("click", function () {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  }

  /* ================= SCROLL REVEAL ================= */
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  };

  revealOnScroll();
  window.addEventListener("scroll", revealOnScroll);

  /* ================= STICKY SHRINKING HEADER ================= */
  const header = document.querySelector("header");

  const toggleStickyHeader = () => {
    if (!header) return;
    const isSticky = window.scrollY > 80;
    header.classList.toggle("sticky", isSticky);
    document.body.classList.toggle("has-sticky", isSticky);
  };

  toggleStickyHeader();
  window.addEventListener("scroll", toggleStickyHeader);

  /* ================= TESTIMONIAL SLIDER ================= */
  const testimonials = document.querySelectorAll(".testimonial");
  let tIndex = 0;

  if (testimonials.length) {
    setInterval(() => {
      testimonials[tIndex].classList.remove("active");
      tIndex = (tIndex + 1) % testimonials.length;
      testimonials[tIndex].classList.add("active");
    }, 3500);
  }

});

// script.js - Form handling + Smooth scroll + Image Lightbox

document.addEventListener("DOMContentLoaded", function () {

  // Handle Contact Form Submission
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation (optional)
      const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();

      if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return;
      }

      // Success message
      alert("Thank you! We will contact you shortly.");

      // Reset form
      form.reset();
    });
  }

  // Smooth scroll for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId.length > 1) {
        e.preventDefault();
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Image Click-to-Zoom (Lightbox)
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

});

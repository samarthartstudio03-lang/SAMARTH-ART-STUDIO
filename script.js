// script.js – stable & mobile-safe

document.addEventListener("DOMContentLoaded", function () {

  /* ===== HAMBURGER MENU ===== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
      });
    });
  }

  /* ===== STICKY HEADER ON SCROLL ===== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  /* ===== SMOOTH SCROLL ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* ===== FORM SUBMIT ALERT ===== */
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! We will contact you shortly.");
      form.reset();
    });
  }

  /* ===== IMAGE CLICK TO ZOOM ===== */
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

    lightbox.addEventListener("click", function () {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  }

});

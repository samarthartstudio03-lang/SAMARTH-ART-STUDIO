document.addEventListener("DOMContentLoaded", function () {

  /* ===== Sticky Header ===== */
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  });

  /* ===== Hamburger / 3-lines Menu ===== */
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

  /* ===== Smooth Scroll ===== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  /* ===== Click to Zoom (Lightbox) ===== */
  const images = document.querySelectorAll(".gallery img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (images.length && lightbox && lightboxImg) {
    images.forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = img.src;
        lightbox.style.display = "flex";
      });
    });

    lightbox.addEventListener("click", function () {
      lightbox.style.display = "none";
      lightboxImg.src = "";
    });
  }

  /* ===== Testimonial Slider Animation ===== */
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;

  if (testimonials.length > 0) {
    testimonials.forEach((t, i) => {
      if (i !== 0) t.classList.remove("active");
    });

    setInterval(function () {
      testimonials[currentTestimonial].classList.remove("active");
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      testimonials[currentTestimonial].classList.add("active");
    }, 3500);
  }

  /* ===== Contact Form Alert ===== */
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! We will contact you shortly.");
      form.reset();
    });
  }

});

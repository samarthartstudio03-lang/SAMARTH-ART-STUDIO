document.addEventListener("DOMContentLoaded", function () {

  /* ===== Sticky Header ===== */
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  /* ===== Hamburger / 3-lines Menu ===== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("open");
      menuToggle.classList.toggle("active");
    });

    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
      });
    });

    // Close menu if user clicks outside
    document.addEventListener("click", function (e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove("open");
        menuToggle.classList.remove("active");
      }
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
          target.scrollIntoView({ behavior: "smooth", block: "start" });
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
        document.body.style.overflow = "hidden"; // prevent background scroll
      });
    });

    lightbox.addEventListener("click", function () {
      lightbox.style.display = "none";
      lightboxImg.src = "";
      document.body.style.overflow = ""; // restore scroll
    });
  }

  /* ===== Testimonial Slider Animation ===== */
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonial = 0;
  let testimonialTimer = null;

  if (testimonials.length > 1) {
    testimonials.forEach((t, i) => {
      if (i !== 0) t.classList.remove("active");
    });

    testimonialTimer = setInterval(function () {
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

      const name = form.querySelector('input[type="text"]');
      const email = form.querySelector('input[type="email"]');

      if (name && email && (name.value.trim() === "" || email.value.trim() === "")) {
        alert("Please enter your name and email.");
        return;
      }

      alert("Thank you! We will contact you shortly.");
      form.reset();
    });
  }

});

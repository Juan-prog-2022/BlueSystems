  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar .nav-link");
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });

      // Cambiar el fondo del navbar al hacer scroll
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

    // Mostrar botón cuando haces scroll hacia abajo
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        scrollTopBtn.style.display = "flex";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });

    // Al hacer click, hacer scroll suave hacia arriba
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

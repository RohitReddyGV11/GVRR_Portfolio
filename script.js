// Particles Background
document.addEventListener("DOMContentLoaded", function () {
  // Update year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Terminal Greeting
  const terminal = document.getElementById("terminal");
  if (terminal) {
    terminal.textContent = "~ $ cat greetings.txt > welcome to rohit's portfolio";
  }

  // Typing Effect for Role
  if (document.querySelector(".typing-effect .role-text")) {
    const typed = new Typed(".role-text", {
      strings: ["Data Analyst", "Software Developer"],
      typeSpeed: 70,
      backSpeed: 50,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });
  }

  // Smooth Scroll for Nav Links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Scroll Reveal Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  // Observe both .scroll-animate AND .timeline-item for reveal!
  const hiddenElements = document.querySelectorAll(".scroll-animate, .timeline-item");
  hiddenElements.forEach((el) => observer.observe(el));

  // Animated Background (Particles)
  const canvas = document.querySelector("canvas.particles-bg");
  if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = Math.floor(canvas.width / 15);

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
    }

    function updateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      });
      requestAnimationFrame(updateParticles);
    }

    updateParticles();

    window.addEventListener("resize", () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    });
  }

  // Form Submission
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you! Your message has been sent.");
      contactForm.reset();
    });
  }
});

// Ensure Typed.js is loaded
if (typeof Typed === "undefined") {
  console.error("Typed.js not loaded.");
}
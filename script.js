document.addEventListener("DOMContentLoaded", () => {
  const cookieCard = document.getElementById("cookieCard");
  const acceptBtn = document.querySelector(".acceptButton");
  const declineBtn = document.querySelector(".declineButton");

  if (!cookieCard || !acceptBtn || !declineBtn) return;

  // Show popup only if no prior choice
  if (!localStorage.getItem("cookieConsent")) {
    setTimeout(() => {
      cookieCard.classList.add("show");
    }, 800); // smooth delay
  }

  // Accept button
  acceptBtn.addEventListener("click", () => {
    cookieCard.classList.remove("show");
    localStorage.setItem("cookieConsent", "accepted");
  });

  // Decline button
  declineBtn.addEventListener("click", () => {
    cookieCard.classList.remove("show");
    localStorage.setItem("cookieConsent", "declined");
  });
});

// Scroll-based fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("mobile");
});

document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cookieCard = document.getElementById('cookieCard');
  const acceptBtn = document.querySelector('.acceptButton');
  const declineBtn = document.querySelector('.declineButton');

  acceptBtn.addEventListener('click', () => {
    cookieCard.classList.remove("show");
    localStorage.setItem('cookieConsent', 'accepted');
  });

  declineBtn.addEventListener('click', () => {
    cookieCard.classList.remove("show");
    localStorage.setItem('cookieConsent', 'declined');
  });
  
  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      cookieCard.classList.add("show");
    }, 500); 
  }
});

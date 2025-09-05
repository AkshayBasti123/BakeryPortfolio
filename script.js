document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const cookieCard = document.getElementById('cookieCard');
const acceptBtn = document.querySelector('.acceptButton');
const declineBtn = document.querySelector('.declineButton');

acceptBtn.addEventListener('click', () => {
  cookieCard.style.display = 'none';
  localStorage.setItem('cookieConsent', 'accepted');
});

declineBtn.addEventListener('click', () => {
  cookieCard.style.display = 'none';
  localStorage.setItem('cookieConsent', 'declined');
});

window.addEventListener('load', () => {
  if (localStorage.getItem('cookieConsent')) {
    cookieCard.style.display = 'none';
  }
});

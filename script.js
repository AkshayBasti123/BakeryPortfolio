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

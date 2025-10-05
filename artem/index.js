document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, i) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    setTimeout(() => {
      card.style.transition = "all 0.8s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, i * 200); 
  });
});
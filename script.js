const interactiveCards = document.querySelectorAll(
  '.serve-card, .service-card, .t-card, .band-card, .step-card, .why-card, .phil-card, .mv-card, .value-card, .founder-card, .founder-quote, .res-card'
);

interactiveCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.remove('is-tapped');
    requestAnimationFrame(() => card.classList.add('is-tapped'));
  });
});

const steps = document.querySelectorAll('.step');

if ('IntersectionObserver' in window) {
  const stepObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      const stepNumber = entry.target.querySelector('.step-num');

      if (!stepNumber) {
        return;
      }

      if (entry.isIntersecting) {
        stepNumber.classList.add('is-visible');
      } else {
        stepNumber.classList.remove('is-visible');
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });

  steps.forEach((step) => stepObserver.observe(step));
} else {
  steps.forEach((step) => {
    const stepNumber = step.querySelector('.step-num');
    if (stepNumber) {
      stepNumber.classList.add('is-visible');
    }
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1 && !entry.target.classList.contains('show')) {
          entry.target.classList.add('show');
      }
  });
}, { threshold: 0.5 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el, index) => {
  const delay = 300 * index; // Adjust the delay value as needed (milliseconds)
  setTimeout(() => observer.observe(el), delay);
});


window.addEventListener('load', () => {
  const loadingContainer = document.querySelector('.loading-container');
  loadingContainer.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    if (index >= slides.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = slides.length - 1;
    } else {
      currentIndex = index;
    }

    const newTransformValue = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.slides').style.transform = newTransformValue;
  }

  prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    showSlide(currentIndex + 1);
  }, 15000);
});

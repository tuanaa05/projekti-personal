document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    
     
    function updateSlider() {
      slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      

      dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
      });
    }
    
    
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    });
   

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlider();
    });
   
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider();
      });
    });
    
     
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlider();
    }, 5000);
  });
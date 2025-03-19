document.addEventListener("DOMContentLoaded", () => {
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseover', () => {
      ctaButton.style.backgroundColor = '#ffa500';
    });
    ctaButton.addEventListener('mouseout', () => {
      ctaButton.style.backgroundColor = '#ff4500';
    });
  });

  


  // Show content after page has fully loaded
  window.addEventListener('load', () => {
    document.querySelector('.content').style.display = 'block';
  });

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



  document.getElementById("download-link-profile").addEventListener("click", function () {
    // const link = document.createElement("a");
    // link.href = "assets/pdf/El-Sewedy-Power-Cables-profile-2025.pdf";
    // link.download = "ELSEWDYPOWER-CATALOGE.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);

    window.open("assets/pdf/El-Sewedy-Power-Cables-profile-2025.pdf", "_blank");
    
    
  });
  
  
  document.getElementById("download-link-CATALOGE").addEventListener("click", function () {
    // const link = document.createElement("a");
    // link.href = "assets/pdf/ELSEWDYPOWER-CATALOGE.pdf";
    // link.download = "ELSEWDYPOWER-CATALOGE.pdf";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    window.open("assets/pdf/ELSEWDYPOWER-CATALOGE.pdf", "_blank");
  });



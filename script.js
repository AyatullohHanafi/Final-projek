window.addEventListener('scroll', function() {
    var backToTopBtn = document.getElementById('backToTopBtn');
    
    if (window.scrollY >= 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  
  document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    
  });
  
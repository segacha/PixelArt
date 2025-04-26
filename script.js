document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  const sections = document.querySelectorAll('.screen');
  let currentSection = 0;
  let isScrolling = false;

  const scrollToSection = (index) => {
    if (isScrolling) return;
    
    isScrolling = true;
    container.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth'
    });
    
    setTimeout(() => {
      isScrolling = false;
    }, 800);
  };

  // Asignar eventos a todos los botones
  document.querySelectorAll('#up').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentSection > 0) {
        currentSection--;
        scrollToSection(currentSection);
      }
    });
  });

  document.querySelectorAll('#down').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentSection < sections.length - 1) {
        currentSection++;
        scrollToSection(currentSection);
      }
    });
  });

  // Navegación con rueda del mouse
  container.addEventListener('wheel', (e) => {
    e.preventDefault();
    if (isScrolling) return;
    
    if (e.deltaY > 0 && currentSection < sections.length - 1) {
      currentSection++;
    } else if (e.deltaY < 0 && currentSection > 0) {
      currentSection--;
    }
    
    scrollToSection(currentSection);
  });

  // Navegación con teclado
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp' && currentSection > 0) {
      currentSection--;
      scrollToSection(currentSection);
    } else if (e.key === 'ArrowDown' && currentSection < sections.length - 1) {
      currentSection++;
      scrollToSection(currentSection);
    }
  });
});
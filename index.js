window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const heroImage = document.querySelector('.bg');
    if (heroImage) {
      heroImage.style.transform = `scale(${1 + scrolled * 0.0005}) translateY(${scrolled * 0.3}px)`;
    }
  });
  
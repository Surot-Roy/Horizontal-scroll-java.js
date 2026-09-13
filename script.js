const horizontalWrapper = document.getElementById('horizontal-wrapper');
const horizontalSlider = document.getElementById('horizontal-slider');

window.addEventListener('scroll', () => {
  if (!horizontalWrapper || !horizontalSlider) return;

  const wrapperTop = horizontalWrapper.offsetTop;
  const wrapperHeight = horizontalWrapper.offsetHeight;
  const windowHeight = window.innerHeight;
  const scrollY = window.scrollY;

  // Calculate scroll percentage within the wrapper boundary
  const startScroll = wrapperTop;
  const endScroll = wrapperTop + wrapperHeight - windowHeight;

  if (scrollY >= startScroll && scrollY <= endScroll) {
    const progress = (scrollY - startScroll) / (endScroll - startScroll);
    const maxTranslate = horizontalSlider.scrollWidth - window.innerWidth + (window.innerWidth * 0.1);
    
    // Apply horizontal translation
    horizontalSlider.style.transform = `translateX(-${progress * maxTranslate}px)`;
  }
});
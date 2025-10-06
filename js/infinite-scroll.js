document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.company-container');
  const list = document.querySelector('.company');

  const items = list.querySelectorAll('li');
  items.forEach(item => {
    const clone = item.cloneNode(true);
    list.appendChild(clone);
  });

  let position = 0;

  const itemWidth = items[0].offsetWidth;

  const resetPoint = itemWidth * items.length;

  const speed = 1;

  let isPaused = false;

  container.addEventListener('mouseenter', () => {
    isPaused = true;
  });

  container.addEventListener('mouseleave', () => {
    isPaused = false;
  });

  function animate() {
    if (!isPaused) {
      position -= speed;

      if (position <= -resetPoint) {
        position = 0;
      }

      list.style.transform = `translateX(${position}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();
});
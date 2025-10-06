document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const navContainer = document.querySelector('.nav-container');

  if (menuToggle && navContainer) {
    menuToggle.addEventListener('click', function () {
      menuToggle.classList.toggle('active');
      navContainer.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', function () {
        menuToggle.classList.remove('active');
        navContainer.classList.remove('active');
        document.body.classList.remove('menu-open');
      });
    });
  }
});
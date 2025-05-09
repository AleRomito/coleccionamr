document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('burger');
    const menu = document.getElementById('menu-desplegable');
  
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        menu.classList.add('visible');
      } else {
        menu.classList.remove('visible');
      }
    });
  
    document.addEventListener('click', (e) => {
      const isClickInside = menu.contains(e.target) || e.target.closest('.burger');
      if (!isClickInside && checkbox.checked) {
        checkbox.checked = false;
        menu.classList.remove('visible');
      }
    });
  });

  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navBar1');
  
    if (window.scrollY > 1000) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });  
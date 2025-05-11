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
  
    if (window.scrollY > 700) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
  });


document.getElementById("toggleBebidas").addEventListener("click", function () {
    const bebidas = document.querySelector(".bebidas");
    const boton = document.getElementById("toggleBebidas");
    const chevron = document.getElementById("chevronAnimado");
    const estabaOculto = bebidas.classList.contains("oculto2");

    bebidas.classList.toggle("oculto2");

    if (estabaOculto) {
        // Ocultar el botón y el chevron
        boton.style.display = "none";
        chevron.classList.add("ocultoChevron");

        // Scroll hacia el div mostrado
        setTimeout(() => {
            bebidas.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navBar1");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("visible");
      } else {
        navbar.classList.remove("visible");
        navbar.style.position = "fixed";
      }
    });
  });
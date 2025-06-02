 const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const hamburguer = document.getElementById("hamburguer");
  const menu = document.getElementById("menuMobile");

  hamburguer.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
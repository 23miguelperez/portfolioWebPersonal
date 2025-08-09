

const btnHamburguesa = document.getElementById('hamburguesa');
const nav = document.getElementById('nav');

btnHamburguesa.addEventListener('click', () => {
  nav.classList.toggle('activo');
});

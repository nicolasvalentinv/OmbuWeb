document.addEventListener('DOMContentLoaded', function() {
  const cargarButton = document.getElementById('cargar-button');
  const loader = document.getElementById('loader');

  cargarButton.addEventListener('click', function() {
    loader.style.display = 'block';
    setTimeout(function() {
      loader.style.display = 'none';
    }, 3000); // 2 segundos
  });
});
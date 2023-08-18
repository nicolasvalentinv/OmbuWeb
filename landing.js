// Redirección al hacer clic en los botones
document.getElementById("button1").addEventListener("click", function() {
    window.location.href = "Nivel1.html"; // Cambia "pagina1.html" por la URL que desees
  });
  
  document.getElementById("button2").addEventListener("click", function() {
    window.location.href = "pagina2.html"; // Cambia "pagina2.html" por la URL que desees
  });

  // Mostrar/ocultar menú en dispositivos móviles
document.getElementById("mobile-menu").addEventListener("click", function() {
    var navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
  });

  function showLoading() {
    const loadingOverlay = document.createElement("div");
    loadingOverlay.className = "loading-overlay";
    const loadingIcon = document.createElement("div");
    loadingIcon.className = "loading-icon";
    loadingOverlay.appendChild(loadingIcon);
    document.body.appendChild(loadingOverlay);
  
    setTimeout(() => {
      // Simulación de carga
      loadingOverlay.remove();
    }, 2000); // Cambia este valor al tiempo que desees
  }
document.addEventListener('DOMContentLoaded', function() {
    const imagenContainer = document.getElementById('imagenContainer');
  
    function agregarImagenesAnimadas() {
      const imagenes = [
        'arduino.jpg',
        'arduino.jpg',
        'imagen3.gif'
      ];
  
      imagenes.forEach((imagen, index) => {
        const imagenElement = document.createElement('img');
        imagenElement.src = imagen;
        imagenElement.classList.add('animated-image');
        imagenElement.style.opacity = 0;
        imagenElement.style.transform = 'translateY(20px)';
        imagenElement.style.animation = `fadeInUp 0.5s ease-out ${index * 0.5}s forwards`;
        imagenContainer.appendChild(imagenElement);
      });
    }
  
    agregarImagenesAnimadas();
  });
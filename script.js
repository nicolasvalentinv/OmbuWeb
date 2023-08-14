
document.addEventListener("DOMContentLoaded", function() {
    const niveles = [
        {
            categoria: "Matemáticas",
            pregunta: "¿Cuánto es 2 + 2?",
            respuesta: "console.log(4);"
        },
        {
            categoria: "Animales",
            pregunta: "¿Qué animal hace 'mu'?",
            respuesta: "console.log(Vaca);"
        },
        {
            categoria: "Colores",
            pregunta: "¿Cuál es el color del cielo en un día despejado?",
            respuesta: "console.log(celeste);"
        },
        {
            categoria: "Frutas",
            pregunta: "¿Qué fruta es amarilla por fuera y blanca por dentro?",
            respuesta: "Banana"
        },
        {
            categoria: "Naturaleza",
            pregunta: "¿Qué cae del cielo cuando llueve?",
            respuesta: "Agua"
        },
        {
            categoria: "Formas",
            pregunta: "¿Cuál es la figura con tres lados?",
            respuesta: "Triángulo"
        },
        {
            categoria: "Cuerpo humano",
            pregunta: "¿Dónde están tus orejas?",
            respuesta: "Cabeza"
        },
        {
            categoria: "Medios de transporte",
            pregunta: "¿Qué usas para ir a la escuela?",
            respuesta: "Autobús"
        },
        // Agregar más niveles aquí...
    ];

    let nivelActual = 0;
    const nivelNumero = document.getElementById("nivelNumero");
    const nivelCategoria = document.getElementById("nivelCategoria");
    const imagenCategoria = document.getElementById("imagenCategoria");
    const pregunta = document.getElementById("pregunta");
    const respuestaInput = document.getElementById("respuestaInput");
    const verificarButton = document.getElementById("verificar");
    const siguienteNivelButton = document.getElementById("siguienteNivelBtn");
    const resultado = document.getElementById("resultado");
    const barraProgreso = document.getElementById("barraProgreso");
    const codigoInput = document.getElementById("codigoInput");

    const porcentajeIncremento = 100 / niveles.length;

    actualizarNivel();

    verificarButton.addEventListener("click", function() {
        const respuestaIngresada = respuestaInput.value.trim();
        const respuestaCorrecta = niveles[nivelActual].respuesta;

        if (respuestaIngresada === respuestaCorrecta) {
            resultado.textContent = "¡Respuesta correcta! Puedes avanzar al siguiente nivel.";
            siguienteNivelButton.disabled = false;
            actualizarBarraProgreso();
        } else {
            resultado.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
            siguienteNivelButton.disabled = true;
        }
    });

    siguienteNivelButton.addEventListener("click", function() {
        nivelActual++;
        actualizarNivel();
        resultado.textContent = "";
        respuestaInput.value = "";
        siguienteNivelButton.disabled = true;
        actualizarBarraProgreso();
    });

    function actualizarNivel() {
        if (nivelActual < niveles.length) {
            nivelNumero.textContent = nivelActual + 1;
            nivelCategoria.textContent = niveles[nivelActual].categoria;
            imagenCategoria.src = niveles[nivelActual].imagen;
            pregunta.textContent = niveles[nivelActual].pregunta;
            respuestaInput.value = "";
            siguienteNivelButton.disabled = true;
            actualizarBarraProgreso();
        } else {
            resultado.textContent = "¡Has completado todos los niveles!";
            respuestaInput.disabled = true;
            verificarButton.disabled = true;
            siguienteNivelButton.disabled = true;
        }
    }

    function actualizarBarraProgreso() {
        const progreso = porcentajeIncremento * nivelActual;
        barraProgreso.style.width = progreso + "%";
        barraProgreso.setAttribute("aria-valuenow", progreso);
        barraProgreso.textContent = `${progreso}%`;
    
        if (progreso >= 100) {
            barraProgreso.style.backgroundColor = "green";
        } else {
            barraProgreso.style.backgroundColor = "#007bff"; // Color azul por defecto
        }
    }

    
});



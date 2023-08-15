document.addEventListener("DOMContentLoaded", function() {
    const temas = [
        "Deporte",
        "Historia Argentina",
        "Ciencias",
        "Matemáticas"
    ];

    const preguntasPorTema = 3;
    

    const preguntas = [
        // Preguntas de deporte
        {
            categoria: "Deporte",
            imagen: "ruta/imagen_deporte.jpg", // Ajusta la ruta de la imagen
            pregunta: "¿En qué deporte se utiliza una pelota de fútbol?",
            opciones: ["Fútbol", "Tenis", "Golf", "Vóley"],
            respuestaCorrecta: "Fútbol"
        },
        {
            categoria: "Deporte",
            imagen: "ruta/imagen_deporte.jpg",
            pregunta: "¿En qué deporte se lanzan jabalinas?",
            opciones: ["Atletismo", "Boxeo", "Natación", "Esgrima"],
            respuestaCorrecta: "Atletismo"
        },
        {
            categoria: "Deporte",
            imagen: "ruta/imagen_deporte.jpg",
            pregunta: "¿Cuál es el deporte que se juega con raquetas y una pequeña bola amarilla?",
            opciones: ["Tenis", "Golf", "Vóley", "Béisbol"],
            respuestaCorrecta: "Tenis"
        },
        // Preguntas de historia argentina
        {
            categoria: "Historia Argentina",
            imagen: "ruta/imagen_historia.jpg", // Ajusta la ruta de la imagen
            pregunta: "¿En qué año se declaró la Independencia de Argentina?",
            opciones: ["1806", "1810", "1816", "1820"],
            respuestaCorrecta: "1816"
        },
        {
            categoria: "Historia Argentina",
            imagen: "ruta/imagen_historia.jpg",
            pregunta: "¿Quién fue el primer presidente de Argentina?",
            opciones: ["Juan Manuel de Rosas", "Manuel Belgrano", "Domingo Faustino Sarmiento", "Bernardino Rivadavia"],
            respuestaCorrecta: "Bernardino Rivadavia"
        },
        {
            categoria: "Historia Argentina",
            imagen: "ruta/imagen_historia.jpg",
            pregunta: "¿Quién fue el líder militar de la Revolución de Mayo?",
            opciones: ["Juan Manuel de Rosas", "José de San Martín", "Manuel Belgrano", "Domingo Faustino Sarmiento"],
            respuestaCorrecta: "José de San Martín"
        },
        // Preguntas de ciencias
        {
            categoria: "Ciencias",
            imagen: "ruta/imagen_ciencias.jpg", // Ajusta la ruta de la imagen
            pregunta: "¿Cuál es la capa más externa de la Tierra?",
            opciones: ["Núcleo", "Manto", "Corteza", "Núcleo interno"],
            respuestaCorrecta: "Corteza"
        },
        {
            categoria: "Ciencias",
            imagen: "ruta/imagen_ciencias.jpg",
            pregunta: "¿Cuál es el planeta más grande de nuestro sistema solar?",
            opciones: ["Tierra", "Marte", "Júpiter", "Venus"],
            respuestaCorrecta: "Júpiter"
        },
        {
            categoria: "Ciencias",
            imagen: "ruta/imagen_ciencias.jpg",
            pregunta: "¿Qué animal es conocido como el 'rey de la selva'?",
            opciones: ["Elefante", "Gorila", "Tigre", "León"],
            respuestaCorrecta: "León"
        },
        // Preguntas de matemáticas
        {
            categoria: "Matemáticas",
            imagen: "ruta/imagen_matematicas.jpg", // Ajusta la ruta de la imagen
            pregunta: "Si tienes 3 manzanas y compras otras 5, ¿cuántas manzanas tienes en total?",
            opciones: ["2", "8", "15", "20"],
            respuestaCorrecta: "8"
        },
        {
            categoria: "Matemáticas",
            imagen: "ruta/imagen_matematicas.jpg",
            pregunta: "¿Cuánto es 7 multiplicado por 9?",
            opciones: ["16", "49", "63", "72"],
            respuestaCorrecta: "63"
        },
        {
            categoria: "Matemáticas",
            imagen: "ruta/imagen_matematicas.jpg",
            pregunta: "¿Qué número es el doble de 5?",
            opciones: ["10", "15", "20", "25"],
            respuestaCorrecta: "10"
        }
    ];

    let preguntasRestantes = preguntas.slice(); // Crear una copia del arreglo original

    const nivelCategoria = document.getElementById("nivelCategoria");
    const imagenCategoria = document.getElementById("imagenCategoria");
    const pregunta = document.getElementById("pregunta");
    const verificarButton = document.getElementById("verificar");
    const resultado = document.getElementById("resultado");
    const siguienteNivelButton = document.getElementById("siguienteNivelBtn");
    const respuestaText = document.getElementById("respuestaText");

    let nivelActual = null;
    let preguntaActual = null;

    siguienteNivelButton.addEventListener("click", function() {
        mostrarPreguntaAleatoria();
        resultado.textContent = "";
        siguienteNivelButton.disabled = true;
    });

    verificarButton.addEventListener("click", function() {
        const respuestaIngresada = respuestaText.value.trim();

        if (respuestaIngresada === preguntaActual.respuestaCorrecta) {
            resultado.textContent = "¡Respuesta correcta! Puedes avanzar al siguiente nivel.";
            siguienteNivelButton.disabled = false;
        } else {
            resultado.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
            siguienteNivelButton.disabled = true;
        }
    });

    function mostrarPreguntaAleatoria() {
        if (preguntasRestantes.length > 0) {
            const indiceAleatorio = Math.floor(Math.random() * preguntasRestantes.length);
            const preguntaAleatoria = preguntasRestantes.splice(indiceAleatorio, 1)[0];

            nivelActual = preguntaAleatoria.categoria;
            preguntaActual = preguntaAleatoria;

            nivelCategoria.textContent = nivelActual;
            imagenCategoria.src = preguntaAleatoria.imagen;
            pregunta.textContent = preguntaAleatoria.pregunta;

            opcionesList.innerHTML = "";
            preguntaAleatoria.opciones.forEach((opcion, index) => {
                const label = document.createElement("label");
                const input = document.createElement("input");
                input.type = "radio";
                input.name = "opcion";
                input.value = opcion;
                label.appendChild(input);
                label.appendChild(document.createTextNode(opcion));
                opcionesList.appendChild(label);
            });

            siguienteNivelButton.disabled = true;
        } else {
            resultado.textContent = "¡Has completado todas las preguntas!";
            opcionesList.innerHTML = "";
            verificarButton.disabled = true;
            siguienteNivelButton.disabled = true;
        }
    }
    siguienteNivelButton.addEventListener("click", function() {
        limpiarCampos();
    });

    function limpiarCampos() {
        respuestaText.value = ""; // Limpia el campo de texto
        resultado.textContent = ""; // Limpia el mensaje de resultado
        siguienteNivelButton.disabled = true; // Deshabilita el botón de siguiente nivel
    }

    mostrarPreguntaAleatoria();
});
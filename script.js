document.addEventListener("DOMContentLoaded", function() {
    const niveles = [
        {
            objetivo: "console.log('Hola mundo');",
            mensaje: "Usa console.log() para imprimir el mensaje '¡Hola, mundo!' en la consola.",
        },
        {
            objetivo: "console.log('Otro nivel');",
            mensaje: "Imprime el mensaje 'Otro nivel' usando console.log().",
        },
        {
            objetivo: "console.log('Nuevo objetivo');",
            mensaje: "Imprime el mensaje 'Nuevo objetivo' usando console.log().",
        },
        // Puedes agregar más niveles aquí con sus respectivos objetivos y mensajes.
    ];

    let nivelActual = 0;
    const nivelNumero = document.getElementById("nivelNumero");
    const nivelTitulo = document.getElementById("nivelTitulo");
    const objetivo = document.getElementById("objetivo");
    const codigoInput = document.getElementById("codigoInput");
    const verificarButton = document.getElementById("verificar");
    const siguienteButton = document.getElementById("siguiente");
    const siguienteNivelButton = document.getElementById("siguienteNivelBtn");
    const resultado = document.getElementById("resultado");

    actualizarNivel();

    verificarButton.addEventListener("click", function() {
        const codigoIngresado = codigoInput.value.trim();
        const objetivoActual = niveles[nivelActual].objetivo;

        if (codigoIngresado === objetivoActual) {
            resultado.textContent = "¡Correcto! Puedes avanzar al siguiente nivel.";
            siguienteButton.disabled = false;
            siguienteNivelButton.disabled = false;
        } else {
            resultado.textContent = "Incorrecto. Inténtalo de nuevo.";
            siguienteButton.disabled = true;
            siguienteNivelButton.disabled = true;
        }
    });

    siguienteButton.addEventListener("click", function() {
        nivelActual++;
        actualizarNivel();
        resultado.textContent = "";
        codigoInput.value = "";
    });

    siguienteNivelButton.addEventListener("click", function() {
        nivelActual++;
        actualizarNivel();
        resultado.textContent = "";
        codigoInput.value = "";
    });

    function actualizarNivel() {
        if (nivelActual < niveles.length) {
            nivelNumero.textContent = nivelActual + 1;
            nivelTitulo.textContent = niveles[nivelActual].titulo;
            objetivo.textContent = niveles[nivelActual].mensaje;
            codigoInput.value = "";
            siguienteButton.disabled = true;
            siguienteNivelButton.disabled = true;
        } else {
            resultado.textContent = "¡Has completado todos los niveles!";
            codigoInput.disabled = true;
            verificarButton.disabled = true;
            siguienteButton.disabled = true;
            siguienteNivelButton.disabled = true;
        }
    }
});

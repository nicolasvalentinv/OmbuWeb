const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;

const questions = [
    {
      question: "¿Qué etiqueta se utiliza para crear un párrafo en HTML?",
      options: ["<para>", "<p>", "<paragraph>", "<text>"],
      correctAnswer: "<p>"
    },
    {
      question: "¿Qué etiqueta se utiliza para agrupar contenido de navegación en una página web?",
      options: ["<href>", "<section>", "<nav>", "<header>"],
      correctAnswer: "<nav>"
    },
    {
      question: "¿Qué etiqueta se utiliza para insertar una imagen?",
      options: ["<img>", "<image>", "<picture>", "<photo>"],
      correctAnswer: "<img>"
    },
    {
      question: "¿Cuál de las siguientes etiquetas se utiliza para definir la estructura de encabezado de una página web?",
      options: ["<body>", "<header>", "<table-header>", "<nav>"],
      correctAnswer: "<header>"
    },
    {
      question: "¿Qué etiqueta se usa para crear una lista desordenada?",
      options: ["<ul>", "<list>", "<ol>", "<unordered>"],
      correctAnswer: "<ul>"
    },
    {
      question: "¿Cuál de las siguientes etiquetas se utiliza para agrupar contenido relacionado en una página web?",
      options: ["<nav>", "<newline>", "<section>", "<linebreak>"],
      correctAnswer: "<section>"
    },
    {
      question: "¿Qué etiqueta se utiliza para resaltar un texto importante?",
      options: ["<strong>", "<b>", "<em>", "<i>"],
      correctAnswer: "<strong>"
    },
    {
      question: "¿Qué etiqueta se utiliza para crear un enlace a otra página web en HTML?",
      options: ["<link>", "<a>", "<url>", "<href>"],
      correctAnswer: "<a>"
    },
    {
      question: "¿Qué se coloca dentro del elemento <body> en un documento HTML?",
      options: ["Etiquetas de estilo CSS.", "Encabezados de la página.", "Contenido visible de la página, como texto, imágenes y enlaces.", "JavaScript para la interacción del usuario."],
      correctAnswer: "Contenido visible de la página, como texto, imágenes y enlaces."
    },
    {
      question: "¿Qué hace el atributo href en una etiqueta <a> en HTML?",
      options: ["Define el título del enlace.", "Especifica el color del enlace.", "Indica la dirección o URL de destino del enlace.", "Establece el ancho del enlace."],
      correctAnswer: "Indica la dirección o URL de destino del enlace."
    },
    // Agrega más preguntas aquí
  ];

function showQuestion(question) {
  questionElement.textContent = question.question;
  optionsElement.innerHTML = ""; // Limpia las opciones anteriores
  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => {
      answerInput.value = option;
      answerInput.focus();
    });
    optionsElement.appendChild(optionButton);
  });
  answerInput.value = "";
  nextButton.style.display = "none";
  checkButton.style.display = "block";
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer.toLowerCase() === correctAnswer) {
    questionElement.textContent = "¡Respuesta correcta!";
    checkButton.style.display = "none";
    nextButton.style.display = "block";
  } else {
    questionElement.textContent = "Respuesta incorrecta. Inténtalo de nuevo.";
  }
}

checkButton.addEventListener("click", () => {
  const userAnswer = answerInput.value;
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  checkAnswer(userAnswer, correctAnswer);
});

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionElement.textContent = "¡Has completado todas las preguntas!";
    optionsElement.style.display = "none";
    answerInput.style.display = "none";
    checkButton.style.display = "none";
    nextButton.style.display = "none";
  }
});

// Mostrar la primera pregunta al cargar la página
showQuestion(questions[currentQuestionIndex]);

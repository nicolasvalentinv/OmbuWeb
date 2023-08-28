const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const answerInput = document.getElementById("answer");
const checkButton = document.getElementById("checkButton");
const nextButton = document.getElementById("nextButton");

let currentQuestionIndex = 0;

const questions = [
    {
      question: "¿Qué etiqueta se utiliza para crear un párrafo en HTML?",
      options: ["<p>", "<para>", "<paragraph>", "<text>"],
      correctAnswer: "<p>"
    },
    {
      question: "¿Cuál es la etiqueta correcta para crear un enlace?",
      options: ["<a>", "<link>", "<href>", "<anchor>"],
      correctAnswer: "<a>"
    },
    {
      question: "¿Qué etiqueta se utiliza para insertar una imagen?",
      options: ["<img>", "<image>", "<picture>", "<photo>"],
      correctAnswer: "<img>"
    },
    {
      question: "¿Cuál es la etiqueta que define el encabezado de una tabla?",
      options: ["<thead>", "<th>", "<table-header>", "<tr>"],
      correctAnswer: "<thead>"
    },
    {
      question: "¿Qué etiqueta se usa para crear una lista desordenada?",
      options: ["<ul>", "<list>", "<ol>", "<unordered>"],
      correctAnswer: "<ul>"
    },
    {
      question: "¿Cuál es la etiqueta correcta para un salto de línea?",
      options: ["<br>", "<newline>", "<lb>", "<linebreak>"],
      correctAnswer: "<br>"
    },
    {
      question: "¿Qué etiqueta se utiliza para resaltar un texto importante?",
      options: ["<strong>", "<b>", "<em>", "<i>"],
      correctAnswer: "<strong>"
    },
    {
      question: "¿Cuál es la etiqueta que define un enlace a un archivo externo?",
      options: ["<link>", "<a>", "<external>", "<href>"],
      correctAnswer: "<link>"
    },
    {
      question: "¿Qué etiqueta se utiliza para crear una línea horizontal?",
      options: ["<hr>", "<line>", "<horizontal>", "<linebreak>"],
      correctAnswer: "<hr>"
    },
    {
      question: "¿Cuál es la etiqueta correcta para definir una lista ordenada?",
      options: ["<ol>", "<ul>", "<list>", "<ordered>"],
      correctAnswer: "<ol>"
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

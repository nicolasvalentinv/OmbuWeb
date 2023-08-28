// script.js
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const imageElement = document.getElementById('question-image');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button'); // Agrega esta línea

const questions = [
  {
    question: '¿Qué necesita un LED para que no se queme en el circuito?',
    image: './img/resistencia.png',
    answers: [
      { text: 'A. Resistencia', correct: true },
      { text: 'B. Pulsador', correct: false },
      { text: 'C. Servo Motor', correct: false },
      { text: 'D. Estar conectado a la protoboard', correct: false }
    ]
  },
  {
    question: '¿Qué lenguaje de programación se utiliza comúnmente con Arduino?',
    image: './img/lenguaje.png',
    answers: [
      { text: 'A. Python', correct: false },
      { text: 'B. Java', correct: false },
      { text: 'C. C/C++', correct: true },
      { text: 'D. Ruby', correct: false }
    ]
  },
  {
    question: '¿Cuál es el propósito de la función setup() en un programa de Arduino?',
    image: './img/voidsetup.png',
    answers: [
      { text: 'A. Realizar cálculos complejos', correct: false },
      { text: 'B. Definir configuraciones iniciales', correct: true },
      { text: 'C. Ejecutar el bucle principal', correct: false },
      { text: 'D. Enviar datos a través del puerto serial', correct: false }
    ]
  },
  {
    question: '¿Qué es un "LED RGB"?',
    image: './img/ledrgb.png',
    answers: [
      { text: 'A. Un tipo de LED que cambia de color', correct: true },
      { text: 'B. Un sensor de temperatura', correct: false },
      { text: 'C. Una batería recargable', correct: false },
      { text: 'D. Un tipo de cable', correct: false }
    ]
  },
  {
    question: '¿Qué es un "motor servo"?',
    image: './img/servomotor.png',
    answers: [
      { text: 'A. Un tipo de motor que solo funciona en un sentido', correct: false },
      { text: 'B. Un tipo de motor que genera calor', correct: false },
      { text: 'C. Un motor que produce movimiento rotatorio', correct: true },
      { text: 'D. Un motor que produce sonidos', correct: false }
    ]
  },
  {
    question: '¿Qué función realiza un "sensor ultrasónico" en Arduino?',
    image: './img/sensorultrasonico.png',
    answers: [
      { text: 'A. Detecta objetos cercanos midiendo el campo magnético', correct: false },
      { text: 'B. Mide la cantidad de luz en el entorno', correct: false },
      { text: 'C. Mide la temperatura ambiente', correct: false },
      { text: 'D. Mide distancias usando ondas ultrasónicas', correct: true }
    ]
  },
  {
    question: '¿Cuál es la diferencia entre un "pin digital" y un "pin analógico" en Arduino?',
    image: './img/pines.png',
    answers: [
      { text: 'A. Los pines digitales son cuadrados y los analógicos son redondos', correct: false },
      { text: 'B. Los pines digitales solo se usan para entrada y los analógicos solo para salida', correct: false },
      { text: 'C. Los pines digitales solo pueden encender y apagar, mientras que los analógicos pueden tener valores entre 0 y 1023', correct: true },
      { text: 'D. No hay diferencia, son términos intercambiables', correct: false }
    ]
  },
  {
    question: '¿Qué hace un sensor de temperatura en Arduino?',
    image: './img/sensortemp.png',
    answers: [
      { text: 'A. Mide la cantidad de luz en un lugar', correct: false },
      { text: 'B. Controla la velocidad de un motor', correct: false },
      { text: 'C. Mide la humedad del aire', correct: false },
      { text: 'D. Mide la temperatura del entorno', correct: true }
    ]
  },
  {
    question: '¿Cuál es el objetivo de la programación en bloques en Arduino?',
    image: './img/bloques.png',
    answers: [
      { text: 'A. Controlar un automóvil', correct: false },
      { text: 'B. Hacer que el programa sea más difícil', correct: false },
      { text: 'C. Programar utilizando bloques visuales en lugar de escribir código', correct: true },
      { text: 'D. Convertir código en imágenes', correct: false }
    ]
  },
  {
    question: '¿Cuál es la función de un "motor de corriente continua" en proyectos de Arduino?',
    image: './img/motorcc.png',
    answers: [
      { text: 'A. Generar electricidad', correct: false },
      { text: 'B. Convertir corriente continua en corriente alterna', correct: false },
      { text: 'C. Realizar operaciones matemáticas complejas', correct: false },
      { text: 'D. Proporcionar movimiento en una dirección específica', correct: true }
    ]
  },
  // Agrega más preguntas aquí
];


const progressBar = document.getElementById('progress-bar');
const totalLevels = questions.length;
let score = 0;

let currentQuestionIndex = 0;
let shuffledQuestions = [...questions];

function shuffleQuestions() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
    nextButton.style.display = 'none';
    updateProgressBar();
  } else {
    questionContainer.innerHTML = '<h2>Juego completado. ¡Bien hecho!</h2>';
    answerButtons.style.display = 'none';
    nextButton.style.display = 'none';
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  imageElement.src = question.image;

  question.answers.forEach((answer, index) => {
    const btn = document.getElementById(`btn-${index}`);
    btn.innerText = answer.text;
    btn.classList.remove('correct', 'wrong');
    btn.addEventListener('click', () => selectAnswer(answer.correct, btn));
  });
}

function selectAnswer(isCorrect, btn) {
  if (isCorrect) {
    btn.classList.add('correct');
    nextButton.style.display = 'block';
  } else {
    btn.classList.add('wrong');
  }
}

function updateProgressBar() {
  const progress = (currentQuestionIndex / totalLevels) * 100;
  progressBar.style.width = `${progress}%`;

  if (score >= 0) {
    progressBar.classList.remove('wrong');
  } else {
    progressBar.classList.add('wrong');
  }
}

shuffleQuestions();
showQuestion(shuffledQuestions[currentQuestionIndex]);
nextButton.addEventListener('click', showNextQuestion);


// ---------------------------------------------------------------------- ---------------------------------------------------------
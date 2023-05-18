const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove('fade-in');
    }
  });
});

sections.forEach(section => observer.observe(section));


// Array of motivational phrases
const motivationalPhrases = [
  "Success is the sum of small efforts repeated day in and day out.",
  "The only place where success comes before work is in the dictionary.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you do, you'll be successful.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you do, you will be successful.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Success in business is about loving what you do, and working hard at it.",
  "Success is not the result of luck, but of hard work, perseverance, and constant learning.",
  "Failure is not the end, but an opportunity to learn, grow, and improve on the path to success.",
  "Success is not only measured in terms of money, but in the satisfaction of achieving goals and making a difference.",
  "True success lies in getting up every time you fall and continuing with determination."
];

// Function to display a random motivational phrase
function showMotivationalPhrase() {
  const phraseElement = document.getElementById("motivational-phrase");
  const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
  const phrase = motivationalPhrases[randomIndex];
  phraseElement.textContent = `"${phrase}"`;
}

// Show a random motivational phrase when the page loads
showMotivationalPhrase();


// Obtener referencias a los elementos
const themeButtons = document.getElementsByClassName('theme-button');
const htmlCssDemos = document.getElementById('html-css-demos');
const angularDemos = document.getElementById('angular-demos');
const reactDemos = document.getElementById('react-demos');
const bootstrapDemos = document.getElementById('bootstrap-demos');

// Agregar evento de clic a cada botón
Array.from(themeButtons).forEach(function(button) {
  button.addEventListener('click', function() {
    // Ocultar todos los contenedores de demos
    htmlCssDemos.style.display = 'none';
    angularDemos.style.display = 'none';
    reactDemos.style.display = 'none';
    bootstrapDemos.style.display = 'none';

    // Mostrar el contenedor correspondiente al tema seleccionado
    const selectedTheme = button.getAttribute('data-theme');
    document.getElementById(selectedTheme + '-demos').style.display = 'block';
  });
});

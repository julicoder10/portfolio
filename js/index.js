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


const numero = document.getElementById('numero');

numero.addEventListener('click', () => {
  // Crear un elemento de texto temporal para copiar el número
  const tempInput = document.createElement('input');
  tempInput.setAttribute('value', numero.innerText);
  document.body.appendChild(tempInput);

  // Seleccionar y copiar el número
  tempInput.select();
  document.execCommand('copy');

  // Eliminar el elemento de texto temporal
  document.body.removeChild(tempInput);

  // Añadir un mensaje de confirmación
  alert('El número ha sido copiado al portapapeles.');
});
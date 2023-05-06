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

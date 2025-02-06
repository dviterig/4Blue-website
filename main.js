/*******************
 * NAVBAR LOGIC
 *******************/
const navbar = document.getElementById('navbar');

// Calculate 1vh in pixels initially
let oneVH = window.innerHeight / 100;

// Recalculate on resize
window.addEventListener('resize', () => {
  oneVH = window.innerHeight / 100;
});

// Listen to scroll
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll <= (oneVH * 100)/3) {
    navbar.classList.remove('bg-white', 'bg-opacity');
    navbar.classList.add('bg-transparent');
  }
  else if (currentScroll > (oneVH * 100)/3 && currentScroll < oneVH * 200) {
    navbar.classList.remove('bg-opacity', 'bg-transparent');
    navbar.classList.add('bg-white');
  }
  else if (currentScroll >= oneVH * 200 && currentScroll < oneVH * 300) {
    navbar.classList.remove('bg-white', 'bg-transparent');
    navbar.classList.add('bg-opacity');
  }
  else {
    navbar.classList.remove('bg-opacity', 'bg-transparent');
    navbar.classList.add('bg-white');
  }
});

/*******************
 * SIDEBAR LOGIC
 *******************/
const sidebar = document.getElementById('sidebar');
const sidebarLinks = document.querySelectorAll('#sidebar a');
const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerBtn = hamburgerButton.querySelector('button');

// Toggle sidebar on hamburger button click
hamburgerBtn.addEventListener('click', (event) => {
  event.stopPropagation();
  sidebar.classList.toggle('open');
});

// Hide the sidebar when a link inside it is clicked
sidebarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Close sidebar if clicking outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !hamburgerButton.contains(event.target)) {
    sidebar.classList.remove('open');
  }
});

// Prevent sidebar clicks from closing it
sidebar.addEventListener('click', (event) => {
  event.stopPropagation();
});

/********************
 * "QUÉ OFRECEMOS" TOGGLE LOGIC
 ********************/
const texts = [
  "El actual entorno macroeconómico global requiere de soluciones tecnológicas cada vez más complejas y dinámicas. La rapidez de los cambios y la propia inercia de las grandes empresas de servicios profesionales deriva en una industrialización de la profesión, perdiendo a menudo el foco en las necesidades de negocio con una visión completa, ofreciendo una propuesta de valor fuertemente apalancada en la solución técnica y exigiendo de los clientes una mayor dedicación para asegurar el cumplimiento de sus expectativas.",
  "Ahora, más que nunca, es clave la correcta integración de las necesidades reales de negocio con el marco tecnológico que dé soporte a estas necesidades. Nuestra visión, por tanto, se centra en incorporar valor a nuestros clientes a través de nuestra experiencia real en los propios clientes, la optimización de sus procesos de negocio y la implantación de las soluciones tecnológicas más convenientes, siempre bajo una visión global.",
  "El cambio se ha convertido en el principal motor de evolución de los mercados. Las compañías, para garantizar el éxito de sus proyectos, buscan cada vez más colaboradores con una sólida y contrastada experiencia en proyectos de transformación, que sean capaces de hablar su mismo idioma y que sean sensibles a sus necesidades reales. En FOUR BLUE abordamos los proyectos de nuestros clientes bajo una perspectiva global e integradora, basándonos en los inductores fundamentales del cambio.",
  "Somos unos absolutos convencidos que en consultoría existe un valor diferencial: las personas que realizan los trabajos. Es la capacidad de los miembros del equipo lo que determina el éxito del proyecto. También estamos convencidos de la necesidad de ser flexibles, incorporar recursos en función de las necesidades del proyecto y ser ágiles en ello es fundamental para el éxito del mismo. La experiencia nos otorga conocimiento y credenciales en nuestros clientes, por ello, en FOUR BLUE trabajamos con clientes que nos conozcan, que hayan visto nuestro desempeño previamente, que deseen seguir trabajando con nosotros. Porque ni sabemos ni queremos hacer las cosas de otra manera."
];

const images = [
  "images/nuestra-vision-1.png",
  "images/nuestra-vision-2.jpg",
  "images/nuestra-vision-3.jpg",
  "images/nuestra-vision-4.jpg"
];

let currentIndex = 0;

const toggleText = document.getElementById("toggle-text");
const toggleImage = document.getElementById("toggle-image");
const toggleButton = document.getElementById("toggle-text-button");
const toggleState = document.getElementById("toggle-state");

if (toggleButton) {
  toggleButton.addEventListener("click", handleToggle);
  toggleButton.addEventListener("touchend", handleToggle);
}

function handleToggle(event) {
  event.preventDefault();

  // Fade out current text and image
  toggleText.style.opacity = 0;
  toggleImage.style.opacity = 0;

  setTimeout(() => {
    // Move to next index
    currentIndex = (currentIndex + 1) % texts.length;

    // Update text & index display
    toggleText.textContent = texts[currentIndex];
    toggleState.textContent = `${currentIndex + 1}/${texts.length}`;
    toggleButton.blur();

    // Preload new image
    const newSrc = images[currentIndex];
    const tempImage = new Image();
    tempImage.onload = () => {
      toggleImage.src = newSrc;
      // Fade in new text and image
      toggleText.style.opacity = 1;
      toggleImage.style.opacity = 1;
    };
    tempImage.src = newSrc;
  }, 300);
}

/*******************
 * FOOTER YEAR
 *******************/
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
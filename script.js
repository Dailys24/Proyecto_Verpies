/// Variable global para llevar el control del índice del slide actual del slider principal
let slideIndex = 1;
// Inicializa el slider principal
showSlides(slideIndex);

// Función para avanzar/retroceder los slides en el slider principal
function moveSlide(n) {
  // Incrementa o decrementa slideIndex y muestra el slide correspondiente
  showSlides(slideIndex += n);
}

// Función para ir a un slide específico en el slider principal usando los puntos
function currentSlide(n) {
  // Establece slideIndex al número dado y muestra ese slide
  showSlides(slideIndex = n);
}

// Función para mostrar el slide especificado para el slider principal
function showSlides(n) {
  let i;
  // Obtiene todos los elementos con la clase "hero-slide" (slides individuales)
  let slides = document.getElementsByClassName("hero-slide");
  // Obtiene todos los elementos con la clase "dot" (puntos de navegación)
  let dots = document.getElementsByClassName("dot");
  // Obtiene el elemento de la sección principal del héroe
  let heroSection = document.querySelector(".hero");  

  // Si el índice del siguiente slide es mayor que el número total de slides, vuelve al primer slide
  if (n > slides.length) {
    slideIndex = 1;
  }
  // Si el índice del slide anterior es menor que el primero, va al último slide
  if (n < 1) {
    slideIndex = slides.length;
  }

  // Itera sobre todos los slides para ocultarlos y deshabilitar los eventos de puntero
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0; // Oculta el slide
    slides[i].style.pointerEvents = 'none'; // Deshabilita clics en slides ocultos
  }
  // Itera sobre todos los puntos para quitar la clase 'active'
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Obtiene el elemento del slide actual basado en slideIndex
  const currentSlideElement = slides[slideIndex - 1];
  // Establece la opacidad a 1 para hacer visible el slide actual
  currentSlideElement.style.opacity = 1; 
  // Habilita clics en el slide visible
  currentSlideElement.style.pointerEvents = 'auto'; 
  // Añade la clase 'active' al punto correspondiente
  if (dots[slideIndex - 1]) {
    dots[slideIndex - 1].className += " active";
  }

  // Obtiene la ruta de la imagen de fondo del atributo 'data-background' del slide actual
  const background = currentSlideElement.getAttribute('data-background');
  if (background) {
    // Establece la imagen de fondo de la sección del héroe
    heroSection.style.backgroundImage = `url('${background}')`;
  } else {
    // Si no se especifica data-background, establece una imagen por defecto
    heroSection.style.backgroundImage = `url('Foto1.jpg')`; 
  }
}

// Variable para almacenar el ID del intervalo para el auto-avance del slider principal
let autoSlideInterval;

// Función para iniciar la presentación de diapositivas automática para el slider principal
function startAutoSlide() {
  clearInterval(autoSlideInterval); // Limpia cualquier intervalo anterior para evitar duplicados
  autoSlideInterval = setInterval(() => {
    moveSlide(1); // Cambia de slide cada 5 segundos
  }, 5000); 
}

// Función para detener la presentación de diapositivas automática para el slider principal
function stopAutoSlide() {
  clearInterval(autoSlideInterval); // Limpia el intervalo
}

// Inicia el auto-avance al cargar la página
startAutoSlide();

// Detiene el auto-avance al pasar el ratón por el hero y lo reanuda al salir
document.querySelector('.hero').addEventListener('mouseenter', stopAutoSlide);
document.querySelector('.hero').addEventListener('mouseleave', startAutoSlide);


// **************** NUEVO JAVASCRIPT PARA EL SLIDER DE ANCHO COMPLETO ****************

// Variable global para llevar el control del índice del slide actual para el slider de ancho completo
let fwSlideIndex = 1;
// Inicializa el slider de ancho completo
showFwSlides(fwSlideIndex);

// Función para avanzar/retroceder los slides para el slider de ancho completo
function moveFwSlide(n) {
  // Incrementa o decrementa fwSlideIndex y muestra el slide correspondiente
  showFwSlides(fwSlideIndex += n);
}

// Función para ir a un slide específico para el slider de ancho completo usando los puntos
function currentFwSlide(n) {
  // Establece fwSlideIndex al número dado y muestra ese slide
  showFwSlides(fwSlideIndex = n);
}

// Función para mostrar el slide especificado para el slider de ancho completo
function showFwSlides(n) {
    let i;
    // Obtiene todos los elementos con la clase "full-width-slide"
    let slides = document.getElementsByClassName("full-width-slide");
    // Obtiene todos los elementos con la clase "dot-fw"
    let dots = document.getElementsByClassName("dot-fw");
    // Obtiene la sección de imagen de ancho completo por su ID
    let fullWidthSection = document.getElementById("fullWidthSlider"); 

    // Si el índice del siguiente slide es mayor que el número total de slides, vuelve al primer slide
    if (n > slides.length) {
        fwSlideIndex = 1;
    }
    // Si el índice del slide anterior es menor que el primero, va al último slide
    if (n < 1) {
        fwSlideIndex = slides.length;
    }

    // Itera sobre todos los slides para ocultarlos y deshabilitar los eventos de puntero
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = 0;
        slides[i].style.pointerEvents = 'none';
    }
    // Itera sobre todos los puntos para quitar la clase 'fw-active'
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" fw-active", "");
    }

    // Obtiene el elemento del slide actual
    const currentSlideElement = slides[fwSlideIndex - 1];
    // Hace visible el slide actual
    currentSlideElement.style.opacity = 1;
    // Habilita clics en el slide visible
    currentSlideElement.style.pointerEvents = 'auto';
    // Añade la clase 'fw-active' al punto correspondiente
    dots[fwSlideIndex - 1].className += " fw-active";

    // Obtiene la ruta de la imagen de fondo para el slider de ancho completo
    const background = currentSlideElement.getAttribute('data-background');
    if (background) {
        // Establece la imagen de fondo de la sección de ancho completo
        fullWidthSection.style.backgroundImage = `url('${background}')`;
    } else {
        // Fondo por defecto si no se especifica ninguno para un slide
        fullWidthSection.style.backgroundImage = `url('fotos/Foto2.jpg')`;
    }
}

// Variable para almacenar el ID del intervalo para el auto-avance del slider de ancho completo
let autoFwSlideInterval;

// Función para iniciar el auto-avance del slider de ancho completo
function startAutoFwSlide() {
  autoFwSlideInterval = setInterval(() => {
    moveFwSlide(1); // Cambia de slide cada 5 segundos
  }, 5000); // Intervalo diferente para variedad, o mantener el mismo
}

// Función para detener el auto-avance del slider de ancho completo
function stopAutoFwSlide() {
  clearInterval(autoFwSlideInterval);
}

// Inicia el auto-avance para el slider de ancho completo
startAutoFwSlide();

// Pausa/reanuda el auto-avance al pasar el ratón por el slider de ancho completo
document.querySelector('#fullWidthSlider').addEventListener('mouseenter', stopAutoFwSlide);
document.querySelector('#fullWidthSlider').addEventListener('mouseleave', startAutoFwSlide);


// **************** NUEVO JAVASCRIPT PARA EL SLIDER DE RESULTADOS DE PACIENTES ****************

// Variable global para llevar el control del índice del slide actual para el slider de resultados
let resultsSlideIndex = 0; // Usar 0-based index for transform

// Inicializa el slider de resultados
showResultsSlides(resultsSlideIndex);

// Función para avanzar/retroceder los slides en el slider de resultados
function moveResultsSlide(n) {
  resultsSlideIndex += n;
  showResultsSlides(resultsSlideIndex);
}

// Función para ir a un slide específico en el slider de resultados usando los puntos
function currentResultsSlide(n) {
  resultsSlideIndex = n - 1; // Convertir 1-based a 0-based
  showResultsSlides(resultsSlideIndex);
}

// Función para mostrar el slide especificado para el slider de resultados
function showResultsSlides(n) {
  let i;
  let slidesContainer = document.querySelector(".results-slides-container");
  let slides = document.getElementsByClassName("results-slide");
  let dots = document.getElementsByClassName("results-dot");

  if (n >= slides.length) {
    resultsSlideIndex = 0; // Vuelve al primer slide (0-based)
  }
  if (n < 0) {
    resultsSlideIndex = slides.length - 1; // Va al último slide (0-based)
  }

  // Actualiza la transformación para mostrar el slide correcto
  slidesContainer.style.transform = `translateX(${-resultsSlideIndex * 100}%)`;

  // Remueve la clase 'active' de todos los puntos
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Añade la clase 'active' al punto correspondiente
  dots[resultsSlideIndex].className += " active";
}

// Variable para almacenar el ID del intervalo para el auto-avance del slider de resultados
let autoResultsSlideInterval;

// Función para iniciar la presentación de diapositivas automática para el slider de resultados
function startAutoResultsSlide() {
  autoResultsSlideInterval = setInterval(() => {
    moveResultsSlide(1); // Cambia de slide cada 5 segundos
  }, 5000); 
}

// Función para detener la presentación de diapositivas automática para el slider de resultados
function stopAutoResultsSlide() {
  clearInterval(autoResultsSlideInterval); // Limpia el intervalo
}

// Inicia el auto-avance al cargar la página
startAutoSlide();

// Detiene el auto-avance al pasar el ratón por el slider y lo reanuda al salir
document.querySelector('.results-slider').addEventListener('mouseenter', stopAutoResultsSlide);
document.querySelector('.results-slider').addEventListener('mouseleave', startAutoResultsSlide);


// **************** JAVASCRIPT PARA EL FAQ ****************

// Event listener para cuando el contenido del DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos h3 dentro de un faq-item y los itera
    document.querySelectorAll('.faq-item h3').forEach(item => {
        // Añade un event listener de clic a cada h3
        item.addEventListener('click', () => {
            // Encuentra el elemento padre más cercano con la clase 'faq-item'
            const faqItem = item.closest('.faq-item');
            // Alterna la clase 'active' en el faq-item para expandir/colapsar la respuesta
            faqItem.classList.toggle('active');
        });
    });

// **************** NUEVO JAVASCRIPT PARA EL SCROLL ACTIVO EN LA NAVEGACIÓN ****************
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar nav ul li a');

const observerOptions = {
    root: null, // el viewport (ventana gráfica)
    rootMargin: '0px',
    threshold: 0.5 // Ajusta este valor: 0.5 significa que cuando el 50% de la sección es visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Primero, elimina la clase 'active' de todos los enlaces
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Agrega la clase 'active' al enlace que corresponde a la sección en intersección
            const currentSectionId = entry.target.id;
            const correspondingLink = document.querySelector(`.navbar nav ul li a[href="#${currentSectionId}"]`);
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Asegura que el enlace inicial activo al cargar la página se base en el hash de la URL o por defecto sea 'inicio'
const initialHash = window.location.hash || '#inicio';
const initialActiveLink = document.querySelector(`.navbar nav ul li a[href="${initialHash}"]`);
if (initialActiveLink) {
    initialActiveLink.classList.add('active');
}

// Agrega un 'click listener' a los enlaces de navegación para establecer inmediatamente la clase 'active' y hacer scroll
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Elimina 'active' de todos los enlaces
        navLinks.forEach(el => el.classList.remove('active'));
        // Agrega 'active' al enlace clickeado
        this.classList.add('active');

        // Desplazamiento suave a la sección
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            e.preventDefault(); // Previene el comportamiento predeterminado del hash
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
});
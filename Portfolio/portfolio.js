// HEADER
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".header__toggle");
  const nav = document.querySelector(".header__nav");

  toggleButton.addEventListener("click", () => {
    nav.classList.toggle("header__nav--active");
  });
});




// ALERTA INTRO
function handleButtonClick(response) {
  const alertContainer = document.getElementById('alert-container');
  const alertText = document.getElementById('alert-text');


  if (response === 'yes') {
    alertText.textContent = 'Bienvenido! Espero sorprenderte y que nos volvamos a ver😉';
  } else if (response === 'no') {
    alertText.textContent = '¡Me alegra verte de vuelta!😎 Siempre es un placer tenerte por aquí.';
  }


  alertContainer.style.display = 'block';
}


function closeAlert() {
  const alertContainer = document.getElementById('alert-container');
  alertContainer.style.display = 'none';
}



// SOBRE MI
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector('.about-me__title');
  title.classList.add('about-me__title--visible');
});



// SERVICIOS
document.querySelectorAll('.servicios__link').forEach((link) => {
  link.addEventListener('mouseover', function () {
    const newImage = this.getAttribute('data-imagen');
    const imageElement = document.querySelector('.servicios__imagen-content');
    imageElement.style.opacity = '0';
    setTimeout(() => {
      imageElement.src = newImage;
      imageElement.style.opacity = '1';
    }, 200);
  });
});




// PACKAGING
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.image-grid__item');
  const modal = document.getElementById('modal');
  const modalImage = document.querySelector('.modal__image');
  const modalClose = document.querySelector('.modal__close');

  images.forEach((image) => {
    image.addEventListener('click', () => {
      const imageUrl = image.getAttribute('data-modal');
      modalImage.src = imageUrl;
      modal.classList.add('modal--open');
    });
  });


  modalClose.addEventListener('click', () => {
    modal.classList.remove('modal--open');
    modalImage.src = ''; 
  });


  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('modal--open');
      modalImage.src = ''; 
    }
  });
});




// SOCIAL MEDIA
let currentIndex = 0;

// Función para navegar por las imágenes
function navigate(direction) {
  const galleryContainer = document.querySelector('.slider-container');
  const totalImages = document.querySelectorAll('.slider-item').length;

  // Ajustar el índice de la imagen actual
  currentIndex = (currentIndex + direction + totalImages) % totalImages;

  // Calcular el desplazamiento
  const offset = -currentIndex * 100; // Cada slide ocupa el 100%
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

// Botones de navegación
document.querySelector('.prev-button').addEventListener('click', () => {
  navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
  navigate(1);
});

// Autoplay
let autoplayInterval = null;

function startAutoplay(interval) {
  stopAutoplay();
  autoplayInterval = setInterval(() => {
    navigate(1);
  }, interval);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

startAutoplay(3000); // Cambiar cada 3 segundos

// Detener autoplay al hacer clic en un botón
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', stopAutoplay);
});











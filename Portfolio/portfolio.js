
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
// emociones
let currentIndexEmociones = 0;

function navigateEmociones(direction) {
  const galleryContainer = document.querySelector('.emociones-container');
  const totalImages = document.querySelectorAll('.emociones-item').length;

  currentIndexEmociones = (currentIndexEmociones + direction + totalImages) % totalImages;

  const offset = -currentIndexEmociones * 100;
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.emociones-navigation__button--prev').addEventListener('click', () => {
  navigateEmociones(-1);
});

document.querySelector('.emociones-navigation__button--next').addEventListener('click', () => {
  navigateEmociones(1);
});


// qaizzo
let currentIndexQaizzo = 0;

function navigateQaizzo(direction) {
  const galleryContainer = document.querySelector('.qaizzo-container');
  const totalImages = document.querySelectorAll('.qaizzo-item').length;

  currentIndexQaizzo = (currentIndexQaizzo + direction + totalImages) % totalImages;

  const offset = -currentIndexQaizzo * 100;
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.qaizzo-navigation__button--prev').addEventListener('click', () => {
  navigateQaizzo(-1);
});

document.querySelector('.qaizzo-navigation__button--next').addEventListener('click', () => {
  navigateQaizzo(1);
});





// BRANDING

// lagama
let currentIndexlagama = 0;

function navigatelagama(direction) {
  const galleryContainer = document.querySelector('.lagama-container');
  const totalImages = document.querySelectorAll('.lagama-item').length;

  currentIndexlagama = (currentIndexlagama + direction + totalImages) % totalImages;

  const offset = -currentIndexlagama * 100;
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.lagama-navigation__button--prev').addEventListener('click', () => {
  navigatelagama(-1);
});

document.querySelector('.lagama-navigation__button--next').addEventListener('click', () => {
  navigatelagama(1);
});

// qaiso
let currentIndexqaiso = 0;

function navigateqaiso(direction) {
  const galleryContainer = document.querySelector('.qaiso-container');
  const totalImages = document.querySelectorAll('.qaiso-item').length;

  currentIndexqaiso = (currentIndexqaiso + direction + totalImages) % totalImages;

  const offset = -currentIndexqaiso * 100;
  galleryContainer.style.transform = `translateX(${offset}%)`;
}

document.querySelector('.qaiso-navigation__button--prev').addEventListener('click', () => {
  navigateqaiso(-1);
});

document.querySelector('.qaiso-navigation__button--next').addEventListener('click', () => {
  navigateqaiso(1);
});










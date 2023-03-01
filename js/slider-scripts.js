// Declarar las variables y constantes
const SLIDER = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider-section');
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

// Situamos la última imagen en la primera posición
SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);

// Mover el slider a la derecha
function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    SLIDER.style.marginLeft = '-200%';
    // Comentar la línea de abajo si queremos evitar el efecto de desplazamiento
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(function(){
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('beforeend', sliderSectionFirst);
        SLIDER.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener('click', moverDerecha);

// Mover el slider a la izquierda
function moverIzquierda(){
    let sliderSection = document.querySelectorAll('.slider-section');
    let sliderSectionLast = sliderSection[sliderSection.length-1];
    SLIDER.style.marginLeft = '0';
    // Comentar la línea de abajo si queremos evitar el efecto de desplazamiento
    SLIDER.style.transition = 'all 0.5s';
    setTimeout(function(){
        SLIDER.style.transition = 'none';
        SLIDER.insertAdjacentElement('afterbegin', sliderSectionLast);
        SLIDER.style.marginLeft = '-100%';
    }, 500);
}

btnLeft.addEventListener('click', moverIzquierda);

// Automatizar el movimiento
// Declaración de variables
let btnMenu = document.getElementById('cruz');
let aspa = document.getElementById('cruz');
let menu = document.getElementById('menu');

// Muestra el menú hamburguesa o lo oculta
// btnMenu.addEventListener('click', muestraMenu);

// function muestraMenu(){
//     menu.classList.toggle('mostrar');
//     aspa.classList.toggle('fa-times');
// }

btnMenu.addEventListener('click', ()=>{
    console.log('Hola hola caracola!!!');
    menu.classList.toggle('mostrar');
    aspa.classList.toggle('fa-times');
});
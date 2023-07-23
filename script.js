// console.log('Hello, world');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');  // muestra el primero que encuentra
const ps = document.querySelectorAll('p');  // muestra todas las etiquetas p
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1);
console.log(input.value);

console.log({
    h1,
    p,
    ps,
    parrafito,
    pid,
    input
});

// h1.innerHTML = 'Nuevo titulo <br> Otra linea';   // ejecuta codigo HTML
h1.innerText = 'Nuevo titulo <br> Otra linea'; // no ejecuta codigo html
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

// funcion especifica para clases
h1.classList.add('rojo');
h1.classList.remove('verde');
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

input.value = '456';

const img = document.createElement('img');
img.setAttribute('src', './images/doggy.jpg');
console.log(img);

pid.innerHTML = '';
pid.append(img);
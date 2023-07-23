
const input1 = document.querySelector('#calculo');
const input2 = document.getElementById('calculo2');
const btn = document.querySelector('#btnCalcular');
const form = document.querySelector('#form');

const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

// btn.addEventListener('click', btnOnClick);

// function btnOnClick() {
//      console.log(parseInt(input1.value) + parseInt(input2.value));
//      const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
//      console.log('Resultado: ' + sumaInputs);
//      pResult.innerText = "Resultado: " + sumaInputs;
// }

function sumarInputValues(event) {
    console.log(event);
    event.preventDefault();
    console.log(parseInt(input1.value) + parseInt(input2.value));
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    console.log('Resultado: ' + sumaInputs);
    pResult.innerText = "Resultado: " + sumaInputs;
}
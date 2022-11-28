const h1 = document.querySelector("h1");
const input1 = document.getElementById("calculo1");
const input2 = document.getElementById("calculo2");
const btn = document.getElementById("btnCalcular");
const result = document.getElementById("result");
const form = document.getElementById("form");

form.addEventListener("submit", sumarInputsValues);

function sumarInputsValues(event) {
  console.log({ event });
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  result.innerText = "El resultado es: " + sumaInputs;
}

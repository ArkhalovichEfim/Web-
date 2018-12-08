var button = document.getElementById("knopka");
var celsius = document.getElementById("Cels");
var farenheit = document.getElementById("Far");
var count = 0;

function print() {
    var temp = Number(celsius.value);
    farenheit.value = 9/5 * temp +32;
}

button.addEventListener("click", print);
var row, column;
var square;
var container = document.getElementById("container");

for (row = 0; row < 12; ++row) {
    for (column = 0; column < 12; ++column) {
        square = document.createElement("div");
        if ((row + column) % 2 == 0) {
            square.style.backgroundColor = "white";
        } else {
             square.style.backgroundColor = "blue";
        }
        square.classList.add("square");
        container.appendChild(square);
    }
}
let span = document.getElementById("span");
let input = document.getElementById("email");
let button = document.getElementById("button");
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", cambiarNombre);

function cambiarNombre(e) {
    e.preventDefault();
    span.innerHTML = input.value;
}



let parrafo = document.getElementById("p");
let p = document.createElement("p");
p.innerHTML = "Hello World";
parrafo.append(p);



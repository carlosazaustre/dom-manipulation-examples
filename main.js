// Seleccionar Elementos del DOM
let title = document.getElementById("title");
console.log(title.innerText);

let mainDiv = document.querySelector(".main-div");
let listItems = document.querySelectorAll("ul.list > li");

// Modificar Elementos del DOM
// - Cambiar contenido
title.innerText = "Manipulando el DOM";
title.innerHTML = "<strong>Nuevo</strong> título";

// - Modificar atributos y clases
let image = document.querySelector("img");
image.setAttribute("src", "bun-logo.svg");
image.classList.add("img-responsive");
// - Estilos
mainDiv.style.backgroundColor = "#ffcc00";

// Crear y Eliminar Elementos del DOM
// - Crear elementos
let newDiv = document.createElement("div");
newDiv.innerText = "Soy un div nuevo";
document.body.appendChild(newDiv);

// - Eliminar elementos
let oldDiv = document.querySelector(".old-div");
document.body.removeChild(oldDiv);

// Eventos en el DOM
// - Escuchar eventos
let button = document.querySelector("button");
button.addEventListener("click", function () {
	alert("¡Botón presionado!");
});

// Evento con parámetros
function showMessage(message) {
	alert(message);
}

button.addEventListener("click", function () {
	showMessage("¡Mensaje personalizado!");
});

// Crear una lista dinámica
let input = document.getElementById("itemInput");
let addButton = document.getElementById("addButton");
let list = document.getElementById("dynamicList");

addButton.addEventListener("click", function () {
	if (input.value.trim() !== "") {
		let newItem = document.createElement("li");
		newItem.innerText = input.value;
		list.appendChild(newItem);
		input.value = ""; // Limpiar el input
	}
});

// Filtrado de elementos del DOM
const filterInput = document.getElementById("filterInput");
const itemsList = document.getElementById("itemsList");

filterInput.addEventListener("keyup", function () {
	const term = filterInput.value.toLowerCase();
	const items = itemsList.getElementsByTagName("li");

	Array.from(items).forEach(function (item) {
		if (item.textContent.toLowerCase().indexOf(term) !== -1) {
			item.style.display = "block";
		} else {
			item.style.display = "none";
		}
	});
});

// Drag and Drop
const draggable = document.getElementById('draggable');
const dropzone = document.getElementById('dropzone');

draggable.addEventListener('dragstart', function() {
    setTimeout(() => { this.style.display = 'none'; }, 0);
});

dropzone.addEventListener('dragover', function(e) {
    e.preventDefault();
});

dropzone.addEventListener('drop', function() {
    draggable.style.display = 'block';
    this.append(draggable);
});


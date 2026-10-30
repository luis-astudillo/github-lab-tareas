
const tareas = [
  "Aprender Git y GitHub",
  "Crear mi primer Issue",
  "Publicar mi primera aplicación"
];

const lista = document.getElementById("lista-tareas");

tareas.forEach((tarea) => {
  const elemento = document.createElement("li");
  elemento.textContent = tarea;
  lista.appendChild(elemento);
});

const campoTarea = document.getElementById("nueva-tarea");
const botonAgregar = document.getElementById("agregar-tarea");

botonAgregar.addEventListener("click", () => {
  const texto = campoTarea.value.trim();

  if (texto === "") {
    return;
  }

  const nuevaTarea = document.createElement("li");
  nuevaTarea.textContent = texto;
  lista.appendChild(nuevaTarea);

  campoTarea.value = "";
});

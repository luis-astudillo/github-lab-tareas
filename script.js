
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

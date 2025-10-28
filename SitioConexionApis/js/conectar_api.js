const categoria_de_libros_herejia_de_horus = document.querySelector(".categoria_de_libros_herejia_de_horus");
const contenedor_libros = document.querySelector(".contenedor_libros");
const plantilla_libro = document.querySelector(".plantilla_libro");
plantilla_libro.remove();


fetch("http://localhost:3000/").then(recurso => recurso.json()).then(archivo => {


})

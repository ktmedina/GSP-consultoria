
// Obtenemos todos los elementos h3 con clase "proyecto" y los párrafos correspondientes
const proyectoHeaders = document.querySelectorAll('.proyecto');
const proyectoParrafos = document.querySelectorAll('.hidden');

// Agregamos un evento de clic a cada encabezado de proyecto
proyectoHeaders.forEach((header) => {
    header.addEventListener('click', () => {
        // Eliminamos la clase "active" de todos los h3
        proyectoHeaders.forEach((h3) => {
            h3.classList.remove('active');
        });

        // Agregamos la clase "active" al h3 clicado
        header.classList.add('active');

        // Obtener el ID del párrafo correspondiente al h3 clicado
        const idDelParrafo = 'p-' + header.id;
        const parrafoCorrespondiente = document.getElementById(idDelParrafo);

        // Ocultamos todos los párrafos
        proyectoParrafos.forEach((parrafo) => {
            parrafo.classList.add('hidden');
        });

        // Mostramos el párrafo correspondiente al proyecto seleccionado
        parrafoCorrespondiente.classList.remove('hidden');
    });
});


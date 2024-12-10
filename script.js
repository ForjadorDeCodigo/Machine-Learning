document.addEventListener('DOMContentLoaded', () => {
    const botonClasificar = document.getElementById('boton-clasificar');
    if (botonClasificar) {
        botonClasificar.addEventListener('click', () => {
            const texto = document.getElementById('texto-clasificacion').value;
            const resultado = document.getElementById('resultado-clasificacion');

            // Limpiar el resultado anterior
            resultado.textContent = '';

            // Utilizar la biblioteca badwords para la clasificación de texto
            const Filter = window.Filter;
            if (Filter) {
                const filter = new Filter();
                const isToxic = filter.isProfane(texto);

                // Mostrar el resultado
                if (isToxic) {
                    resultado.textContent = 'El texto contiene lenguaje tóxico.';
                } else {
                    resultado.textContent = 'El texto no contiene lenguaje tóxico.';
                }
            } else {
                console.error('La biblioteca badwords no se ha cargado correctamente.');
                resultado.textContent = 'Ocurrió un error al procesar el texto. Por favor, inténtalo de nuevo.';
            }
        });
    } else {
        console.error('El botón de clasificación no se encontró en el DOM.');
    }
});

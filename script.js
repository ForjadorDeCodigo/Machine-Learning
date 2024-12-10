document.addEventListener('DOMContentLoaded', () => {
    const botonClasificar = document.getElementById('boton-clasificar');
    if (botonClasificar) {
        botonClasificar.addEventListener('click', () => {
            const texto = document.getElementById('texto-clasificacion').value;
            const resultado = document.getElementById('resultado-clasificacion');

            // Limpiar el resultado anterior
            resultado.textContent = '';

            // Utilizar la biblioteca sentiment para la clasificación de texto
            const sentiment = window.sentiment;
            if (sentiment) {
                const analysis = sentiment(texto);
                const score = analysis.score;
                const comparative = analysis.comparative;

                // Mostrar el resultado
                if (score < 0) {
                    resultado.textContent = 'El texto es negativo.';
                } else if (score > 0) {
                    resultado.textContent = 'El texto es positivo.';
                } else {
                    resultado.textContent = 'El texto es neutral.';
                }

                console.log('Análisis de sentimiento:', analysis);
            } else {
                console.error('La biblioteca sentiment no se ha cargado correctamente.');
                resultado.textContent = 'Ocurrió un error al procesar el texto. Por favor, inténtalo de nuevo.';
            }
        });
    } else {
        console.error('El botón de clasificación no se encontró en el DOM.');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const botonClasificar = document.getElementById('boton-clasificar');
    if (botonClasificar) {
        botonClasificar.addEventListener('click', async () => {
            const texto = document.getElementById('texto-clasificacion').value;
            const resultado = document.getElementById('resultado-clasificacion');

            // Limpiar el resultado anterior
            resultado.textContent = '';

            try {
                // Cargar el modelo de toxicidad
                const model = await toxicity.load(0.5);
                console.log('Modelo cargado con éxito');

                // Realizar la predicción
                const predictions = await model.classify([texto]);
                console.log('Predicciones:', predictions);

                // Mostrar el resultado
                if (predictions[0].results[0].match) {
                    resultado.textContent = 'El texto es negativo.';
                } else {
                    resultado.textContent = 'El texto es positivo.';
                }
            } catch (error) {
                console.error('Error al cargar el modelo o realizar la predicción:', error);
                resultado.textContent = 'Ocurrió un error al procesar el texto. Por favor, inténtalo de nuevo.';
            }
        });
    } else {
        console.error('El botón de clasificación no se encontró en el DOM.');
    }
});


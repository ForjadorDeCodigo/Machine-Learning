document.addEventListener('DOMContentLoaded', () => {
    const botonGenerar = document.getElementById('boton-generar');
    if (botonGenerar) {
        botonGenerar.addEventListener('click', async () => {
            const textoInicial = document.getElementById('texto-inicial').value;
            const resultado = document.getElementById('resultado-generacion');

            // Limpiar el resultado anterior
            resultado.textContent = '';

            try {
                // Cargar el modelo de generación de texto
                const model = await use.load();
                console.log('Modelo cargado con éxito');

                // Generar texto
                const generatedText = await model.embed(textoInicial);
                console.log('Texto generado:', generatedText);

                // Mostrar el resultado
                resultado.textContent = generatedText;
            } catch (error) {
                console.error('Error al cargar el modelo o generar el texto:', error);
                resultado.textContent = 'Ocurrió un error al procesar el texto. Por favor, inténtalo de nuevo.';
            }
        });
    } else {
        console.error('El botón de generación no se encontró en el DOM.');
    }
});

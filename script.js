document.addEventListener('DOMContentLoaded', () => {
    const botonClasificar = document.getElementById('boton-clasificar');
    if (botonClasificar) {
        botonClasificar.addEventListener('click', () => {
            const texto = document.getElementById('texto-clasificacion').value;
            const resultado = document.getElementById('resultado-clasificacion');

            // Limpiar el resultado anterior
            resultado.textContent = '';

            // Utilizar la biblioteca compromise para la clasificación de texto
            const nlp = window.compromise;
            const doc = nlp(texto);
            const isToxic = doc.has('#Insult') || doc.has('#Profanity');

            // Mostrar el resultado
            if (isToxic) {
                resultado.textContent = 'El texto contiene lenguaje tóxico.';
            } else {
                resultado.textContent = 'El texto no contiene lenguaje tóxico.';
            }
        });
    } else {
        console.error('El botón de clasificación no se encontró en el DOM.');
    }
});

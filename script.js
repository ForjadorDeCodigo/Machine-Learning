document.getElementById('boton-clasificar').addEventListener('click', async () => {
    const texto = document.getElementById('texto-clasificacion').value;
    const resultado = document.getElementById('resultado-clasificacion');

    // Cargar el modelo de toxicidad
    const model = await toxicity.load(0.5);

    // Realizar la predicción
    const predictions = await model.classify([texto]);

    // Mostrar el resultado
    if (predictions[0].results[0].match) {
        resultado.textContent = 'El texto es negativo.';
    } else {
        resultado.textContent = 'El texto es positivo.';
    }
});

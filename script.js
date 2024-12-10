// Función para predecir texto (versión de prueba)
async function predecirTexto(inputTexto) {
    // Solución temporal: devuelve siempre "prueba"
    return "prueba";
}

// Manejo del botón para predecir
document.getElementById('predecir-btn').addEventListener('click', async () => {
    // Obtener el texto ingresado por el usuario
    const texto = document.getElementById('entrada-texto').value;

    // Obtener la predicción (en este caso, un resultado fijo)
    const resultado = await predecirTexto(texto);

    // Mostrar el resultado en el párrafo correspondiente
    document.getElementById('resultado').textContent = `Palabra sugerida: ${resultado}`;
});

// Mensaje en la consola para confirmar que el script está cargado
console.log("script.js cargado correctamente");

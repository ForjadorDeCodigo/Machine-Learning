// Carga de un modelo preentrenado (por ejemplo, un modelo de texto simple)
let modelo;

async function cargarModelo() {
    modelo = await tf.loadLayersModel('https://example.com/modelo/model.json'); // Usa un enlace al modelo preentrenado
    console.log("Modelo cargado correctamente");
}

async function predecirTexto(inputTexto) {
    if (!modelo) {
        alert("El modelo aún no se ha cargado. Intenta de nuevo.");
        return;
    }

    // Convertir el texto en datos que el modelo pueda interpretar
    const tokens = inputTexto.split(" ");
    const tensor = tf.tensor([tokens.map(t => t.length % 10)]); // Solo un ejemplo simple de tokenización

    // Obtener la predicción
    const prediccion = modelo.predict(tensor);
    const palabraSugerida = prediccion.argMax(-1).dataSync()[0]; // Ejemplo de índice de predicción

    return palabraSugerida; // Aquí podrías convertirlo a una palabra real
}

// Manejo del botón para predecir
document.getElementById('predecir-btn').addEventListener('click', async () => {
    const texto = document.getElementById('entrada-texto').value;
    const resultado = await predecirTexto(texto);
    document.getElementById('resultado').textContent = `Palabra sugerida: ${resultado}`;
});

// Cargar el modelo al abrir la página
cargarModelo();

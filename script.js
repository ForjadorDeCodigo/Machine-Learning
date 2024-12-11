document.addEventListener('DOMContentLoaded', () => {
    const botonPrediccion = document.getElementById('boton-prediccion');
    const resultado = document.getElementById('resultado-prediccion');

    async function entrenarModelo() {
        const model = tf.sequential();
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));
        model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

        // Datos de entrenamiento
        const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]); // Entradas
        const ys = tf.tensor2d([2, 4, 6, 8], [4, 1]); // Salidas esperadas

        await model.fit(xs, ys, {epochs: 500});
        return model;
    }

    botonPrediccion.addEventListener('click', async () => {
        const input = document.getElementById('input-secuencia').value;
        const numeros = input.split(',').map(n => parseFloat(n.trim()));

        if (numeros.some(isNaN) || numeros.length < 1) {
            resultado.textContent = 'Por favor, ingresa una secuencia válida de números.';
            return;
        }

        const modelo = await entrenarModelo();
        const siguiente = numeros[numeros.length - 1] + 1; // Supone que el siguiente es consecutivo
        const prediccion = modelo.predict(tf.tensor2d([siguiente], [1, 1]));
        const valorPredicho = prediccion.dataSync()[0];

        resultado.textContent = `El siguiente número podría ser aproximadamente: ${valorPredicho.toFixed(2)}`;
    });
});

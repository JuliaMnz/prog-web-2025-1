function ordenarBubbleSort(numeros) {
    let n = numeros.length;

    // Laço externo: número de passagens
    for (let i = 0; i < n - 1; i++) {
        // Laço interno: comparação entre pares
        for (let j = 0; j < n - 1 - i; j++) {
            if (numeros[j] > numeros[j + 1]) {
                // Troca os elementos
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }

    return numeros;
}

// Exemplo de uso
let vetor = [9, 5, 1, 3, 8];
console.log("Vetor ordenado:", ordenarBubbleSort(vetor)); 

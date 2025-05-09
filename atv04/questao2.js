function ordenarTresNumeros(numeros) {
    if (numeros.length !== 3) {
        return "O array deve conter apenas 3 números.";
    }

    // Primeiro par
    if (numeros[0] > numeros[1]) {
        let temp = numeros[0];
        numeros[0] = numeros[1];
        numeros[1] = temp;
    }

    // Segundo par
    if (numeros[1] > numeros[2]) {
        let temp = numeros[1];
        numeros[1] = numeros[2];
        numeros[2] = temp;
    }

    if (numeros[0] > numeros[1]) {
        let temp = numeros[0];
        numeros[0] = numeros[1];
        numeros[1] = temp;
    }

    return numeros;
}

// Exemplo de uso:
console.log(ordenarTresNumeros([7, 2, 5])); 

function ordenarDoisNumeros(numeros) {
    if (numeros.length !== 2) {
        return "O array deve conter apenas 2 números.";
    }

    if (numeros[0] > numeros[1]) {
        // Troca dos valores
        let temp = numeros[0];
        numeros[0] = numeros[1];
        numeros[1] = temp;
    }

    return numeros;
}

console.log(ordenarDoisNumeros([5, 2]));

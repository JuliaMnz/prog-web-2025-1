function encontrarIndices(vetor, numero) {
    let indices = [];

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] === numero) {
            indices.push(i);
        }
    }

    return indices.length > 0 ? indices : "Número não encontrado";
}

// Exemplo de uso
let vetor = [5, 2, 3, 2, 9, 2];
let numero = 2;
console.log("Índices:", encontrarIndices(vetor, numero));

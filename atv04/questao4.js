let quantidade = Number(prompt("Quantos números você quer inserir?"));

let numeros = [];

// Laço para preencher o vetor
for (let i = 0; i < quantidade; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(numero);
}

console.log("Array original:", numeros);

// Inversão manual
let invertido = [];
for (let i = numeros.length - 1; i >= 0; i--) {
    invertido.push(numeros[i]);
}

console.log("Array invertido:", invertido);

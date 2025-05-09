let n1 = Number(prompt("Digite o primeiro número:"));
let n2 = Number(prompt("Digite o segundo número:"));
let n3 = Number(prompt("Digite o terceiro número:"));

let numeros = [n1, n2, n3];

console.log("Array original:", numeros);

let invertido = [numeros[2], numeros[1], numeros[0]];

console.log("Array invertido:", invertido);

let linhas = Number(prompt("Digite a quantidade de linhas:"));
let colunas = Number(prompt("Digite a quantidade de colunas:"));

let matriz = [];
let contador = 1;

for (let i = 0; i < linhas; i++) {
    let linhaAtual = [];
    for (let j = 0; j < colunas; j++) {
        linhaAtual.push(contador++);
    }
    matriz.push(linhaAtual);
}

console.log("Matriz preenchida:");
console.table(matriz);

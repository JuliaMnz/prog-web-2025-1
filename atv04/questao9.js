let tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

// Jogada do jogador
function jogar(linha, coluna, jogador) {
    if (tabuleiro[linha][coluna] === "") {
        tabuleiro[linha][coluna] = jogador;
    } else {
        console.log("Posição já ocupada.");
    }
}

// Exemplo de jogadas
jogar(0, 0, "X");
jogar(1, 1, "O");
jogar(0, 1, "X");

console.log(tabuleiro);

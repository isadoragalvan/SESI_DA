let jogadorAtual = "X";

let tabuleiro = [
    "", "", "",
    "", "", "",
    "", "", ""
];

function jogar(posicao) {

    if (tabuleiro[posicao] !== "") {
        return;
    }

    tabuleiro[posicao] = jogadorAtual;

    document.querySelectorAll(".tabela button")[posicao].textContent = jogadorAtual;

    verificarVitoria();

    if (jogadorAtual === "X") {
        jogadorAtual = "O";
    } else {
        jogadorAtual = "X";
    }
}


function verificarVitoria() {

    const possibilidades = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let possibilidade of possibilidades) {

        let a = possibilidade[0];
        let b = possibilidade[1];
        let c = possibilidade[2];

        if (
            tabuleiro[a] !== "" &&
            tabuleiro[a] === tabuleiro[b] &&
            tabuleiro[a] === tabuleiro[c]
        ) {

            alert("O jogador " + tabuleiro[a] + " ganhou!");

            return;
        }
    }

    if (!tabuleiro.includes("")) {
        alert("Empate!");
    }
}

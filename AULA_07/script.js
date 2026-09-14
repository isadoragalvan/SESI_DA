
//true == X
//false == O
var ordem_jogada = true;


function jogar(num_btn){
    const botao = document.getElementById(num_btn);

    if(ordem_jogada === true){
    botao.innerHTML = "O";
    }else{
        botao.innerHTML = "X"
    }

    ordem_jogada = !ordem_jogada





}
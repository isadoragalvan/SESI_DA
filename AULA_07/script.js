

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

    validarGanhador();

    function validarGanhador(){
const btn1_vlr = document.getElementById
const btn2_vlr = document.getElementById
const btn3_vlr = document.getElementById
const btn4_vlr = document.getElementById
const btn5_vlr = document.getElementById
const btn6_vlr = document.getElementById
const btn7_vlr = document.getElementById
const btn8_vlr = document.getElementById
const btn9_vlr = document.getElementById

if ((btn1_vlr == btn2_vlr)
        && (btn1_vlr == btn3_vlr)
        && (btn1_vlr !== "")
        && (btn2_vlr !== "")
        && (btn3_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn4_vlr == btn5_vlr)
        && (btn4_vlr == btn6_vlr)
        && (btn4_vlr !== "")
        && (btn5_vlr !== "")
        && (btn6_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn7_vlr == btn8_vlr)
        && (btn7_vlr == btn9_vlr)
        && (btn7_vlr !== "")
        && (btn8_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn1_vlr == btn4_vlr)
        && (btn4_vlr == btn7_vlr)
        && (btn1_vlr !== "")
        && (btn4_vlr !== "")
        && (btn7_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn2_vlr == btn5_vlr)
        && (btn2_vlr == btn8_vlr)
        && (btn2_vlr !== "")
        && (btn5_vlr !== "")
        && (btn8_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn3_vlr == btn6_vlr)
        && (btn3_vlr == btn9_vlr)
        && (btn3_vlr !== "")
        && (btn6_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn1_vlr == btn5_vlr)
        && (btn1_vlr == btn9_vlr)
        && (btn1_vlr !== "")
        && (btn5_vlr !== "")
        && (btn9_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    } else if ((btn3_vlr == btn5_vlr)
        && (btn3_vlr == btn7_vlr)
        && (btn3_vlr !== "")
        && (btn5_vlr !== "")
        && (btn7_vlr !== "")) {
        alert("O ganhador foi " + ordem_jogada ? "X" : "O");
    }
}


    ordem_jogada = !ordem_jogada
}
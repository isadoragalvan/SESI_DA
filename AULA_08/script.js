//const nome = localStorage.getItem("nome");

//alert(nome);

//localStorage.setItem("nome", "Jurema");

//alert(localStorage.getItem("nome"));

//localStorage.removeItem("nome");

function login(){

    const campo_usuario = localStorage.getElementById("usuario").value;
    const campo_senha = localStorage.getElementById("senha").value;

    const local_usuario = document.getId("usuario");
    const local_senha = document.getId("senha");

    if(campo_usuario == local_usuario){
        alert("Login realizado com sucesso!");
    }else{
        alert("Usuário Inválido");
    }
}
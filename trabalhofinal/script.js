function carregarTarefas() {
    const texto_salvo = localStorage.getItem("tarefas");

    if (texto_salvo === null) {
        return [];
    } else {
        return JSON.parse(texto_salvo);
    }
}

function salvarTarefas(tarefas) {

    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function formatarData(data) {
    if (data === "") {
        return "sem data";
    }
    const partes = data.split("-");
    return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function dataDeHoje() {
    const agora = new Date();
    const ano = agora.getFullYear();
    const mes = String(agora.getMonth() + 1).padStart(2, "0");
    const dia = String(agora.getDate()).padStart(2, "0");
    return ano + "-" + mes + "-" + dia;
}


function adicionarTarefa() {
    const campo_tarefa = document.getElementById("tarefa");
    const campo_materia = document.getElementById("materia");
    const campo_data = document.getElementById("data");
    const campo_prioridade = document.getElementById("prioridade");
    const campo_tempo = document.getElementById("tempo");

    if (campo_tarefa.value.trim() === "" || campo_materia.value.trim() === "") {
        alert("Preencha a tarefa e a matéria!");
        return;
    }

    const tarefas = carregarTarefas();

    const nova_tarefa = {
        id: Date.now(),
        tarefa: campo_tarefa.value.trim(),
        materia: campo_materia.value.trim(),
        data: campo_data.value,
        prioridade: campo_prioridade.value,
        tempo: campo_tempo.value,
        concluida: false
    };
    tarefas.push(nova_tarefa);

    salvarTarefas(tarefas);

    campo_tarefa.value = "";
    campo_materia.value = "";
    campo_data.value = "";
    campo_tempo.value = "";
    campo_prioridade.value = "Alta";

    mostrarTarefas();
}

function concluirTarefa(id) {
    const tarefas = carregarTarefas();


    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id === id) {
            tarefas[i].concluida = !tarefas[i].concluida;
        }
    }

    salvarTarefas(tarefas);
    mostrarTarefas();
}

function excluirTarefa(id) {
    if (confirm("Deseja excluir esta tarefa?") === false) {
        return;
    }

    const tarefas = carregarTarefas();
    const restantes = [];

    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id !== id) {
            restantes.push(tarefas[i]);
        }
    }

    salvarTarefas(restantes);
    mostrarTarefas();
}



function mostrarTarefas() {
    const lista = document.getElementById("lista");
    const resumo = document.getElementById("resumo");
    const tarefas = carregarTarefas();
    const hoje = dataDeHoje();
    let total_concluidas = 0;

    lista.innerHTML = "";

    if (tarefas.length === 0) {
        resumo.textContent = "";
        const aviso = document.createElement("li");
        aviso.textContent = "Nenhuma tarefa cadastrada ainda.";
        lista.appendChild(aviso);
        return;
    }

    for (let i = 0; i < tarefas.length; i++) {
        const t = tarefas[i];

        const item = document.createElement("li");

        const caixa = document.createElement("input");
        caixa.type = "checkbox";
        caixa.checked = t.concluida;
        caixa.onchange = function () {
            concluirTarefa(t.id);
        };

        const texto = document.createElement("span");
        let descricao = " " + t.tarefa + " | " + t.materia + " | " +
            formatarData(t.data) + " | " + t.tempo + " | " + t.prioridade + " ";
        texto.textContent = descricao;

        if (t.concluida) {
            texto.style.textDecoration = "line-through";
            total_concluidas++;
        } else if (t.data !== "" && t.data < hoje) {
            texto.textContent = descricao + "(ATRASADA) ";
            texto.style.color = "red";
        }

        const botao = document.createElement("button");
        botao.textContent = "Excluir";
        botao.onclick = function () {
            excluirTarefa(t.id);
        };

        item.appendChild(caixa);
        item.appendChild(texto);
        item.appendChild(botao);
        lista.appendChild(item);
    }

    resumo.textContent = total_concluidas + " de " + tarefas.length + " tarefas concluídas";
}


mostrarTarefas();

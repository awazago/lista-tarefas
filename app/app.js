
const tarefas = [];

function addTarefa(){
    var tarefa = document.getElementById("inputNovaTarefa")
    tarefas.push(tarefa.value)
    tarefa.value = ""
    //document.getElementById("tarefas").innerHTML=""
    mostrarTarefas()
}


document.getElementById("btnNovaTarefa")
    .addEventListener("click", () => addTarefa());

//var todosLi = [];

function mostrarTarefas() {
    document.getElementById("tarefas").innerHTML=""
    tarefas.forEach(tarefa => {
        const nodePrincipal = document.getElementById("tarefas")
        const node = document.createElement("li");
        const textnode = document.createTextNode(tarefa);
        node.innerHTML = "<img class='btnDelete' src='./imagens/lixeira-icone.png'>"
        node.appendChild(textnode);
        node.addEventListener("dblclick", () => concluirTarefa(node))
        nodePrincipal.appendChild(node)
    });
    const todosBtnDelete = document.getElementsByClassName("btnDelete")
    for(let botao of todosBtnDelete) {
        botao.addEventListener("click", () => deletarTarefa(botao))
    }
}



function concluirTarefa(elementoLi) {
    if (elementoLi.classList.contains("aberta")) {
        elementoLi.classList.remove("aberta")
        elementoLi.classList.add("concluida")
   } else if(elementoLi.classList.contains("concluida")){
        elementoLi.classList.remove("concluida")
        elementoLi.classList.add("aberta")
   } else {
        elementoLi.classList.add("aberta")
   }
}

function deletarTarefa (botao){
    var tarefaDeletada = botao.parentNode.innerText;
    var indice = tarefas.indexOf(tarefaDeletada)
    tarefas.splice(indice, 1)
   mostrarTarefas()

}
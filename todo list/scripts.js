const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    task: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, index) => {
    novaLi =
      novaLi +
      `
        
        <li class="task ${item.concluida && "done"}">
            <img src="./img/checked.png"" alt="conclusão-tarefa" onclick="concluirTask(${index})">
                <p>${item.task}</p>
            <img src="./img/trash.png" alt="exclusão-tarefa" onclick="deletarItem(${index})">
        </li>
        
     `;
  });

  listaCompleta.innerHTML = novaLi;

  localStorage.setItem("lista", JSON.stringify(minhaListaDeItens));
}

function concluirTask(index) {
  minhaListaDeItens[index].concluida = !minhaListaDeItens[index].concluida;

  mostrarTarefas();
}

function deletarItem(index) {
  minhaListaDeItens.splice(index, 1);
  mostrarTarefas();
}

function recarregarTasks() {
  const tasksFromLocalStorage = localStorage.getItem("lista");

  if (tasksFromLocalStorage) {
    minhaListaDeItens = JSON.parse(tasksFromLocalStorage);
  }

  mostrarTarefas();
}

recarregarTasks();

button.addEventListener("click", adicionarNovaTarefa);

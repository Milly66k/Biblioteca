const tarefa = document.querySelector("#tarefa");
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  if (tarefa.value === "") {
    alert("Digite uma tarefa válida!");
  } else {
    lista.innerHTML += `
      <li>
        <i class="fas fa-check-circle check"></i>
        <span>${tarefa.value}</span>
        <i class="fa-solid fa-trash-can close"></i>
      </li>
    `;
    configurarEventosDeTarefas(); // Adiciona os eventos à nova tarefa
  }
  tarefa.value = "";
}

// Função para marcar e desmarcar a tarefa
function marcarOuDesmarcarTarefa(event) {
  const spanTarefa = event.target.parentElement.querySelector("span");
  const checkIcon = event.target;

  // Verifica se a tarefa já está marcada
  if (spanTarefa.style.textDecoration === "line-through") {
    // Desmarca a tarefa
    spanTarefa.style.textDecoration = "none";
    checkIcon.style.color = "#000"; // Volta para a cor original
  } else {
    // Marca a tarefa
    spanTarefa.style.textDecoration = "line-through";
    checkIcon.style.color = "#349223"; // Muda para a cor verde
  }
}

// Função para remover a tarefa
function removerTarefa(event) {
  event.target.parentElement.remove();
}

// Função para configurar eventos nas tarefas
function configurarEventosDeTarefas() {
  const checkIcons = document.querySelectorAll(".check");
  const closeIcons = document.querySelectorAll(".close");

  checkIcons.forEach(icon => {
    icon.removeEventListener("click", marcarOuDesmarcarTarefa); // Remove evento duplicado
    icon.addEventListener("click", marcarOuDesmarcarTarefa);
  });

  closeIcons.forEach(icon => {
    icon.removeEventListener("click", removerTarefa); // Remove evento duplicado
    icon.addEventListener("click", removerTarefa);
  });
}

// Função de inicialização para configurar os eventos iniciais
function inicializarEventos() {
  btn.addEventListener("click", adicionarTarefa);
  configurarEventosDeTarefas(); // Configura eventos para tarefas existentes ao carregar a página
}

// Inicializa os eventos
inicializarEventos();

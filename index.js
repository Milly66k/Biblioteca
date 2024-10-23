// Validação dos campos e habilitação/desabilitação dos botões
function validateFields() {
  const emailValid = isEmailValid();
  const passwordValid = isPasswordValid();

  document.getElementById('recover-password-button').disabled = !emailValid;
  document.getElementById('login-button').disabled = !(emailValid && passwordValid);
}

// Verifica se o email é válido
function isEmailValid() {
  const email = document.getElementById("email").value.trim();
  return email ? validateEmail(email) : false;
}

// Verifica se a senha foi preenchida
function isPasswordValid() {
  const password = document.getElementById('password').value.trim();
  return password !== '';
}

// Valida o formato do email
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Função para mostrar/esconder a senha
function mostrarSenha() {
  const inputPass = document.getElementById('password');
  const btnShowPass = document.getElementById('btn-senha');

  if (inputPass.type === 'password') {
    inputPass.setAttribute('type', 'text');
    btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill');
  } else {
    inputPass.setAttribute('type', 'password');
    btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill');
  }
}

// Função assíncrona para obter dados (exemplo)
async function getData() {
  try {
    const response = await fetch("http://localhost:8088");
    const data = await response.json(); // Conversão direta para JSON
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
  }
}

// Evento de envio do formulário com validação de campos
document.getElementById('loginForm').addEventListener('submit', function(event) {
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();
  let mensagem = "";

  if (!email && !senha) {
    mensagem = "Por favor, preencha o email e a senha.";
  } else if (!email) {
    mensagem = "Por favor, preencha o email.";
  } else if (!senha) {
    mensagem = "Por favor, preencha a senha.";
  }

  if (mensagem) {
    event.preventDefault(); // Impede o envio do formulário se houver mensagem
    alert(mensagem);
  }
});

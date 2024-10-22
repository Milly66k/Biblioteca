function validateFields(){
  const emailValid = isEmailValid();
  document.getElementById('recover-password-button').disabled = !emailValid;

  const passwordValid = isPasswordValid();
  document.getElementById('login-button').disabled = !emailValid || !passwordValid;
}

function isEmailValid() {
  const email = document.getElementById("email").value;
  if (!email) {
    return false;
  } 

  return validateEmail(email);
}

function isPasswordValid(){
  const password = document.getElementById('password').value;
  if (!password){
    return false;
  }

  return true;
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}






function mostrarSenha(){
  var inputPass = document.getElementById('password')
  var btnShowPass = document.getElementById('btn-senha')
  if (inputPass.type === 'password'){
      inputPass.setAttribute('type', 'text',)
      btnShowPass.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
  } else {
      inputPass.setAttribute('type', 'password',)
      btnShowPass.classList.replace('bi-eye-slash-fill', 'bi-eye-fill')
  }

}


async function getData (){
  const result = await fetch("http://localhost:8088")
      .then(result => JSON.stringify(result))
      .then(data => console.log(data))

      return result
}

getData()


//Alerta 

document.getElementById('loginForm').addEventListener('submit', function(event) {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  let mensagem = "";

  if (email === "" && senha === "") {
      mensagem = "Por favor, preencha o email e a senha.";
  } else if (email === "") {
      mensagem = "Por favor, preencha o email.";
  } else if (senha === "") {
      mensagem = "Por favor, preencha a senha.";
  }

  if (mensagem !== "") {
      event.preventDefault(); // Impede o envio do formulário
      alert(mensagem);
  }
});

// Função para validar campos e habilitar/desabilitar botões
function validateFields() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const loginButton = document.getElementById('login-button');
  const recoverPasswordButton = document.getElementById('recover-password-button');

  let mensagem = "";
  if (email === "" && password === "") {
      mensagem = "Por favor, preencha o email e a senha.";
  }
  else if (email === "") {
      mensagem = "Por favor, preencha o email.";
  }
  else if (password === "") {
      mensagem = "Por favor, preencha a senha.";
  }

  // Exibe o alerta se houver uma mensagem de erro
  if (mensagem !== "") {
      alert(mensagem);
  }

  if (email !== "") {
      recoverPasswordButton.disabled = false;
  } else {
      recoverPasswordButton.disabled = true;
  }

  if (email !== "" && password !== "") {
      loginButton.disabled = false;
  } else {
      loginButton.disabled = true;
  }
}




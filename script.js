const btnForm = document.querySelector(".btn-login");

const users = [
  { login: "joao_silva", senha: "senha123" },
  { login: "maria_oliveira", senha: "segredo456" },
  { login: "pedro_santos", senha: "minhaSenha789" },
  { login: "ana_costa", senha: "senhaForte!@#" },
  { login: "lucas_ferreira", senha: "passw0rd987" },
];

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;
    const errorContainer = document.getElementById("errorContainer");

    errorContainer.innerHTML = "";

    const user = users.find((user) => user.login === login && user.senha === senha);

    if (user) {
      alert("Login bem-sucedido!");
    } else {
      const errorMsg = document.createElement('p')      
      errorMsg.className = 'mensagem'
      errorMsg.textContent = 'Usuários ou senhas incorretos.'
      errorContainer.appendChild(errorMsg)
    }
  });

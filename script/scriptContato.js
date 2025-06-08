document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const emailObrigatorioMsg = document.getElementById("obrigaEmail");
  const nomeObrigatorioMsg = document.getElementById("obrigaNome");
  const formatoEmailMsg = document.getElementById("formatoEmail");
  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  let formValido = true;

  nomeInput.classList.remove("erro");
  emailInput.classList.remove("erro");
  nomeObrigatorioMsg.style.display = "none";
  emailObrigatorioMsg.style.display = "none";
  formatoEmailMsg.style.display = "none";

  if (nome === "") {
    nomeInput.classList.add("erro");
    formValido = false;
    nomeObrigatorioMsg.style.display = "block";
  }

  if (email === "") {
    emailInput.classList.add("erro");
    formValido = false;
    emailObrigatorioMsg.style.display = "block";
  } else if (!regexEmail.test(email)) {
    emailInput.classList.add("erro");
    formValido = false;
    formatoEmailMsg.style.display = "block";
  }

  if (formValido) {
    alert("Formulário enviado com sucesso!");
    this.submit();
  }
});

// devolver estilo quando o campo for preenchido corretamente
document.getElementById("nome").addEventListener("input", function () {
  if (this.value.trim() !== "") {
    this.classList.remove("erro");
    document.getElementById("obrigaNome").style.display = "none";
  }
});

document.getElementById("email").addEventListener("input", function () {
  const valor = this.value.trim();
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (valor !== "") {
    this.classList.remove("erro");
    document.getElementById("obrigaEmail").style.display = "none";
  }

  if (regexEmail.test(valor)) {
    this.classList.remove("erro");
    document.getElementById("formatoEmail").style.display = "none";
  }
});

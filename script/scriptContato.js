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

  if (nome === "") {
    nomeInput.classList.add("erro");
    formValido = false;
    nomeObrigatorioMsg.style.display = "block"
  }


  if (email === "") 
    {
    formatoEmailMsg.style.display = "none"
    emailInput.classList.add("erro");
    formValido = false;
    emailObrigatorioMsg.style.display = "block"
  } else if (!regexEmail.test(email)) 
    {
    emailInput.classList.add("erro");
    formatoEmailMsg.style.display = "block"
    emailObrigatorioMsg.style.display = "none"
    formValido = false;
  }

  if (formValido) {
    alert("Formulário enviado com sucesso!");
    this.submit();
  }
});
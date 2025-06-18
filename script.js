function enviarEmail() {
  const email = document.getElementById("email").value;
  if (email.trim() === "") {
    alert("Por favor, insira um endereço de email.");
  } else {
    alert(`Obrigado! Em breve enviaremos novidades para: ${email}`);
    document.getElementById("email").value = "";
  }
}

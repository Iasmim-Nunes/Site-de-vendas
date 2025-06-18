// Enviar Email
function enviarEmail() {
  const email = document.getElementById("email").value;
  if (email.trim() === "") {
    alert("Por favor, insira um endereço de email.");
  } else {
    alert(`Obrigado! Em breve enviaremos novidades para: ${email}`);
    document.getElementById("email").value = "";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      // Fecha todos os outros
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.display = 'none';
      });

      // Se estava fechado, abre este
      if (!isOpen) {
        item.classList.add('active');
        answer.style.display = 'block';
      }
    });
  });
});

// Botão Voltar ao Topo
const btnTopo = document.getElementById("btn-topo");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
};

btnTopo.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

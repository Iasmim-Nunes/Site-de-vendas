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

// FAQ Accordion
function ativarFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');

      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.display = 'none';
      });

      if (!isOpen) {
        item.classList.add('active');
        answer.style.display = 'block';
      }
    });
  });
}

// Botão Voltar ao Topo
function ativarBotaoTopo() {
  const btnTopo = document.getElementById("btn-topo");

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Animações ao entrar na tela
function animarAoScroll() {
  const elementos = document.querySelectorAll('.feature-card, .faq-item');

  const options = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, options);

  elementos.forEach(el => {
    observer.observe(el);
  });
}

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  ativarFAQ();
  ativarBotaoTopo();
  animarAoScroll();
});

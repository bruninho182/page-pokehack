// ===== CONFIGURAÇÕES =====
const LINK_PAGAMENTO = 'https://nubank.com.br/cobrar/3esxz/6a65f059-5445-46a7-bf49-51d1463d6efc';
const NUMERO_WHATSAPP = '5512997372713';

// ===== PARTÍCULAS DE FUNDO =====
function criarParticulas() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.width = Math.random() * 6 + 2 + 'px';
    particle.style.height = particle.style.width;
    particle.style.animationDelay = Math.random() * 6 + 's';
    particle.style.animationDuration = Math.random() * 6 + 4 + 's';
    container.appendChild(particle);
  }
}
criarParticulas();

// ===== ELEMENTOS =====
const btnComprar = document.getElementById('btnComprar');
const btnComprarDestaque = document.getElementById('btnComprarDestaque');
const modalConfirmacao = document.getElementById('modalConfirmacao');
const btnFechar = document.querySelectorAll('.close');
const btnIrPagamento = document.getElementById('btnIrPagamento');
const btnReceberChave = document.getElementById('btnReceberChave');

// ===== ABRIR MODAL =====
function iniciarCompra() {
  modalConfirmacao.style.display = 'flex';
}

if (btnComprar) btnComprar.addEventListener('click', iniciarCompra);
if (btnComprarDestaque) btnComprarDestaque.addEventListener('click', iniciarCompra);

// ===== IR PARA PAGAMENTO =====
if (btnIrPagamento) {
  btnIrPagamento.addEventListener('click', () => {
    window.open(LINK_PAGAMENTO, '_blank');
  });
}

// ===== RECEBER CHAVE VIA WHATSAPP =====
if (btnReceberChave) {
  btnReceberChave.addEventListener('click', () => {
    const mensagem = encodeURIComponent('Olá! Acabei de fazer o pagamento da extensão PokeHackIdle Premium. Pode me enviar a chave de ativação e o link de download?');
    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`, '_blank');
  });
}

// ===== FECHAR MODAL =====
btnFechar.forEach(btn => {
  btn.addEventListener('click', () => {
    modalConfirmacao.style.display = 'none';
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modalConfirmacao) modalConfirmacao.style.display = 'none';
});

// ===== EFEITO DE DIGITAÇÃO =====
const titulo = document.querySelector('.header h1');
if (titulo) {
  const texto = titulo.textContent;
  titulo.textContent = '';
  titulo.classList.add('typing');
  let i = 0;
  function digitar() {
    if (i < texto.length) {
      titulo.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 100);
    } else {
      titulo.classList.remove('typing');
    }
  }
  setTimeout(digitar, 500);
}
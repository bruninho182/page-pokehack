// ===== CONFIGURAÇÃO DO WHATSAPP =====
const numeroWhatsApp = '5512997372713'; // Seu número já configurado
const btnWpp = document.getElementById('btnWhatsApp');

if (btnWpp) {
  const mensagem = encodeURIComponent('Olá! Tenho interesse na extensão PokeHackIdle!');
  btnWpp.href = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;
}

// ===== EFEITO DE DIGITAÇÃO NO TÍTULO =====
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
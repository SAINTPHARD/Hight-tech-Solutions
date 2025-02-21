
  // Seleciona o botão hamburguer e o menu de navegação
  const menuButton = document.querySelector('.menu-button'); // O botão hamburguer
  const menuList = document.querySelector('.menu__list'); // O menu de navegação principal

  // Adiciona um evento de clique ao botão hamburguer
  menuButton.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    menuList.classList.toggle('active');
    // Alterna a classe 'active' no próprio botão para a animação
    menuButton.classList.toggle('active');
  });

  // Fecha o menu quando qualquer link do menu for clicado
  const menuLinks = document.querySelectorAll('.menu__item a'); // Todos os links do menu

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove a classe 'active' do menu para ocultá-lo
      menuList.classList.remove('active');
      // Remove a classe 'active' do botão para resetar a animação
      menuButton.classList.remove('active');
    });
  });



  //Seleciona o botão hamburguer e o menu de navegação
  const menuButton = document.querySelector('.menu-button'); // O botão hamburguer
  const menuList = document.querySelector('.menu__list'); // O menu de navegação principal

  // Adiciona um evento de clique ao botão hamburguer
  menuButton.addEventListener('click', () => {
    // Alterna a classe 'active' no menu de navegação
    menuList.classList.toggle('active');
    // Alterna a classe 'active' no próprio botão para a animação
    menuButton.classList.toggle('active');
  });

  // Fecha o menu quando qualquer link do menu for clicado
  const menuLinks = document.querySelectorAll('.menu__item a'); // Todos os links do menu

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove a classe 'active' do menu para ocultá-lo
      menuList.classList.remove('active');
      // Remove a classe 'active' do botão para resetar a animação
      menuButton.classList.remove('active');
    });
  });

  // Função para animar a contagem
function animateCounter(element, start, end, duration) {
let startTime = null;

function step(timestamp) {
  if (!startTime) startTime = timestamp;
  const progress = Math.min((timestamp - startTime) / duration, 1);
  const currentValue = Math.floor(progress * (end - start) + start);
  element.innerHTML = currentValue.toLocaleString();
  if (progress < 1) {
      window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
}

// Inicializando a animação para todos os elementos com a classe 'numero'
document.addEventListener('DOMContentLoaded', () => {
const numeros = document.querySelectorAll('.numero');

numeros.forEach((numero) => {
  const valorFinal = parseInt(numero.getAttribute('data-valor'), 10);
  animateCounter(numero, 0, valorFinal, 2000);  // Contagem durante 2 segundos (2000 ms)
});
});

// Função para alternar entre as seções
function switchSection(sectionId) {
    // Esconde todas as seções
    const sections = document.querySelectorAll('.page-container');
    sections.forEach(section => section.classList.remove('visible'));

    // Mostra a seção correspondente
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('visible');
}



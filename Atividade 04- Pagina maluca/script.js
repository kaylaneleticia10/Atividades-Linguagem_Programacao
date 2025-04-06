const simBtn = document.getElementById("simBtn"); // Seleciona o botão "Sim" pela ID
const respostaDiv = document.getElementById("resposta"); // Seleciona a div onde a resposta será exibida
const imagem = document.getElementById("meme"); // Seleciona a imagem que será exibida quando houver resposta
const audioEngano = document.getElementById("audioEngano"); // Seleciona o áudio que toca quando a pessoa tenta usar o TAB no botão
const audioNazaré = document.getElementById("audioNazaré"); // Seleciona o áudio que toca quando a pessoa clica no "Não"

// Função que faz o botão "Sim" fugir quando o mouse passa por cima
function fugir() {
// Pega a largura e altura do botão
  const btnWidth = simBtn.offsetWidth;
  const btnHeight = simBtn.offsetHeight;

// Define os limites para o botão não sair da tela
  const maxX = window.innerWidth - btnWidth - 20;
  const maxY = window.innerHeight - btnHeight - 120;

// Gera posições aleatórias dentro dos limites definidos
  const randX = Math.random() * maxX;
  const randY = Math.random() * maxY;

 // Aplica as novas posições no botão
 simBtn.style.left = randX + 'px';
 simBtn.style.top = randY + 'px';
 
}

// Função chamada ao clicar no botão "Não"
function responder() {
  respostaDiv.innerHTML = "Pelo menos você é sincero 😂";  // Mostra uma mensagem na tela
  imagem.src = "imagem/nazare-rindo.jpg";   // Mostra a imagem da Nazaré rindo
  imagem.style.display = "block";
  audioNazaré.play();   // Toca o áudio da risada
}

// Função chamada se a pessoa tentar focar o botão "Sim" usando TAB
function detectaTab() {
  respostaDiv.innerHTML = "Ahhh, espertinho! Achou que ia me enganar no TAB, né? 🤨";  // Mostra mensagem de esperteza detectada
  imagem.src = "imagem/nazare.webp";  // Mostra a imagem da Nazaré desconfiada
  imagem.style.display = "block";
  audioEngano.play(); // Toca o áudio de "tá enganando o cliente"
}

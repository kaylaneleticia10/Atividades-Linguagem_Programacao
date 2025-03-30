botao = document.getElementById("botao"); //captura o botao pelo id

botao.onmouseover = function(){ //quando o mouse passar pelo botao chama a funcao:
    botao.style.left=Math.random()*(window.innerWidth - botao.offsetWidth) +"px"; 
    //botao.style.left: define a posição horizontal do botão em relação a janela do navegador
    //Math.random(): Gera um número aleatório 
    //window.innerWidth: pega o valor da largura da janela do navegador
    //botao.offsetWidth: subtrai a largura do botao para que ele nao fique cortado
    //+ "px" garante que esse número seja interpretado como pixels pelo CSS
    botao.style.top=Math.random()*(window.innerHeight - botao.offsetHeight) +"px";
    //botao.style.top: define a posição vertical do botão em relação ao topo da janela do navegador
    //Math.random(): Gera um número aleatório 
    //window.innerHeight: pega o valor da altura da janela do navegador
    //botao.offsetWidth: subtrai a largura do botao para que ele nao fique cortado
};
botao.onfocus = function() { //quando o botao tentar ser focado
    botao.blur(); //chama a funcao para desfocar o botao
};
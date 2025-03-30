botao = document.getElementById("botao");

botao.onmouseover = function(){
    botao.style.left=Math.random()*(window.innerWidth - botao.offsetWidth) +"px";
    botao.style.top=Math.random()*(window.innerHeight - botao.offsetHeight) +"px";
};

botao.onfocus = function() {
    botao.blur();
};
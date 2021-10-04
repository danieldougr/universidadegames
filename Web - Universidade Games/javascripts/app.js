var alternador = document.querySelector('.js-botao-chaveador');

alternador.onclick = function() {
    var menu = document.querySelector('.js-menu');
    menu.classList.toggle('menu--exibindo');
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}
var divjs = document.getElementById('btnjs');
divjs.addEventListener('mouseenter', entrar);
divjs.addEventListener('mouseleave', sair);

function entrar() {
    document.getElementById('btncomprar').style.display = 'block';
}
function sair() {
    document.getElementById('btncomprar').style.display = 'none';
}

function psgpretaebranca() {
    window.location="/camisas/psgbrancaepreta.html";
}

function home() {
    window.location="/index.html";
}
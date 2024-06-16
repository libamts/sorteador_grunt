document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numMaximo = document.getElementById('numero-maximo').value;
        numMaximo = parseInt(numMaximo);

        let numAleatorio = Math.random() * numMaximo;
        numAleatorio = Math.floor(numAleatorio + 1)
        document.getElementById('resultado-valor').innerHTML = numAleatorio;

        document.querySelector('.resultado').style.display = 'block';
    })
})
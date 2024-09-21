let contadorCampo = 0;

function adicionarCampo() {
    contadorCampo++;

    let formularioContainer = document.getElementById('formularioContainer');

    // Cria os elementos do formulario
    let divCampo = document.createElement('div');
    divCampo.classList.add('campoFormulario');

    let labelCampo = document.createElement('label');
    labelCampo.textContent = `Campo ${contadorCampo}`;

    let inputCampo = document.createElement('input');
    inputCampo.type = "text";
    inputCampo.name = `Campo${contadorCampo}`;

    // Adiciona os elementos na divCampo
    divCampo.appendChild(labelCampo);
    divCampo.appendChild(inputCampo);

    formularioContainer.appendChild(divCampo);

}
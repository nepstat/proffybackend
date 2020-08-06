// Procurar o botão e adicionar o evento de click
document.querySelector("#add-time").addEventListener("click", cloneField)

// Executar uma ação
function cloneField () {
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    // limpar os campos selecionados
    const fields = newFieldContainer.querySelectorAll('input');

    // pegar os campos
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    }) 

    // Colocar na página
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}

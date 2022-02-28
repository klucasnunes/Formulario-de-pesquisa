let txtNome = window.document.getElementById('txtNome')
let txtEmail = window.document.getElementById('txtEmail')
let txtIdade = window.document.getElementById('txtIdade')

let observacao = window.document.getElementById('obs')

function enviar() {

if (txtNome.value.length == 0 || txtEmail.value.length == 0 || txtIdade.value.length == 0) {
    observacao.innerHTML = `* os campos obrigatórios não podem ficar vazios`
}

}
// veridicar senha de confirmação 
let senha = document.getElementById('psw')
let repetir = document.getElementById('psw-repeat')

function validar() {
  if (senha.value != repetir.value) {
    repetir.setCustomValidity("Senhas diferentes!")
    repetir.reportValidity()
    return false
  } else {
    repetir.setCustomValidity("")
    return true
  }
}

repetir.addEventListener('input', validar)

// veridicar senha de confirmação 

// buscar cep e preencher os campos de endereços
const cep = document.getElementById("cep")

const showData = (result)=>{
    for(const campo in result)
    if(document.querySelector("#"+campo)){
        document.getElementById(""+campo).value = result[campo]
    }
}

cep.addEventListener("blur",(e)=>{
  let search = cep.value.replace("-","")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

  fetch(`https://viacep.com.br/ws/${search}/json/`)
    .then(response =>{ response.json()
    .then(data => showData(data))
})

    .catch(e => console.log('Deu erro: '+ e,menssage))
});
// buscar cep e preencher os campos de endereços

// Quando clicar no botão e enviar/mensagem de confirmação
function enviarfor(){ 
  var nomes = document.getElementById("nome")

  if(nomes.value != ""){
    alert("Obrigado Sr(a) "+nomes.value+ "os dados foram encamiados com sucesso.")
  }
}
// Quando clicar no botão e enviar/mensagem de confirmação
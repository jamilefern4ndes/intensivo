let users = [
    {
        Nome: '',
        Sobrenome: '',
        Email: '',
        Telefone: 0,
        Senha: ''
    }
]

//verificação envio do formulário
document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()

    //Captura dos dados 
    const nome      = document.querySelector('#primeiroNome').value
    const sobrenome = document.querySelector('#sobrenome').value
    const email     = document.querySelector('#email').value
    const telefone  = document.querySelector('#telefone').value
    const senha1    = document.querySelector('#senha1').value
    const senha2    = document.querySelector('#senha2').value
    let rule = document.querySelector('.rule')

    //salvando no array
    users[0].Nome      = nome
    users[0].Sobrenome = sobrenome

    //validação do email
    if(!email.includes('@')){
        rule.innerHTML += 'Email inválido  <br>'
    }else{
        users[0].Email     = email
        rule.innerHTML = ''
    }

    //validação do telefone
    if (telefone.lenght != 11){
        rule.innerHTML += 'O Telefone Precisa conter 11 dígitos <br>'
    }else{
        users[0].Telefone  = telefone
        rule.innerHTML = ''
    }

    //validação das senhas
    if (senha1 != senha2) { 
        rule.innerHTML += 'As senhas nâo correspondem <br>'
        senha1.value = ''
        senha2.value = ''
    } else {
       users[0].Senha = senha1
       rule.innerHTML = ''
    }

    //limpeza dos dados formulário
    const inputsText = document.querySelectorAll('.inputText')
    inputsText.forEach(input => input.value = '')
})

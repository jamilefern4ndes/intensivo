let users = [
    {
        Nome: '',
        Sobrenome: '',
        Email: '',
        Telefone: 0,
        Senha: ''
    }
]

document.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()

    const nome      = document.querySelector('#primeiroNome').value
    const sobrenome = document.querySelector('#sobrenome').value
    const email     = document.querySelector('#email').value
    const telefone  = document.querySelector('#telefone').value
    const senha1    = document.querySelector('#senha1').value
    const senha2    = document.querySelector('#senha2').value

    users[0].Nome      = nome
    users[0].Sobrenome = sobrenome
    users[0].Email     = email
    users[0].Telefone  = telefone

    if (senha1 === senha2) {
        users[0].Senha = senha1
        console.log(users)
    } else {
        console.log('senha incorreta')
    }

    const inputsText = document.querySelectorAll('.inputText')
    inputsText.forEach(input => input.value = '')
})

 let nome
        document.getElementById('salvarNome').addEventListener('click', ()=>{
            nome = document.querySelector('#nome').value
            localStorage.setItem('nomeUser', nome)
            exibirmsg('Nome salvo!')
        })

        const msg = document.querySelector('#mensagem')
        function exibirmsg(mensagem){
            msg.textContent = mensagem
        }

        window.onload = function (){
            let nomeSalvo = localStorage.getItem ('nomeUser')
            if (nomeSalvo) {
                msg.textContent = `Olá ${nomeSalvo}!`
            } else {
                msg.textContent = 'Digite seu nome e clique em "salvar"'
            }
        }
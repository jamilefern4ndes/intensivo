// // somando ate 50
// let prox = 1
// let acumuladora = 0
// while(prox <= 50){
//     acumuladora += prox
//     prox ++
// }
// console.log(acumuladora)


// mostrar propriedades com valores usando for in
// let carro = 
//         {
//             marca: 'Volkswagen',
//             modelo: 'Fusca',
//             ano: 1960
//         }

// for (let chave in carro) {
//   console.log(chave + ": " + carro[chave])
// }

// // Mostrar somente nomes com mais de 5 letras
// let nomes = ['Cláudia', 'Ítalo', 'Severino', 'Tereza', 'Luíza']
// for (let nome of nomes) {
//     if (nome.length > 5) {
//         console.log(nome)
//     }
// }

//senha = 1234
//  const senha = 1234
//  let senUser

// do {
//     senUser = parseInt(prompt("Digite a senha:"))
//     if (senUser !== senha) {
//         console.log(`A senha ${senUser} não confere, tente novamente.`)
//     }
// } while (senUser !== senha)

// console.log("Senha correta! Acesso liberado.")
   
//tabuada completa com for aninhado
// let verTab = 6
// for ( let i = 1; i <= 10; i++){
//     console.log(`Tabuada do ${i}`)
//     for(let val = 1; val <= 10; val++){
//         console.log(`${i} x ${val} = ${i*val}`)
//     }
//     console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
// }

//inverter números
// const num = '1234'
// var controle = num.length
// while (controle >= 0){
//     console.log (num[controle])
//     controle = controle - 1
// }
// // outra forma
// let num = 1234;
// let invertido = 0;

// while (num > 0) {
//   let digito = num % 10;                 // pega o último dígito
//   invertido = invertido * 10 + digito;   // adiciona o dígito ao invertido
//   num = Math.floor(num / 10);            // remove o último dígito
// }

// console.log("Número invertido: " + invertido);

//for...in + for...of → Crie um objeto com categorias (ex: filmes, livros, jogos), cada um sendo um array. Percorra e mostre os itens.
// const midias = 
//             {
//                 filmes : [' Mad Max', ' Psicose', ' Capitão Philips'],
//                 livros : [' Hary Potter', ' O Cortiço', ' Iracema'],
//                 jogos  : [' COD', ' Valorant', ' Grifos e Gárgulas']
//             }
// for (let categoria in midias){
//     console.log(categoria + ":")
//     for (let item of midias[categoria]) {  
//         console.log(" - " + item)
//     }
// }

//número primo com for
// const num = 5
// let res = ' É um número primo' 
// for (let i = 2; i<num; i++){
//     if(num % i === 0){
//         res = ' Não um Número primo'
//     }
// }
// console.log(num + res)

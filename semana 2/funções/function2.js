// Crie uma função parOuImpar(num) que retorne "par" ou "ímpar".

function parOuImpar(num){
    let res
    if(num%2 == 0){
        res = 'Par'
    }
    else{
        res = 'Ímpar'
    }
    return res
}
const numero = 3
console.log(parOuImpar(numero))

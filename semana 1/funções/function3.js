// Crie uma função fatorial(n) que calcule o fatorial de um número.

function fatorial(n){
    let res = 1
    for(let i = n; i>1 ; i--){
        res *= i
    }
    return res
}

let val = 7
console.log(val + '! = ' + fatorial(val))
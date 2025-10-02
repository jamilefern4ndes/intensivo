// Crie uma arrow function que receba uma lista de números e retorne apenas os pares

const verifica = (num) =>{
    return num.filter(n => n % 2 === 0);
}


const numeros = [63,6,2,7,12,1,9,26,5]
console.log("Os números pares são " + verifica(numeros))
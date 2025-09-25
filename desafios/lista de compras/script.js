//Mix → Crie um programa que simule uma lista de compras:

// Use um array para guardar os itens.

// Use for...of para listar.

// Use for...in para mostrar propriedades de cada item (ex: nome, quantidade, preço).

// Calcule o total com um while.

const itens = [
     {
        Nome: 'Carne',
        Quantidade: 3,
        Preço: 14.99
    },
    {
        Nome: 'Tomates',
        Quantidade: 5,
        Preço: 4.99
    },
    {
        Nome: 'Creme de Leite',
        Quantidade: 2,
        Preço: 2.50
    },
    {
        Nome: 'Queijo',
        Quantidade: 1,
        Preço: 9.30
    },
    {
        Nome: 'CocaCola',
        Quantidade: 1,
        Preço: 10.00
    }
]

for (const item of itens) {
    console.log('Item:')
    // Usando for in para mostrar propriedades
    for(let propriedade in item){
        console.log(`  ${propriedade} : ${item[propriedade]}`)
    }
}

// Calculando o total com while
let total = 0
let i = 0

while (i < itens.length) {
    total += itens[i].Quantidade * itens[i].Preço
    i++;
}

 console.log(`\nTotal da compra: R$ ${total.toFixed(2)}`)
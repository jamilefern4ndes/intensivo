  // Crie uma arrow function que receba uma frase e retorne quantas palavras tem.

const contarPalavras = (frase) =>{
    const palavras = frase.trim().split(/\s+/);
    return palavras.length
}

const texto = 'Conte as palavras desse texto.'
console.log(`A frase '${texto}' tem ${contarPalavras(texto)} palavras!`)
  
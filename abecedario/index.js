



function solucao(letra, palavras) {
    let soma = 0;
	for(let resultado of palavras) {
        if(resultado[0] === letra) {
            
        } else {
            soma++
        }
    }
    console.log(soma)
}

let palavras = ["mamao",
"maca",
"melao",
"melancia",
"laranja,",
"maracuja",
"acerola",
"beterraba"
]

let letra = "m"

solucao(letra,palavras)

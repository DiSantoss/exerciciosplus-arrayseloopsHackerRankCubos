


function solucao(precos) {
    let soma = 0;
    
    for(let preco of precos) {
        soma += preco;
    }
    
    let qtdDeProdutos = precos.length;
    
    if(qtdDeProdutos >= 5) {
        let menor = precos[0]; //vai ser o primeiro da lista e depois vai ser atualizado para um numero menor caso o numeroAtual seja menor que o valor atual de menor
        for(let numeroAtual of precos) {
            if (numeroAtual < menor) {
                menor = numeroAtual;
            }
        }
        console.log(soma - menor)
    } else {
        console.log(soma)
    }
    
    
}

let valores = [100,500,100,200,50]

solucao(valores)
function solucao(sequencia) {
             let indiceAtual = 0;

  for (const clique of sequencia) {
    if (clique === '>') {
      indiceAtual++
    } else if (clique === '<') {
      indiceAtual--
    }
      
      if(indiceAtual < 0) {
            indiceAtual = 6
        } else if (indiceAtual > 6){
            indiceAtual = 0
        }  
  }

        

  console.log(indiceAtual);

}

let cliques = '>>>>>>>>>'

solucao(cliques)
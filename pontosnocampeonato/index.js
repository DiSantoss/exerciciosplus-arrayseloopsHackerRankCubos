function solucao(resultados) {
    let v = 3, e = 1 , d = 0
   let somadosPontos = 0;
for(let resultado of resultados) {
    if(resultado === "V") {
        somadosPontos += v
    }
    if(resultado === "E") {
        somadosPontos += e
    }
    if(resultado === "D") {
        somadosPontos += d
    }
}
console.log(somadosPontos)
}


let resultados = [
    "V",
    "E",
    "V",
    "E", "V", "V","E","D",
  ]

  solucao(resultados)
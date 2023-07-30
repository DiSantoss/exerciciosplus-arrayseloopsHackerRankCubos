function solucao(palpite, palavra) {
	let acertos = 0;

  
  for (const letra of palavra) {
    if (letra === palpite) {
      acertos++;
    }
  }

  console.log(acertos);
}


let palpite = "a"
let palavra = "aveia"

solucao(palpite,palavra)
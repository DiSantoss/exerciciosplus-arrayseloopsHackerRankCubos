function solucao(primeiraLetra, segundaLetra, palavras) {
	let encontrouPalavra = false;
    for (let palavra of palavras) {
        if (palavra.startsWith(primeiraLetra + segundaLetra)) {
            console.log(palavra);
            encontrouPalavra = true;
        }
    }
    if (!encontrouPalavra) {
        console.log("NENHUMA");
    }

}

let primeiraLetra = "a"
let segundaLetra = "v"

let palavras = ["aveia",
"manha",
"ave"]

solucao(primeiraLetra,segundaLetra,palavras)
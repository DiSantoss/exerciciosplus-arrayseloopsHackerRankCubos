
/*
frase1 = *Canis %lupus )familiaris
frase2 = Felis) silvestris *catus&
frase3 = $Ailuropoda@ melanoleuca!

*/

let frase1 = "*Canis %lupus )familiaris"
let frase2 = "Felis) silvestris *catus&"
let frase3 = "$Ailuropoda@ melanoleuca!"

function solucao(stringCorrompida) {
	let dadoPurificado = '';
    for (let resultado of stringCorrompida) {
        
        if(resultado === '!' || resultado === '@' || resultado === '#' || resultado === '$' || resultado === '%' || resultado === '&' || resultado === '*' || resultado === '(' || resultado === ')' || resultado === '.' ) {
        }
         else {
             dadoPurificado += resultado
         }   
    }
    console.log(dadoPurificado)
}

solucao(frase3)
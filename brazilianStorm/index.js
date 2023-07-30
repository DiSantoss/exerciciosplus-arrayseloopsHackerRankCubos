function solucao(notas) {
	
 
    let maiorNota = notas[0];
    let menorNota = notas[0];
    let somaNotas = 0;
  
  
    for (const nota of notas) {
        

      if (nota > maiorNota) {
        maiorNota = nota;
      }
      if (nota < menorNota) {
        menorNota = nota;
      }

      somaNotas += nota;
     
    }
  
  
    const notaFinal = (somaNotas - maiorNota - menorNota) / (notas.length - 2);
  
    console.log(notaFinal);
     
  }
  

  let notas = [100 ,100, 100, 20, 50, 30, 14, 100, 100, 100]

  solucao(notas)
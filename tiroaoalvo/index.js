function solucao(disparos) {
    let contadorPontuacaoAcima70 = 0;
    
        for (let pontuacao of disparos) {
            if (pontuacao > 70) {
                contadorPontuacaoAcima70++;
            }
        }
    
        if (contadorPontuacaoAcima70 >= 3) {
            console.log(contadorPontuacaoAcima70);
        } else {
            console.log("ELIMINADO");
        }
    }

    
    let disparos = [100, 71, 50, 70, 81, 30]

    solucao(disparos)
function frequencia(vetor){
    let unico = [];
    for (let num of vetor){
        if (unico.indexOf(num) == -1){
            unico.push(num);
        } 
    }
    unicoCont = [];
    for (elem of unico){
        cont = 0;
        for (num of vetor){
            if (elem == num){
                cont += 1;
            }
        }
        unicoCont.push(cont);
    }
    let maior = unicoCont[1];
    for (elem of unicoCont){
        if (elem > maior){
            maior = elem;
        }
    }
    maiorFreq = [];
    indice = unicoCont.indexOf(maior);
    maiorFreq.push(unico[indice]);

    // ACRESCENTEI ESSA PARTE NO CÓDIGO PARA IDENTIFICAR A EXISTÊNCIA DE OUTROS NÚMEROS COM A FREQUENCIA MÁXIMA
    for (let i = indice + 1; i < unicoCont.length; i++){
        if (unicoCont[i] == maior){
            maiorFreq.push(unico[i]);
        }
    } 
    return maiorFreq;
}
numeros = frequencia([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
console.log(numeros);
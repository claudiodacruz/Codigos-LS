function pares(vetor){
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
    pares = 0;
    for (elem of unicoCont){
        par = elem / 2;
        if (par >= 1){
            pares += (par - (elem % 2)/2);
        }     
    }
    return pares;
}
numeros = pares([10, 20, 20, 10, 10, 30, 50, 10, 20]);
console.log(numeros);
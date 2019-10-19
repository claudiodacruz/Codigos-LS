function proporcao(vetor){
    let resultado = [];
    let negativos = (vetor.filter(value => value < 0).length / vetor.length).toFixed(6);
    resultado.push(negativos);
    let positivos = (vetor.filter(value => value >0).length / vetor.length).toFixed(6);
    resultado.push(positivos);
    let nulo = (vetor.filter(value => value == 0).length / vetor.length).toFixed(6);
    resultado.push(nulo);
    return resultado;
}
numeros = proporcao([1,2,3,-1,-2,-3,0,0])
console.log(numeros)
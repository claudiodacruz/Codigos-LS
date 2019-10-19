function somas(vetor){
    resultado = []
    vetor.sort((a,b) => a - b)
    menores = vetor.slice(0,vetor.length -1)
    maiores = vetor.slice(1)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const somarMenores = menores.reduce(reducer);
    resultado.push(somarMenores);
    const somarMaiores = maiores.reduce(reducer);
    resultado.push(somarMaiores);
    return resultado;
}
vetor = somas([0, 2, 6, 3, 4])
console.log(vetor)
function ordenar(vetor) {
    let vetorOrdenado = []; newVetor = vetor; loop = vetor.length;
    for (let i = 0; i < loop; i++){
        let menor = vetor.reduce((a,b) => a < b ? a : b);   
        vetorOrdenado.push(menor);
        let newVetor = vetor.filter(value => value != menor);
        vetor = newVetor;
    }
    return vetorOrdenado;
}   

var vetor = ordenar(['0752', '1110', '0001', '6322', '8000', '6321', '0000']);
console.log(vetor);
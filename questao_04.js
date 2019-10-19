function rotation(vetor, rotacoes){
    novo = vetor.slice(rotacoes);
    for (let i = 0; i < rotacoes; i++){
        novo.push(vetor[i])
    }   
    return novo;
}
vetor1 = rotation([1,2,3,4,5],1)
console.log(vetor1)
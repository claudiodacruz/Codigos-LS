function contarMaior(vetor1,vetor2) {
    let a = 0; b = 0; 
    for (let i = 0; i < vetor1.length; i++){
        if (vetor1[i] != vetor2[i]){
            vetor1[i] > vetor2[i] ? a += 1 : b+= 1
        }
    }
    return [a,b];
}

vetores = contarMaior([1, 1, 1],[0, 0, 0]);
console.log(vetores);
function velas(vetor){
    let result = vetor.filter(value => value == Math.max(...vetor));
    return result.length;
}
velas = velas([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])
console.log(velas)
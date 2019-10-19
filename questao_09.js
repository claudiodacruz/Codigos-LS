function espelhoSeq(num1, num2){
    let seq = [];
    for (let i = num1; i < num2+1; i++){
        seq.push(i)
    }
    let reverso = seq.slice(0,num2 - num1 + 1)
    reverso.reverse();
    novaSeq = seq +','+ reverso;
    resultado = novaSeq.split(",").reverse().join("");
    return resultado;
}
numero = espelhoSeq(10,13);
console.log(numero)
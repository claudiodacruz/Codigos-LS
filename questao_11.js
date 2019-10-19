function numLed(num){
    let vetorLeds = [6,2,5,5,4,5,6,3,7,6];
    let novoNum = num.toString();
    let vetorNum = [];
    for (let i = 0; i < novoNum.length; i++){
        var elem = novoNum.slice(i,i+1);
        vetorNum.push(parseInt(elem,10));
    }
    let resultado = 0;
    for (elem of vetorNum){
        resultado += vetorLeds[elem]
    }
    return resultado;

}
numero = numLed(23456);
console.log(numero);
function somaMenos0(num1,num2){
    let soma = num1 + num2;
    let nova = soma.toString();
    resultado ='';
    for (elem of nova){ 
        if (elem != '0'){
            resultado += elem;
        }
    }
    return resultado;
}
numeros = somaMenos0(99,6);
console.log(numeros);
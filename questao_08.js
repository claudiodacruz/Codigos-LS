function quantA(string, num){
    let nova = string.repeat(num);
    let novaString = nova.slice(0,num);
    let vetorString = [];
    for (let flag = 0; flag < num; flag++){
        let letra = novaString.slice(flag,flag+1);
        vetorString.push(letra);
    }
    let cont = 0;
    for (letraA of vetorString){
        if (letraA == 'a'){
            cont += 1;
        }
    }
    return cont;
}
palavra = quantA('aba',10);
console.log(palavra)
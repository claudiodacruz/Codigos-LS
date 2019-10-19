function transText(texto){
    var textoM = texto.toUpperCase();
    let novoTexto = [];
    for (let flag = 0; flag < texto.length; flag++){
        let letra = textoM.slice(flag,flag+1);
        novoTexto.push(letra);
    nTexto = novoTexto.join('-');
        
    }
    return nTexto;
}

texto1 = transText('banana');
console.log(texto1);
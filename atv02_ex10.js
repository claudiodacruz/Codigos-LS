function funny(texto) {
    novoTexto = texto.slice(0,texto.length);
    novoTexto = novoTexto.split('');
    textoReverse = novoTexto.slice(0,texto.length);
    textoReverse = textoReverse.reverse();
    novo = novoTexto.map(value => texto.charCodeAt(texto.indexOf(value)));
    novoReverse = textoReverse.map(value => texto.charCodeAt(texto.indexOf(value)));
    novoRes = novo.map(value => novo[novo.indexOf(value)+1] - value);
    novoReverseRes = novoReverse.map(value => value - novoReverse[novoReverse.indexOf(value)+1])
    vetorRes = novoRes.slice(0,texto.length - 1);
    for (let i = 0; i < texto.length - 1; i++){
        novoRes[i] == novoReverseRes[i] ? resultado = "Funny" : resultado = "Not Funny"
    }
    return resultado;
}

texto = funny('bcxz');
console.log(texto);
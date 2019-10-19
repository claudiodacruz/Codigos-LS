function contCaractere(texto){
    let acc = 0
    for (caractere of texto){
        let codCaractere = caractere.charCodeAt(caractere);
        acc += codCaractere;
    }
    return acc;
}

texto = contCaractere('lorem ipsum')
console.log(texto)

function contCaractere(texto){
    novoTexto = texto.split('');
    contar = novoTexto.reduce((acc,value) => acc + value.charCodeAt(),0);
    return contar;
}

texto = contCaractere('lorem ipsum')
console.log(texto)

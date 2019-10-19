function hackerrank(palavra, texto) {
    palavra.split('');
    let vetorTexto = texto.split('');
    for (letra of palavra){
        let indice = vetorTexto.indexOf(letra);
        if (indice == -1){
            return 'NO';
        }
        vetor = vetorTexto.slice(indice + 1);
        vetorTexto = vetor
    }
    return 'YES';
} 

texto = hackerrank('hackerrank','hackerworld');
console.log(texto);
function pokemon(vetor) {
    let unicos = [];
    for (elem of vetor){
        unicos.includes(elem) ? unicos : unicos.push(elem);
    }
    return (151 - unicos.length);
}

vetor = pokemon(['Charmander', 'Caterpie', 'Pidgeot', 'Rattata', 'Zubat', 'Zubat', 'Zubat']);
console.log(vetor);

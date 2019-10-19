function vale(texto) {
    let vale = 0; nivel = 0;
    for (elem of texto){
        elem == 'U' ? nivel += 1 : nivel -=1;
        nivel == 0 & elem == 'U' ? vale +=1 :vale +=0;
    }
    return vale;
}

vales = vale('UDDDUDUU');
console.log(vales);
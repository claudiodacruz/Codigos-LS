function contaFrutas(frutas){
    let maca = 0; laranja = 0;
    for (fruta of frutas){fruta > 5 & fruta < 10 ? maca += 1 : 
    (fruta < -5 & fruta > -10 ? laranja += 1 : laranja = laranja)}
    return `${maca} , ${laranja}`;
}

frutas = contaFrutas([7, 11 , 5 , 15 , -2, 2, 1 , 5, -6]);
console.log(frutas);
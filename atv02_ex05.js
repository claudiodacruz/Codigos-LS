function catMouse(a,b,c){
    let catA = Math.abs(c-a); catB = Math.abs(c-b);
    if (catA == catB){
        result = 'Mouse C';   
    }else{ catA > catB ? result = 'Cat B' : result = 'Cat A'}
    return result;
}
valores = catMouse(1,4,2);
console.log(valores);
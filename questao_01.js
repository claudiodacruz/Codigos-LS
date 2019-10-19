function dataEst(data){
    let dataForm = data.split('/');
    let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    return `${dataForm[0]} de ${meses[dataForm[1] - 1]} de ${dataForm[2]}`
}

data1 = dataEst('31/10/2020')
console.log(data1)
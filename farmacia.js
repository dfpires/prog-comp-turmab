function principal(){
    let vetFarmacias = []
    let vetRemedios = []
    cadastraFarmacias(vetFarmacias)
    cadastraRemedios(vetRemedios, vetFarmacias)
//    vendaRemedios(vetRemedios)
}

function cadastraFarmacias(vetFarmacias){
    for(let i=0;i<5;i++){
        let novaFarmacia = {
            codigo: Number(prompt('Código da farmacia')),
            nome: prompt('Nome da farmácia'),
            endereco: prompt('Endereço da farmácia')
        }
        // verificar se o código da novaFarmácia está no vetor
        // percorre o vetor vetFarmacias procurando por código já existente
        while (vetFarmacias.some((farm) => farm.codigo == novaFarmacia.codigo)){
            novaFarmacia.codigo = Number(prompt('Código já existe, informe um novo'))
        }
        vetFarmacias.push(novaFarmacia)
    }
}

function cadastraRemedios(vetRemedios, vetFarmacias){
    for(let i=0;i<5;i++){
        let novoRemedio = {
            codigoFarmacia: Number(prompt('Código da farmácia')),
            nome: prompt('Nome do remédio'),
            qtde: Number('Qtde do remédio'),
            preco: Number('Preço do remédio')
        }
        // ! é negação
        while(!vetFarmacias.some((farm) => farm.codigo == novoRemedio.codigoFarmacia)){
            novoRemedio.codigoFarmacia = Number(prompt('Farmácia não existe. Digite novamente'))
        }
        vetRemedios.push(novoRemedio)
    }
}
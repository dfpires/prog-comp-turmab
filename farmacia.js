// iremos tornar nossas funções em variáveis
principal() // chama a função principal
// a minha variável principal é uma função
let principal = () => {
    let vetFarmacias = []
    let vetRemedios = []
    cadastraFarmacias(vetFarmacias)
    cadastraRemedios(vetRemedios, vetFarmacias)
    vendaRemedios(vetRemedios)
}

let cadastraFarmacias = (vetFarmacias) => {
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

let cadastraRemedios = (vetRemedios, vetFarmacias) => {
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

let vendaRemedios = (vetRemedios) => {
    for(let cont=0;cont<5;cont++){
        let objVenda = {
            codigo: Number(prompt('Código do remédio')),
            nome: prompt('Nome do remédio'),
            qtde: Number(prompt('Qtde vendida')),
        }
        // percorre o vetor vetRemedios procurando pelo código 
        // do remédio, e o nome do remédio
        let achou = false // não encontrei o remédio
        for(let i=0;i<vetRemedios.length;i++){
            if (vetRemedios[i].codigoFarmacia == objVenda.codigo 
                && vetRemedios[i].nome == objVenda.nome){
                achou = true // achei o remédio
                // vamos realizar a venda
                if (vetRemedios[i].qtde >= objVenda.qtde){
                    vetRemedios[i].qtde = vetRemedios[i].qtde - objVenda.qtde
                }
                else {
                    alert('Estoque insuficiente para esta venda')
                }
            }
        }
        if(!achou){
            alert('Produto não encontrado')
        }
    }

}
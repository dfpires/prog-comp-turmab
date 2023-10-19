let entradaDados = (bikes, marcas) => {
        let objBike = {
             marca: prompt("Digite a marca da bike").toUpperCase(),
             modelo: prompt("Digite o modelo da bike"),
             quadro: Number(prompt("Digite o quadro da bike")),
             aro: Number(prompt("Digite o aro da bike")),
             ano: Number(prompt("Digite o ano da bike")),
             preco: Number(prompt("Digite o preço da bike"))
        }
        while (!marcas.includes(objBike.marca)){
               objBike.marca = prompt("Digite a marca correta da bike").toUpperCase()
         }
        // adiciona a bike em bikes
        bikes.push(objBike)
}
function calculaMediaPrecos(bikes){
    // média de preço das bikes
    let somaPrecos = 0
    for(let i=0; i < bikes.length; i++){
        somaPrecos = somaPrecos + bikes[i].preco
    }
    if (bikes.length == 0){
        alert(`Não há bikes cadastradas`)
    }
    else {
        console.log(`A média de preço das bikes é ${somaPrecos/bikes.length}`)
    }
}
function calculaBikeMaisAntiga(bikes){
    // qual a bike mais antiga
    if (bikes.length == 0){
        alert(`Não há bikes cadastradas`)
    }
    else {
        let objAntigo = bikes[0] // é a primeira
        for(let i=0; i < bikes.length; i++){
            if(bikes[i].ano < objAntigo.ano){
                objAntigo = bikes[i]
            }
        }
        console.log(objAntigo)
    }
}
function bikesMarcaCaloi(bikes){
     // quais as bikes são da marca caloi
     let bikesCaloi = []
     for (let i=0; i< bikes.length; i++){
         if(bikes[i].marca == "CALOI"){
             bikesCaloi.push(bikes[i]) // adiciona no vetor
         }
     }
     if (bikesCaloi.length == 0){
            alert(`Não há bikes da marca Caloi`)
     }
     else {
        console.log(bikesCaloi)
     }
}
function qtdeBikesAro29(bikes){
     // qts bikes possuem aro 29
     let cont = 0
     for(let i=0; i < bikes.length; i++){
         if(bikes[i].aro == 29){
             cont++
         }
     }
     if (bikes.length == 0){
        alert('Não existem bikes cadastradas')
     }
     else {
        console.log(`Qtde de bikes com aro 29 ${cont}`)
     }
}
function bikeMaiorQuadro(bikes){
     // qual a bike possui maior quadro
     if (bikes.length == 0){
        alert('Nenhuma bike cadastrada')
     }
     else {
        let maiorQuadro = bikes[0]
        for(let i=0; i < bikes.length; i++){
            if(bikes[i].quadro > maiorQuadro.quadro){
                maiorQuadro = bikes[i]
            }
        }
        console.log(maiorQuadro)
    }
}
let bikes = () => {
    let bikes = []
    let marcas = ["CALOI", "SCOTT", "CANONDALE"]
    let opcao
    do {
        opcao = Number(prompt('Digite \n 1. Cadastra uma bike \n 2. Média de preços \n 3. Bike mais antiga \n 4. Bikes Caloi \n 5. Qtde bikes aro 29 \n 6. Bike maior quadro \n 7. Sair'))
        switch(opcao){
            case 1: entradaDados(bikes, marcas)
                break
            case 2: calculaMediaPrecos(bikes)
                break
            case 3: calculaBikeMaisAntiga(bikes)
                break
            case 4: bikesMarcaCaloi(bikes)
                break
            case 5: qtdeBikesAro29(bikes)
                break 
            case 6: bikeMaiorQuadro(bikes)
                break
            case 7: alert('Programa será encerrado')
                break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 7)
   
    
   
    
}
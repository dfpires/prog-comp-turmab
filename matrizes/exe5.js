function lerMatriz(matriz, vetor){
    for(let i=0;i<12;i++){ // para cada linha - mÊs
        matriz[i] = [] // vetor dentro de um vetor
        alert(`Informe os valores de venda de ${vetor[i]}`)
        for(let j=0;j<4;j++){ // para cada coluna - semana
            matriz[i][j] = Number(prompt(`Vendas da semana ${j+1}`))
        }
    }
}

function calculaTotalMes(matriz, vetor){
    let total
    for(let i=0;i<12;i++){ // para cada mês
        total = 0
        for(let j=0;j<4;j++){
            total = total + matriz[i][j]
        }
        alert(`Total vendido em ${vetor[i]} foi ${total}`)
    }
}

function calculaTotalSemana(matriz){
    let total
    for(let j=0;j<4;j++) { // para cada semana
        total = 0
        for(let i=0;i<12;i++){ // para cada mês
            total = total + matriz[i][j]
        }
        alert(`Total vendido na semana ${j+1} foi ${total}`)
    }
}

function principal(){
    let matriz = [] // vetor
    let vetor = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubr", "novembro", "dezembro"]
    lerMatriz(matriz, vetor)
    calculaTotalMes(matriz, vetor)
    calculaTotalSemana(matriz)
}
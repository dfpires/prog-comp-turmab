function leituraMatriz(matriz){
    for(let i=0;i<4;i++){
        matriz[i] = [] // cria espaço para cada vetor da matriz
        alert(`Informe os elementos da linha ${i+1}`)
        for(let j=0;j<4;j++){
            matriz[i][j] = 
                Number(prompt(`Informe o valor do elemento [${i}][${j}]`))
        }
    }
}
function somaDiagonalPrincipal(matriz){
    for(let i=0;i<4;i++){
        soma = soma + matriz[i][i]
    }
    console.log(`Soma da diagonal principal: ${soma}`)
}
function somaDiagonalSecundaria(matriz){
    for(let i=0;i<4;i++){
        soma = soma + matriz[i][3-i]
    }
    console.log(`Soma da diagonal secundária: ${soma}`)
}
function imprimeMatriz(matriz){
    console.log(matriz)
}
function principal(){
    // declara a matriz
    let matriz = []
    leituraMatriz(matriz)
    imprimeMatriz(matriz)
}
function leitura(matriz){
    for(let i=0;i<3;i++){
        matriz[i] = [] // aloca espaço na memória da matriz 
        for(let j=0;j<4;j++){
            matriz[i][j] = parseInt(Math.random() * 10)
        }    
    }
}
function multiplicaSomaColunas(matriz){
    // construir um vetor - soma de cada coluna da matriz
    let vetor = []
    for(let j=0;j<4;j++){
        vetor[j] = 0
        for(let i=0;i<3;i++){
            vetor[j] = vetor[j] + matriz[i][j]
        }
    }
    // multiplica cada elemento da matriz pela soma da coluna
    for(let i=0;i<3;i++){
        for(let j=0;j<4;j++){
            matriz[i][j] =  matriz[i][j] * vetor[j]
        }    
    }
    console.log(matriz)
}
function principal(){
    let matriz = []
    leitura(matriz)
    multiplicaSomaColunas(matriz)
}
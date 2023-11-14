function soma(mat1, mat2, mat3){
    for(let i=0;i<mat1.length;i++){
        mat3[i] = []
        for(let i=0;i<mat2.length;i++){
            mat3[i][j] = mat1[i][j] + mat2[i][j]
        }    
    }
}
function principal(){
    let mat1 = []
    let mat2 = []
    let mat3 = []
    leitura(mat1)
    leitura(mat2)
    soma(mat1, mat2, mat3)

}
function exe1(){
    // declara o objeto e inicializa os valores
    let obj = {
        a: Number(prompt(`Informe lado a do triângulo`)),
        b: Number(prompt(`Informe lado b do triângulo`)),
        c: Number(prompt(`Informe lado c do triângulo`)),
        delta: 0
    }
    // calcula do delta
    // ** exponencial
    obj.delta = (obj.b ** 2) - (4 * obj.a * obj.c)
    console.log(`O valor do delta do triângulo é ${obj.delta}`)
}

function exe2(){
    let somaMedias = 0
    for(let i=0; i<10;i++){
        let obj = {
            codigo: Number(prompt(`Informe o código do aluno`)),
            nome: prompt(`Informe o nome do aluno`),
            p1: Number(prompt(`Informe a nota da P1`)),
            p2: Number(prompt(`Informe a nota da P2`)),
            media: 0
        }
        obj.media = (obj.p1 + obj.p2) / 2
        console.log(`O aluno ${obj.nome} tem média ${obj.media}`)
        somaMedias = somaMedias + obj.media
    }
    console.log(`A média da turma é ${somaMedias/10}`)
}
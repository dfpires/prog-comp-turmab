let cadastraPartido = (vetPartidos) => {
    // obtendo os dados do usuário e criando objeto
    let objPartido = {
        codigo: Number(prompt('Informe código do partido')),
        nome: prompt('Informe nome do partido'),
        sigla: prompt('Informe sigla do partido'),
        presidente: prompt('Informe presidente do partido'),
        nroCandidatos: Number(prompt('Informe nro de candidatos'))
    }
    // verifica se o código já existe em algum partido
    while (vetPartidos.some((item) => item.codigo == objPartido.codigo)){
        alert('Código do partido já existente')
        objPartido.codigo = Number(prompt('Informe novo código'))
    }
    // adiciona objeto no vetor
    vetPartidos.push(objPartido)
}
let cadastraCandidato = (vetCandidatos, vetPartidos) => {
    let objCandidato = {
        codPartido : Number(prompt('Informe código do partido')),
        nome: prompt('Informe nome do candidato'),
        qtde: 0,
        cargo: prompt('Informe cargo do candidato')
    }
    // percorre vetor de partidos
    while (!vetPartidos.some( (item) => item.codigo == objCandidato.codPartido)){
        (objPartido.length == 0 ? alert('Sem partido') : alert('Partido não existe'))
        objCandidato.codPartido = Number(prompt('Informe partido que existe'))
    }
    // adciiona objeto no vetor
    vetCandidatos.push(objCandidato)
}
let votar = (vetCandidatos) => {
    let codigoPartidoVoto = Number(prompt('Informe código do partido'))
    let nomeCandidatoVoto = prompt('Informe nome do candidato')
    // percorrer para encontrar candidato
    let achou = false
    for(let i=0;i<vetCandidatos.length;i++){
        if (vetCandidatos[i].codPartido == codigoPartidoVoto && vetCandidatos[i].nome == nomeCandidatoVoto){
            vetCandidatos[i].qtde++
            alert('Voto computado com sucesso')
            achou = true
        }
    }
    if (!achou) {
        alert('Partido ou candidato não existe')
    }
}
let votacao = () => {
    let vetPartidos = []
    let vetCandidatos = []
    let opcao
    do {
        opcao = Number(prompt('Escolha \n 1. Cadastrar partido \n 2. Cadastrar candidato \n 3. Votar 4. Sair'))
        switch(opcao){
            case 1: cadastraPartido(vetPartidos)
                    break
            case 2: cadastraCandidato(vetCandidatos, vetPartidos)
                    break
            case 3: votar(vetCandidatos)
                    break
            case 4: alert('Programa será encerrado')
                    break
            default: alert('Opção inválida')
        }
    }
    while (opcao != 4)
}
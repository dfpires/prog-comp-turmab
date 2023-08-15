function exe1(){
    let filmes = [] // vetor que guarda os filmes 
    for(let i=0;i<4;i++){ // para cada filme
        // cria objeto filme
        let objFilme = {
            codigo: Number(prompt(`Informe código do filme`)),
            titulo: prompt(`Informe título do filme`),
            class: Number(prompt(`Informe classificação do filme`)),
            avaliacao: Number(prompt(`Informe avaliação do filme`)),
            duracao: Number(prompt(`Informe duração do filme`))
        }
        // adiciona objFilme no vetor filmes
        filmes.push(objFilme)
    }
    // média da classificação etária
    let somaClassificacao = 0
    for(let i=0;i<4;i++){
        somaClassificacao = somaClassificacao + filmes[i].class
    }
    console.log(`A média da classificação etária é ${somaClassificacao/4}`)

    // filme mais longo e mais curto
    let tempoMaisLongo = filmes[0].duracao
    let tituloMaisLongo = filmes[0].titulo
    let tempoMaisCurto = filmes[0].duracao
    let tituloMaisCurto = filmes[0].titulo
    for(let i=1;i<4;i++){
        if(filmes[i].duracao > tempoMaisLongo){
            tempoMaisLongo = filmes[i].duracao
            tituloMaisLongo = filmes[i].titulo
        }
        if(filmes[i].duracao < tempoMaisCurto){
            tempoMaisCurto = filmes[i].duracao
            tituloMaisCurto = filmes[i].titulo
        }
    }
    console.log(`O filme mais longo é ${tituloMaisLongo} com ${tempoMaisLongo} minutos`)
    console.log(`O filme mais curto é ${tituloMaisCurto} com ${tempoMaisCurto} minutos`)
}
function eleicao(){
    let partidos = ["PT", "PSDB", "PL", "PSB"]
    let candidatos = []
    // entrada de dados
    for(let i=0;i<10;i++){
        let obj = {
            codigo: Number(prompt(`Informe código do candidato`)),
            nome: prompt(`Informe nome do candidato`),
            partido: prompt(`Informe partido do candidato`).toUpperCase(),    
            qtdeVotos: Number(prompt(`Informe qtde de votos do candidato`))
        }
        // verifica se o partido existe
        while (!partidos.includes(obj.partido)){
            obj.partido = prompt(`Partido inválido. Informe partido do candidato`).toUpperCase()
        }
        // adiciona obj no vetor candidatos
        candidatos.push(obj)
    }
    // candidato mais votado
    let maisVotado = candidatos[0].qtdeVotos
    let nomeMaisVotado = candidatos[0].nome
    let partidoMaisVotado = candidatos[0].partido
    for(let i=0;i<10;i++){
        if (candidatos[i].qtdeVotos > maisVotado){
            maisVotado = candidatos[i].qtdeVotos
            nomeMaisVotado = candidatos[i].nome
            partidoMaisVotado = candidatos[i].partido
        }
    }
    console.log(`O candidato mais votado é ${nomeMaisVotado} do partido ${partidoMaisVotado} com ${maisVotado} votos`)

    // mais votado de um determinado partido
    let maisPartido = prompt(`Informe partido para verificar o mais votado`).toUpperCase()
    let qtdeMaisPartido = 0
    let nomeMaisPartido = ""
    for(let i=0;i<10;i++){
        if (candidatos[i].partido == maisPartido){
            if (candidatos[i].qtdeVotos > qtdeMaisPartido){
                qtdeMaisPartido = candidatos[i].qtdeVotos
                nomeMaisPartido = candidatos[i].nome
            }
        }
    }
    console.log(`O candidato mais votado do partido ${maisPartido} é ${nomeMaisPartido} com ${qtdeMaisPartido} votos`)
}

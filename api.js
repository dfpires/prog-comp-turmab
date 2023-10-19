// esta função é assíncrona, pois ela vai fazer uma requisição para a API
// quem a chamar pode executar outras tarefas mesmo sem ter a resposta
async function buscaCep(){
    // pega o valor do input
    let cep = document.getElementById('cep').value

    // faz a requisição para a API
    // await é aguardar pela resposta da requisição (promise)
    // fetch é a função que faz a requisição da API
    let resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    // dados chegaram em resposta na formato de string
    // transforma a resposta em um objeto
    let dados = await resposta.json()

    // recupera o logradouro e coloca no input endereco
    document.getElementById('logradouro').value = dados.logradouro
    document.getElementById('bairro').value = dados.bairro
    document.getElementById('localidade').value = dados.localidade
    document.getElementById('uf').value = dados.uf
    document.getElementById('ddd').value = dados.ddd
    
}
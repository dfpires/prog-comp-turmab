function exe1(str){
    let i = 0
    while (str[i] != undefined){
        i++
    }
    console.log(`Comprimento ${i}`)
}
exe1(prompt('Informe uma palavra')) // 8 
//##################
function  exe2(nome){
    if ((nome[0] == 'A' || nome[0] == 'a')){
        console.log(nome)
    }
}
exe2(prompt('Informe um nome'))
// ###################
function exe3(nome){
    // posições de 0 a 3, pois o 4 não entra
    console.log(nome.slice(0, 4))
}
exe3(prompt('Informe um nome'))
// #####################
function exe4(nome){
    // split("") separa pelo espaço
    // join("") junta
    console.log(nome.split(" ").join("").length)
}
exe4(prompt('Infoeme um nome'))
// #######################
function exe5(nome, sexo, idade){
    if (sexo.toLowerCase() == "feminino" && idade < 25){
        console.log(`${nome} ACEITA`)
    }
    else {
        console.log(`${nome} NÃO ACEITA`) 
    }
}
exe5(prompt(`Informe nome`), prompt(`Informe sexo`), 
        Number(prompt(`Informe idade`)))
//#################################
function exe6(str1, str2){
    if (str1 == str2){
        console.log('Conteúdos iguais')
    }
    else {
        console.log('Conteúdos diferentes')
    }
}
exe6(prompt('Informe nome 1'), prompt('Informe nome 2'))
//#####################################################
function exe7(str){
   let conta = 0
    for(let i=0;i<str.length;i++){
        if (str[i] == '1'){
            conta++
        }
    }
    console.log(conta)
}
exe7(prompt('Informe um número'))
// #############################################
function exe8(str){
    let novo = str.replaceAll('0', '1')
    console.log(novo)
}
exe8(prompt('Informe uma string'))
// ########################################
function exe9(str){
    let vetor = []
    for(let i=str.length;i>0;i--){
        vetor.push(str[i-1]) 
    }
    console.log(vetor.join(""))
}
exe9(prompt('Informe uma string')) // boca - acob
// #########################################
function exe10(str){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let nova = []
    for(let i=0;i<str.length;i++){
        if (!vogais.some( (item) => item == str[i])){
            nova.push(str[i])
        }
    }
    console.log(nova.join(""))
}
exe10(prompt('Informe um nome'))

function exe20(str){
    const letras = [
        'a', 'b', 'c', 'd', 'e', 'f',
        'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x',
        'y', 'z'
      ]
    let novaString = []
    for(let i=0;i<str.length;i++){
        let posicao = letras.findIndex( (item) => item == str[i])
        if (posicao == 23){ // x
            novaString.push(letras[0])    
        }
        else if (posicao == 24){ // y
            novaString.push(letras[1])    
        }
        else if (posicao == 25){ // z
            novaString.push(letras[2])    
        }
        else {
            novaString.push(letras[posicao+3]) 
        }
    }
    console.log(novaString.join(""))
}
exe20("abcxyz")

function exe21(str){
    let verifica = str.split("").reverse().join("")
    if (str == verifica){
        console.log('É palíndrome')
    }
    else {
        console.log('Não é palíndrome')
    }
}
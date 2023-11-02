// exemplo da função forEach
let memoriaRam = [4, 8, 16, 32, 64, 128, 256]
let saida = ""
memoriaRam.forEach( (item) => saida = saida + item + " GB \n")
console.log(saida)

// exemplo da função map
let idade = [16, 17, 18, 19, 20, 21]
// se a arrow function e anônima for de uma linha, 
// não precisa usar return 
let dobrar = idade.map( (item) => item * 2)
console.log(dobrar)

// exemplo da função reduce
let notas = [7, 8, 9, 2, 1, 4, 7]
let soma = notas.reduce( (acumula, item ) => acumula + item)
console.log(soma/notas.length)

let multiplica = notas.reduce( (acumula, item) => acumula * item)
console.log(multiplica)

// exemplo da função filter, find e some
let vetor = [2, 12, 23, 34, 45, 60]
let pares = vetor.filter( (item) => item % 2 == 0)
console.log(pares)

let par = vetor.find( (item) => item % 2 == 0)
console.log(par)

let temPar = vetor.some( (item) => item % 2 == 0)
console.log(temPar)

// exemplo da função charAt
let nome = "Flavio"
console.log(nome.charAt(0))

// quando o dado vem do servidor web, ele vem como string
// e precisamos converter esta string em objeto JS
// JSON.parse
let string = '{"name":"John", "age":30, "city":"New York"}'
let objetoJS = JSON.parse(string)
console.log(objetoJS)

// quando o dado é enviado para o servidor web, ele vai como string
// e precisamos converter objetoJS em string
string = JSON.stringify(objetoJS)
console.log(string)

// operador spread ...
let times = ["são paulo", "corinthians", "palmeiras", "santos"]
console.log(...times)

// comando for
for(let time of times){
    console.log(time)
}

for(let time in times){
    console.log(time)
}
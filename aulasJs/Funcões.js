function calc(x1,x2, operator){
    return eval(`${x1} ${operator} ${x2}`)//A FUNÇÃO NATIVA  eval () avalia ou executa um argumento.
}

let resultado = calc(1, 4, '-'  )
console.log(resultado)

//-----------------------------------FUNÇÃO ANONIMA É UMA FUNÇÃO Q NAO TEM NOME
/*(function(x3,x5, vezes){
    return eval(`${x3} ${vezes} ${x5}`);//A FUNÇÃO NATIVA  eval () avalia ou executa um argumento.
})(1, 4, '*' );*/

//-----------------------------------ARROR FUNCTION--------------------------------------


let sub= (x, y, operar) => {

    return eval(`${x} ${operar} ${y}`)   
}



let sus = sub(20,10, '+')

console.log(sus);

let celular = function(){
    this.cor = 'prata'

    this.ligar = function ()
    {

        console.log('ligar')
        return 'Ligando'


    }
}

let objetos = new celular();

console.log(objetos)
console.log(objetos.ligar())
console.log(objetos.cor)//ACESSANDO UM OBJETOS
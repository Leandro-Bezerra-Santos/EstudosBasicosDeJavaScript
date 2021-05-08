let carro = ['palio 98', 'toro', 'uno', 'bmw',new Date(), function(){}];

console.log(carro.length);//SABER A QUANTIDADE DE ITEM QUE TEM NO ARRAY
console.log(carro[0]);//PEGAR UM ITEM DO ARRAY
console.log(carro[3]);//PEGAR UM ITEM DO ARRAY
console.log(carro[4].getFullYear());//PEGAR UM ITEM DO ARRAY


carro.forEach(function(value, Arrays){
     
    console.log(Arrays, value)

});
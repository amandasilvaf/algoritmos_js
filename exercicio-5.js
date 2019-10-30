

function media(){
    var numeros = 0;
    for (var i = 1; i <= 20; i++){
        console.log(i);
        numeros = numeros +i;
    }
    
    return numeros/20;
    
  
}
var m = media();
console.log('A média dos números entre 1 e 20 é: ' + m)



//if(celsius != String){


function conversao(celsius){
    return  (9*celsius + 160) / 5
}

var celsius = prompt("Informe os graus centígrados:")

var convertido = conversao(celsius)
    
alert(celsius + 'º centígrados equivalem a ' + convertido.toFixed(2) + 'º Fahrenheit.' ) //Mensagem no navegador
console.log(celsius + 'º centígrados equivalem a ' + convertido.toFixed(2) + ' º Fahrenheit.' ) //Mensagem no console)


//}else{
   // alert('Digite um número: ')
//}
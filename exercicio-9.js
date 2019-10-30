function mostraDobro(){
    
    var num = parseFloat(prompt('Digite um valor: '))

    while(num != -1){
        console.log(num*2);
        document.write(num*2 + ' ')
        num = parseFloat(prompt('Digite um valor: '))
    }
}


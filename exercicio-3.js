function cotacao(reais){
    return reais / 4.17
}

var reais = prompt('Digite o valor em Real a ser convertido para Dólar: ')
var dolar = cotacao(reais)

alert(reais + ' reais equivalem a ' + dolar.toFixed(2) + ' dólares.') // nav
console.log(reais + ' reais equivalem a ' + dolar.toFixed(2) + ' dólares.') // console

function litros(distancia){
    return distancia/12
}

function velocidademedia(tempo){
    return distancia/tempo
}

function gasto(precoLitro){
    return precoLitro* litrosgastos
}



var distancia = prompt("Informe a distância que será percorrida, em km:")
var litrosgastos = litros(distancia)

alert('Para percorrer ' + distancia + ' km, serão consumidos ' + litrosgastos.toFixed(2) + ' litros de combustível' ) //Mensagem no navegador
console.log('Para percorrer ' + distancia + ' km, serão consumidos ' + litrosgastos.toFixed(2) + ' litros de combustível' ) //Mensagem no console)

var precoLitro = prompt("Qual o atual valor do litro do combustível? ")
var gastoTotal = gasto(precoLitro)
alert('Você gastará ' + gastoTotal.toFixed(2) + ' R$ em combustível para esta viagem.' ) // navegador
console.log('Você gastará ' + gastoTotal.toFixed(2) + ' R$ em combustível para esta viagem.') // console


var tempo = prompt("Em quantas horas você gostaria de concluir a viagem? ")
var velocidade = velocidademedia(tempo)

alert('Para concluir a viagem em '+ tempo + ' horas, você deverá dirigir à velocidade média de ' + velocidade.toFixed(2) + ' km/h' ) // no navegador
console.log('Para concluir a viagem em '+ tempo + ' horas, você deverá dirigir à velocidade média de ' + velocidade.toFixed(2) + ' km/h') // no console
var aluno = prompt('Qual o nome do aluno?');

function mediaDoAluno(){
    var notas=[];
    var soma = 0 ;
    for(var i=0; i<20; i++){

        notas[i] = parseFloat(prompt('Digite a ' + (i+1) + 'ª nota de '+ aluno + ': '))
        soma += notas[i];
    }
    return soma/20 ;
}

var media = mediaDoAluno();
console.log('A média das notas de ' + aluno + ' é: ' + media.toFixed(1));
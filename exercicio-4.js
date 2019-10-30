

var aluno = prompt('Qual o nome do aluno?');


function mediaAluno(){
    var notas = [] 
    var notaf = 0.0; 

    for (var i= 0; i<3; i++){
        notas[i] = parseFloat(prompt('Informe a ' + (i+1) + 'ª nota de ' + aluno));
        notaf += notas[i];
    
    }
    return notaf/3;
}

var mediaFinal =mediaAluno();
var conceito;

function classificacao(mediaFinal){
    if (mediaFinal <= 5.9){
        conceito = 'I';
    }
    else if(mediaFinal <= 6.9){
        conceito = 'D';
    }
    else if(mediaFinal <= 7.9){
        conceito = 'C';
    }
    else if (mediaFinal <= 8.9){
        conceito = 'B';
    }
    else{
        conceito = 'A';
    }
    return conceito;
}

var conceitofinal = classificacao(mediaFinal);

console.log('A média final de ' + aluno + ' é: ' + mediaFinal.toFixed(2) + '. Portanto, seu conceito é ' + conceitofinal + '.');
alert('A média final de ' + aluno + ' é: ' + mediaFinal.toFixed(2) + '. Portanto, seu conceito é ' + conceitofinal + '.')



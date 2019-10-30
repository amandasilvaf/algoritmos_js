var nomeFuncionario  = "";
var maiorSalario = 0;
var qtdFuncionarios = 0;
var totalSalarios = 0;
var menorSalario = 0;
var nomeMaiorSalario;
var nomeMenorSalario
var mediaSalarial;

function guardarDados(){
while(nomeFuncionario != -1){
        nomeFuncionario = prompt('Qual o nome do funcionário?')
        if(nomeFuncionario != -1){
            qtdFuncionarios += 1;
            salarioFuncionario = parseFloat(prompt('Digite o salário do funcionário'));
            totalSalarios += salarioFuncionario;
          
            if(menorSalario == 0){

              menorSalario = salarioFuncionario;
              nomeMenorSalario = nomeFuncionario;

            }else if(salarioFuncionario < menorSalario){
                menorSalario = salarioFuncionario;
                nomeMenorSalario = nomeFuncionario;
            }

             if(salarioFuncionario > maiorSalario){
                 maiorSalario = salarioFuncionario;
                 nomeMaiorSalario = nomeFuncionario;
             }

          console.log(nomeFuncionario);
        }
}
 
 mediaSalarial = totalSalarios / qtdFuncionarios;

 console.log("O total gasto com funcionários foi R$ " + totalSalarios);
 console.log("A média salarial dos funcionários é R$ " + mediaSalarial.toFixed(2) );
 console.log("O maior salário é R$ " + maiorSalario + ", do(a) funcionário(a) " + nomeMaiorSalario);
 console.log("O menor salário é R$ " + menorSalario + ", do(a) funcionário(a) " + nomeMenorSalario);

}

guardarDados()

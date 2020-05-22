const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 30;

const tempoContribuicao = idade + contribuicao;

const aposetadoriaHomem = sexo == 'M' && contribuicao >= 35 && tempoContribuicao >= 95;
const aposetadoriaMulher = sexo == 'F' && contribuicao >= 30 && tempoContribuicao >= 85;

if (aposetadoriaHomem || aposetadoriaMulher)
    console.log(`${nome}, você já pode se aponsentar!`)
else
  console.log(`${nome}, você ainda não pode se aponsentar!`)

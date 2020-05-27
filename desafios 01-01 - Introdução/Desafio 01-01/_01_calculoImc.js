const weight = 40;
const height = 1.67;
const gender = 'female';
const imc = weight / Math.pow(height, 2);

if ((imc < 19.1 && gender === 'female') || (imc < 20.7 && gender === 'male'))
  console.log(`Com o IMC de ${imc.toFixed(1)}, você está abaixo do peso!`);

else if ((imc < 25.8 && gender === 'female') || (imc < 26.4 && gender === 'male'))
  console.log(`Com o IMC de ${imc.toFixed(1)}, você está no peso normal!`);

else if ((imc < 27.3 && gender === 'female') || (imc < 27.8 && gender === 'male'))
  console.log(`Com o IMC de ${imc.toFixed(1)}, você está no peso normal!`);

else if ((imc < 31.1 && gender === 'female') || (imc < 32.3 && gender === 'male'))
  console.log(`Com o IMC de ${imc.toFixed(1)}, você está no peso normal!`);

else if ((imc >= 31.1 && gender === 'female') || (imc >= 32.3 && gender === 'male'))
  console.log(`Com o IMC de ${imc.toFixed(1)}, você está no peso normal!`);

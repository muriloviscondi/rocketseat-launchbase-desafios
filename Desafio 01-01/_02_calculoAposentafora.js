const name = 'Silvano';
const gender = 'M';
const age = 25;
const contribution = 23;
const rule = age + contribution;

if ((age >= 35 && gender === 'M') || (age >= 30 && gender === 'F')) {
  if ((gender === 'M' && rule >= 95) || gender === 'F' && rule >= 85) {
    console.log(`${name}, você já pode se aposentar`)
  } else {
    console.log(`${name}, você ainda não pode se aposentar`)
  }
} else {
  console.log(`${name}, você ainda não pode se aposentar`)
}

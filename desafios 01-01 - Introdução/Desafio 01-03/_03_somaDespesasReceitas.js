const users = [
  {
    nome: "Salvio",
    incomes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    incomes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenses: [450.2, 29.9]
  }
];

function sumIncomes(user) {
  let sum = 0;
  for(let income of user.incomes){
    sum += income;
  }
  
  return sum;
}

function sumExpenses(user) {
  let sum = 0;
  for(let expense of user.expenses) {
    sum += expense;
  }
  
  return sum;
}

function result() {
  let sum = 0;
  for(let i = 0; i < users.length; i++) {
    sum = sumIncomes(users[i]) - sumExpenses(users[i]);
    
    if (sum > 0) {
      console.log(`${users[i].nome} possui saldo POSITIVO de R$ ${sum.toFixed(2)}`);
    } else {
      console.log(`${users[i].nome} possui saldo NEGATIVO de R$ ${sum.toFixed(2)}`);
    }
  }
}

result();

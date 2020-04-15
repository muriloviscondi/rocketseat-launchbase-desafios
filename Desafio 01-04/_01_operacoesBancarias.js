const user = {
  name: 'Mariana',
  transactions: [],
  balance: 0
}

function createTransaction(type) {
  user.transactions.push(type)

    if (type.type === 'credit') {
      user.balance = user.balance + type.value;
    } else {
      user.balance = user.balance - type.value;
    }
}

function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;

  for (let item of user.transactions) {
    if (item.type == type && item.value > higherValue) {
      higherValue = item.value;
      higherTransaction = item;
    }
  }

    return higherTransaction;
}

function getAverageTransactionValue() {
  let sum =  0;
  let average = 0;

  for (let item of user.transactions) {
    sum += item.value;
  }

  average = sum / user.transactions.length;

  return average
}

function getTransactionsCount() {
  let count = {
    credit: 0,
    debit: 0
  }

  for (let item of user.transactions) {
    if (item.type === 'credit')
      count.credit++;
    else if (item.type === 'debit')
      count.debit++;
  }

  return count;

}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }

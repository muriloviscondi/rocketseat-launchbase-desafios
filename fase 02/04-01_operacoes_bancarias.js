const user = {
  name: "Mariana",
  transactions: [],
  balance: 0
};

function createTransaction(transaction) {
  user.transactions.push(transaction)

  if(transaction.type === 'credit') {
    user.balance += transaction.value
  } else {
    user.balance -= transaction.value
  }
}

function getHigherTransactionByType(typeTransaction) {
  let bigger = '';
  let result;

  for (let transaction of user.transactions) {
    if (transaction.type === typeTransaction && transaction.value > bigger) {
      bigger = transaction.value;
      result = transaction;
    }
  }

  return result

}

function getAverageTransactionValue() {
  let sum = 0;
  
  for (let transaction of user.transactions) {
    sum += transaction.value;
  }
  return sum / user.transactions.length
}

function getTransactionsCount() {
  let count = {
      credit: 0,
      debit: 0
  }

  
  for (let transaction of user.transactions) {
    if (transaction.type === 'credit') {
      count.credit++;
    } else {
      count.debit++
    }
  }

  return count

}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit")); // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType("debit")); // { type: 'debit', value: 80 }

console.log(getAverageTransactionValue()); // 70

console.log(getTransactionsCount()); // { credit: 2, debit: 2 }
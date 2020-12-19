const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      id: this.transactions.length + 1,
      type: type,
      amount: amount,
    };
    return transaction;
  },
  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
  },
  withdraw(amount) {
    this.transactions.push(
      this.createTransaction(amount, Transaction.WITHDRAW),
    );
    if ((this.balance -= amount) < 0)
      return alert('Недостаточно средств на счету!');
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    for (const item of this.transactions) {
      if (item.id === id) return item;
    }
  },
  getTransactionTotal(type) {
    let total = 0;
    for (const item of this.transactions) {
      if (item.type === type) total += item.amount;
    }
    return total;
  },
};

account.deposit(50);
account.deposit(40);
account.deposit(20);
account.withdraw(30);
console.log(account.getBalance());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account);

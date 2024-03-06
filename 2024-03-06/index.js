class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    this._accountNumber = accountNumber;
    this._accountHolder = accountHolder;
    this._balance = balance;
  }

  showBalance() {
    console.log(`Account Number: ${this._accountNumber}`);
    console.log(`Account Holder Name: ${this._accountHolder}`);
    console.log(`Balance: ${this._balance}`);
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (this._balance >= amount) {
      this._balance -= amount;
    } else {
      console.log("Insufficient Balance");
    }
  }
}

class SavingAccount extends BankAccount {
  constructor(accountNumber, accountHolder, balance, interestRate) {
    super(accountNumber, accountHolder, balance);
    this._interestRate = interestRate;
  }

  addInterest() {
    let interest = this._balance * (this._interestRate / 100);
    this._balance += interest;
  }

  withdraw(amount) {
    const withdrawlLimit = 1200;
    const penalty = 20;
    if (amount > withdrawlLimit) {
      amount += penalty;
    }

    super.withdraw(amount);
  }
}

const savingsAccount = new SavingAccount(12345, "John Smith", 3000, 5);
savingsAccount.deposit(500);
savingsAccount.showBalance();
savingsAccount.addInterest();
savingsAccount.showBalance();
savingsAccount.withdraw(675);
savingsAccount.showBalance();
savingsAccount.withdraw(1300);
savingsAccount.showBalance();

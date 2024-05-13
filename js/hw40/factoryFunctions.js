//PERSON

const createPerson = (name, age, job) => {
  const person = {
    name: name,
    age: age,
    job: job,
    introduce: function () {
      const vowels = ["a", "e", "o", "u", "i"];

      return vowels.includes(job.charAt(0).toLowerCase())
        ? `Hello! My name is ${this.name}. I'm ${this.age} years old. I'm an ${this.job}.`
        : `Hello! My name is ${this.name}. I'm ${this.age} years old. I'm a ${this.job}.`;
    },

    renderPersonInfo: function () {
      const testPersonInfo = $("<p class='fs-4 ms-5'></p>");
      testPersonInfo.text(this.introduce());
      $(".person-factory").append(testPersonInfo);
    },
  };
  return person;
};

//BANK ACCOUNT

const createBankAccount = (
  accountNumber,
  accountHolder,
  initialBalance = 0
) => {
  const account = {
    accountNumber: accountNumber,
    accountHolder: accountHolder,
    balance: initialBalance,
    isValidAmount: function (amount) {
      return !isNaN(amount) && amount > 0;
    },
    deposite: function (amount) {
      if (this.isValidAmount(amount)) {
        this.balance += amount;
        return this.balance;
      }
      return "Invalid amount";
    },
    withdraw: function (amount) {
      if (this.isValidAmount(amount) && amount <= this.balance) {
        this.balance -= amount;
        return this.balance;
      } else {
        return "Invalid amount";
      }
    },
    showAccountInfo: function (action, amount) {
      const title = $("<h3 class='fs-5 ms-5 fw-semibold'></h3>");
      title.text(`${this.accountHolder}'s bank account`);
      const initialBalance = $("<p class='fs-5 ms-5'></p>");
      initialBalance.text(`Balance: ${this.balance}`);
      const balanceAfterChange = $("<p class='fs-5 ms-5'></p>");
      const text =
        action === "deposite"
          ? `Balance after depositing money: ${this.deposite(amount)}`
          : `Balance after withdrawing money: ${this.withdraw(amount)}`;
      balanceAfterChange.text(text);
      $(".bank-factory").append(title, initialBalance, balanceAfterChange);
    },
  };
  return account;
};

const testPerson1 = createPerson("Jack", 25, "QA");
const testPerson2 = createPerson("Mia", 30, "actress");

const testAccount1 = createBankAccount(1413235523141, "Jack Test", 100);
const testAccount2 = createBankAccount(5881092571824, "Mia Test");

$(() => {
  testPerson1.renderPersonInfo();
  testPerson2.renderPersonInfo();
  testAccount1.showAccountInfo("deposite", 10.24);
  testAccount2.showAccountInfo("deposite", 14000);
  testAccount2.showAccountInfo("withdraw", 2999);
});

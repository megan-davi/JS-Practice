<<<<<<< HEAD
// Practice from Andrew Mead's Udemy course The Modern JS Bootcamp (2018)

let myAccount = {
  name: "Megan Brown",
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
}
let addIncome = function (account, amount) {
  account.income = account.income + amount;
}
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}.
  $${account.income} in income.
  $${account.expenses} in expenses.`
}
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
}

// Run Functions
addIncome(myAccount, 3000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 215.50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
=======
// Practice from Andrew Mead's Udemy course The Modern JS Bootcamp (2018)

let myAccount = {
  name: "Megan Brown",
  expenses: 0,
  income: 0
}

let addExpense = function (account, amount) {
  account.expenses = account.expenses + amount;
}
let addIncome = function (account, amount) {
  account.income = account.income + amount;
}
let getAccountSummary = function (account) {
  let balance = account.income - account.expenses;
  return `Account for ${account.name} has $${balance}.
  $${account.income} in income.
  $${account.expenses} in expenses.`
}
let resetAccount = function (account) {
  account.expenses = 0;
  account.income = 0;
}

// Run Functions
addIncome(myAccount, 3000);
addExpense(myAccount, 2.50);
addExpense(myAccount, 215.50);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
>>>>>>> 5a6e743c11f530c75aa1d9993bceed67e6201aa9

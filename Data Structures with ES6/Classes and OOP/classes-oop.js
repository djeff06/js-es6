class  Account {
id
userName
balance
constructor(username,startBalance=0) {
	this.id = generateAccountID()
	this.userName =username
	this.balance = startBalance 
}

deposit(amount) {
   this.balance += Math.abs(amount) // to ensure deposit always adds a value
}
withdraw(amount) {
  this.balance -= Math.abs(amount) // to ensure withdraw always retracts a value
}
}

// generateAccountID() function used in the Account Class that returns a random number between 
const generateAccountID = () => Math.floor(Math.random() * 100)
// Because Math.random always returns a decimal number, we must first round it off. It will return any number between 0 and 99 if multiplied by 100.

const johnAccount = new Account("JohnDoe")
const maryAccount = new Account("MarySmith",10) // 10 is the starting balance of this account

johnAccount.deposit(30)

console.log(johnAccount.balance) // 30
console.log(maryAccount.balance) // 10
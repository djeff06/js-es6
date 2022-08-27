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

/////////////////////// Inheritance starts here /////////////////////////////////////
class PremiumAccount extends Account { // Emphasize on the 'extends' word

monthlyBonus

constructor(username,startBalance=0) {
	super(username,startBalance)
  this.addMonthlyBonus() // Running addMonthlyBonus when creating the class
}

addMonthlyBonus(BONUS_PER = 0.1) {
this.monthlyBonus = this.balance * BONUS_PER
}

withdrawBonus() {
var bonus = this.monthlyBonus
this.monthlyBonus = 0
return bonus
}
}

const janeAccount = new PremiumAccount('JaneDoe', 100)

console.log('Balance:', janeAccount.balance) // 100

// janeAccount.addMonthlyBonus(0.2) // We can change the monthly bonus rate by calling the method

console.log('Withdrawn Bonus:',janeAccount.withdrawBonus()) // Withdrawn Bonus: 10


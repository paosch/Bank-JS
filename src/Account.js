function Account(balance){
  this.balance = balance || 0;
};
// OR function Account(balance = 0){
//     this.balance = balance;
//   };
Account.prototype.displayBalance = function(){
  return this.balance;
};

Account.prototype.deposit = function(amount){
  this.balance += amount;
};

Account.prototype.withdraw = function(amount){
  if (amount > this.balance){
    throw Error('There are insufficient funds in your account')};
  this.balance -= amount;
};

function Account(){
  this.balance = 0;
};

Account.prototype.displayBalance = function(){
  return this.balance;
};

Account.prototype.deposit = function(amount){
  this.balance += amount;
}

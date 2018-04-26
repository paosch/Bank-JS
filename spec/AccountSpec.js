describe('Account', function(){
  var account;

beforeEach(function(){
  account = new Account;
});

it('displays account balance', function(){
  expect(account.displayBalance()).toEqual(0)
});

it('customer can deposit money', function(){
  account.deposit(20);
  expect(account.balance).toEqual(20)
});

it('customer can withdraw money', function(){
  account.balance = 100;
  account.withdraw(15);
  expect(account.balance).toEqual(85)
})
});

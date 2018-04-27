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

it('customer cannot withdraw money if insufficient funds', function(){
  account.balance = 10;
  expect(function(){account.withdraw(20)}).toThrowError('There are insufficient funds in your account')
})
});

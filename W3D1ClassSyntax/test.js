
describe("Account",function(){
    let acc=new Account("12345");
    it("Acount should create new Account with 123456 number",function(){
        assert.equal(acc.getBalance(),0.0);
    });
});
describe("Deposit",function(){
   
    it("Deposite amount must increase the balance",function(){
        let acc= new Account("65432");
        acc.deposit(200);
        assert.equal(acc.getBalance(),200);
    });
    it("Deposite amount, if amount is negative it must return amount should bbe greater than 0",function(){
        let acc=new Account("65432");
        assert.throw(()=>acc.deposit(-200), Error);
    });
});

describe("withdraw",function(){
    it("Withdraw amount must deduct from the balance, if amount is negative throw error",function(){
        let acc=new Account("123456");
        assert.throw(()=>acc.withdraw(-100), Error);
    });
    it("withdraw amount, throw error when trying to withdraw amount greater than balance",function(){
        let acc=new Account("123457");
        assert.throw(()=>acc.withdraw(100),Error);
    });
})

describe("SavingAccount",function(){
    it("Add Interest on Savings account",function(){
        let acc=new SavingAccount("89675",50);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.getBalance(),150);
    });
})

describe("CheckingAccount",function(){
    it("Allow the withdraw upto the  overdraft amount",function(){
        let acc=new CheckingAccount("654321",100);
        acc.withdraw(100);
        assert.equal(acc.getBalance(),-100);
    });
    it("if withdrawal is below overDraft it must throw an error",function(){
        let acc=new CheckingAccount("4678",100);
        assert.throw(()=>acc.withdraw(115),Error);
    });
    it("negative withdrawal must throw error",function(){
        let acc=new CheckingAccount("123456",100);
        assert.throw(()=>acc.withdraw(-10),Error);
    });
   
});
describe("Bank",function(){
    it("Return empity array of accounts upon creation",function(){
        let bank=new Bank();
        assert.equal(0,bank.total());
    });
    it("The bank must allow the user to cteate and close the accounts",function(){
        let bank=new Bank();
        bank.addAccount("87654");
        assert.equal(1,bank.total());
        bank.closeAccount("87654");
        assert.equal(0,bank.total());
    });
    it("It must Generate reports for the created accounts",function(){
        let bank=new Bank();
        bank.addAccount("1234");
        bank.addAccount("1235");
        bank.addAccount("1236");
        bank.addAccount("1237");
        assert.equal("1234\n1235\n1236\n1237",bank.accountReport());
    });
});
describe("End of month",function(){
    it("checking account with negative balance at the end of month must start with low balance Warning",function(){
        let acc=new CheckingAccount("123456",4);
        acc.withdraw(4);
        assert.equal(true,acc.endOfMonth().startsWith("Warning, low balance"));
    });
    it("Normal Acounts start with nothing",function(){
        let acc=new Account("123457");
        assert.equal("",acc.endOfMonth());
    });
});

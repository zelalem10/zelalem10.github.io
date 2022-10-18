class SavingAccount extends Account{
    constructor(number,interest){
     super(number);
    this._interest=interest;
    
    }
    getInterest(){
        return this.interest
        }

    setInterest(interest){
      this._interest=interest;
        }
    addInterest(){
       this.deposit(this._balance*this._interest/100);
    }
    toString(){
        super.toString();
        return "Account Number for SavingsAccount: " + this.getNumber() + "balance: " +this.getBalance()+" Interest: "+this._interest;
    }
    endOfMonth(){
        let prev=this.getBalance();
        this.addInterest();
        return "Interest added "+this.getBalance()-prev+" "+ this.toString();
    }
}
class CheckingAccount extends Account {
    constructor(number,overDraft) {
        super(number);
        this.overDraft = overDraft;
    }
    getOverDraft() {
        return this.overDraft;
    }
    setOverDraft(overD) {
        this._overDraft = overD;
    }

    withdraw(amount){
        if(amount<=this.getBalance())super.withdraw(amount);
        else{
            if(this.overDraft<amount-this.getBalance())throw new Error("Insufficient amount");
            else{
                this._balance=this._balance-amount;
            }
        }
    }
    toString(){
        super.toString();
        return "CheckingAccount: "+this._number+" Balance: "+this._balance +"overDraft Limit: "+this._overDraft; 
    }
    //Warning, low balance CheckingAccount 3: balance: -100 overdraft limit: 500
    endOfMonth(){
       if(this.getBalance()<0){
       return "Warning, low balance"+this.toString();
       }
           
    }
}
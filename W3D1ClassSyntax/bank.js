class Bank{
    constructor(){ 
         this.accounts =[];
    }
    total(){
        return this.accounts.length;
    }
    addAccount(number){
this.accounts.push(new Account(number));
 return this.accounts.length;
    }
    addSavingAccount(number,interest){
    
        this.account.push(new SavingAccount(number,interest));
        return this.accounts.length;
    }
    addCheckingAccount(number,overDraft){
        this.account.push(new CheckingAccount(number,overDraft));
    }
    closeAccount(number){
        let index= this.accounts.indexOf(number);
        this.accounts.splice(index,1);
    
    }
    
    getAccount(index){
   return this.accounts[index];
    }

    accountReport(){
        return this.accounts.reduce((acc,a,idx,arr)=>{
            return acc+Bank.nextNumber(this,idx)+"\n";
        },"").trim();
    }
    endOfMonth(){
        return this._accounts.reduce((acc,a)=>acc+a.endOfMonth()+"\n","");
    }
    static nextNumber(bank,idx){
        return bank.getAccount(idx).getNumber();
    }
    
    

}
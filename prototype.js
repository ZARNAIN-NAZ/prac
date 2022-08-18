function BankAccount(customerName , balance = 0){


        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance=balance;
    
    //     this.deposit = function(amount){
    //         this.balance +=amount;
    //     };
    
    //  this.withdraw  = (amount)=>{
    //     this.balance-=amount;
    //  }
    
    }
     const zar = new  BankAccount("zarnain" );
     const l =new BankAccount("laiba",900)
// console.log(zar)
console.log(l)
BankAccount.prototype.deposit = function(amount){
    this.balance +=amount;
}
BankAccount.prototype.withdraw = (amount)=>{
    this.balance -= amount;
}
l.deposit(490)
// console.log(BankAccount.prototype)
console.log(zar)
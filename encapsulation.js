// class BankAccount{
//     customerName;
//     accountNumber;
//     balance = 0;
//     constructor(customerName, balance=0){
//         this.customerName=customerName;
//         this.accountNumber=Date.now()
//         this.balance = balance;


//     }
//     deposit(amount)
//     {
//         this.balance+=amount
//     }
//     withdraw(amount){
//         this.balance-=amount;
//     }


// }
// class CurrentAccount extends BankAccount{
//     transactionLimit = 9000;

//     constructor(customerName,balance=0 ){
//         super(customerName,balance)

//     }
//     takeBusinessLoan(amount){
//         console.log("take loan" +amount)
//     }
// } 
// const zar = new  CurrentAccount("zarnain",09)
// zar.takeBusinessLoan(9000)
// console.Log(zar.deposit)
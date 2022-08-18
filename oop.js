// CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//function BankAccount(customerName , balance = 0){


//     this.customerName = customerName;
//     this.accountNumber = Date.now();
//     this.balance=balance;

//     this.deposit = function(amount){
//         this.balance +=amount;
//     };

//  this.withdraw  = (amount)=>{
//     this.balance-=amount;
//  }

// }
//  const zar = new  BankAccount("zarnain" , 3);
// const k = new BankAccount("khizar")
// k.deposit(9000)
// zar.deposit(40)
// zar.withdraw(343)
// k.deposit(890)
// console.log(zar)
// console.log(k)

// ====================================BANK ACCOUNT EXAMPLE=============================

// const accounts=[];
// const accountForm = document.querySelector("#accountForm");
// const customerName  =document.querySelector("#customerName")
// const balance = document.querySelector("#balance")

// const depositForm = document.querySelector("#depositForm");
// const accountNumber  =document.querySelector("#accountNumber")
// const amount = document.querySelector("#amount")

// accountForm.addEventListener("submit",(e)=>
// {
//    e.preventDefault();
//     const account = new BankAccount( customerName.value , +balance.value)

//     accounts.push(account)
//     console.log(accounts)
// //    console.log(customerName.value ,balance.value);
// });
// depositForm.addEventListener('submit',(e)=>
// {
//     e.preventDefault();

//   const account = accounts.find((account) => account.accountNumber=== +accountNumber.value)

// account.deposit(+amount.value)
// console.log(accounts)
// })



 
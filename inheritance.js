// function BankAccount(customerName , balance = 0){


//         this.customerName = customerName;
//         this.accountNumber = Date.now();
//         this.balance=balance
//     }


//         BankAccount.prototype.deposit = function(amount){
//             this.balance +=amount;
//         }

//         BankAccount.prototype.withdraw = function(amount){
//             this.balance -= amount;
//         }
//         function CurrentAccount(customerName , balance = 0){


//             // this.customerName = customerName;
//             // this.accountNumber = Date.now();
//             // this.balance=balance
//             this.transactionLimit=50000
//         }
//         CurrentAccount.prototype = object.create(BankAccount.prototype)
//         CurrentAccount.prototype.Bussinessloan = function(amount){
//             console.log("taking business loan "+amount)
           
//         }
    
    
        //    SavingAccount.prototype.deposit = function(amount){
        //         this.balance +=amount;
        //     }
    
        //    SavingAccount.prototype.withdraw = (amount)=>{
        //         this.balance -= amount;
        //     }
        // const zar = new SavingAccount("zar",900)
        // console.log(zar)

        // INHERITANCE ==============================







//         function SavingAccount(customerName , balance = 0){

// BankAccount.call(this, customerName, balance)
//             this.transactionLimit=50000
        // }

    //    SavingAccount.prototype = object.create(BankAccount.prototype)


    //        SavingAccount.prototype.personallaon = function(amount){
    //            console.log('take perosnal loan'+amount)
    //         }
      
           
        
    //     const zar = new SavingAccount("zar",900)
    //     zar.deposit(900)
    //     zar.withdraw(789)
    //     zar.personallaon(444)
    //     console.log(zar)

    class BankAccount{
        customerName;
        accountNumber;
        balance = 0;
        constructor(customerName, balance=0){
            this.customerName=customerName;
            this.accountNumber=Date.now()
            this.balance = balance;


        }
        deposit(amount)
        {
            this.balance+=amount
        }
        withdraw(amount){
            this.balance-=amount;
        }


    }
    class CurrentAccount extends BankAccount{
        transactionLimit = 9000;
        constructor(customerName,balance=0 ){
            super(customerName,balance)

        }
        takeBusinessLoan(amount){
            console.log("take loan" +amount)
        }
    } 
    class SavingAccount extends BankAccount{
        transactionLimit = 899;
        constructor(customerName , balance =0){
        super(customerName , balance)

    }
    takePerosnalLoan(amount){
        console.log("PEROSNAL LOAN"+amount)
    }
    }
    const zar = new SavingAccount("zarnain ", 890)
    zar.deposit(900)
    zar.withdraw(899)
    zar.takePerosnalLoan(9000)
    console.log(zar)
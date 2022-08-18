// var age = 45;
// var nationality = "pakistani";
// var name = "zarnain";
// console.log(name);
// // alert(name); 
// var age =99;
// console.log(age);
// var msg = "hello i m ready";
// console.log("msg" +msg);
// var msg = "msla";
// console.log(msg);

// var a = 3;
// var b=8;
// var sum = a +b;
// console.log(sum)

// var a = 67;
// var n ="cacc";
// var feespay = false
// console.log(typeof n )
// alert(n);
// console.log(feespay)
//     var name ="zarnain";
//      var lastname = "naz"
// var age = 166;
// // console.log( "name "+name + "lname"+lastname + age ); 
// var a =16;

// a=a --9;
//   console.log(a); 

//____________________ASSIGNMNET 1_______________________________________

// alert("zarnian");

// var a = 3;
// var b = 5;
//  var c = a +b;
//  console.log("value is" +c);

//  var a = 4;
//  console.log("value before decalaration"+a);
//  a-1;
//  console.log("value after declaration:" +a);

// var c = 25;
// var f = 25;
//  var d = ((f-32)*5/9);
//  console.log(d);

// var dollar =10;
// var riyal = 25;

// var d = ((155*10)+(25*41))
// console.log(d);

// var ques = prompt( "ehat is your age " , "zarnain");
// // var age =prompt(ques);
// var newage = ques+5;
// console.log(newage);
// var score = prompt("write score", "80");
// if (score >= 95 && score ==99) {
//     console.log("a+", "reward100")
// }
// if (score > 90 && score <80 ) {
//     console.log("A+", "reward50")
// }
// else if(score > 80 &&  score <70){
//     console.log("a+", "NO REWARD")
// }
// if (score >= 70) {
//     console.log("A")

// }
// else if (score >= 60) {
//     console.log("B")

// }
// else if (score >= 50) {
//     console.log("c")
// }



// else {
//     console.log("failed")
// }

// var v = "u"
// if(v == "A " || v == "E" ||  v =="I" || v == "0"|| v =="u" ){
//     console.log("vowels")
// }
// else{
//     console.log("consonants")
// }
// var city =  prompt("write city","karachi")
// console.log( "welcome to the city of light")

// var color =prompt ("red" || "green" || "yellow")
// if(color == red){
//     console.log("stop")
// }
// else if (color == green ){
//     console.log("move")
// }
// else if(color == yellow ){
//     console.log("wait")
// }

// var a =4;
// if(++a===5){
//     console.log("a is true")
// }

// var materialcost = 200000;
// var laborcost = 2000;
// var totalcost =laborcost+materialcost;
// if(totalcost ===laborcost +materialcost){
//     console.log("the cost equals")
// }

// var eng = 50;
// var urdu  =60;
// var math = 75;
// var Total = 200;

// console.log("total marks" +Total);
// var total = eng + urdu + math;
// console.log("obtained marks "+total);
// if (total <90 && total >80){
//     console.log("A+")
//     console.log("execllent")

//     if(total<=80 && total >=70 ){
//         console.log("B")
//         console.log("average")
//     }}
//     else if (total <=70 && total >=60){
//         console.log("c")
//         console.log("wrost")
//     }
//     else{
//         console.log("fail")
//     }

// function BankAccount(CustomerName , balance =0){
//     this.CustomerName = CustomerName;
//     this.accountNumber = Date.now();
//     this.balance =balance;

//     this.deposit = function(amount){
//         this.balance +=amount; 
//         // this.balance = this.balance +amount;
//     };
//     this.withdraw = (amount)=>{
//         this.balance = amount;
//     };


// }
//   const zar = new BankAccount("zarnain" , 1000);
//   zar.deposit(6000);
// zar.withdraw(2000);

// //   const ar = new BankAccount("zarnain" , 1000);
// console.log(zar)
// // console.log(ar)
// function school(name , age , date=0 ){
//     this.name = name;
//     this.age = age;
//     this.date = date 
// }
// const z = new school("zarnain", 17, 67);
// z.name = "shanaya";

// console.log(z)

// ==================== DOCUMENT BJECT MODEL (DOM)===============================
//GETelementbyid
// const heading = document.getElementById("heading");
// console.log(heading);
// //getelemntbytag
// const heading = document.getElementsByTagName('h1');
// console.log(heading);

// const heading = document.getElementsByClassName('heading');
// console.log(heading);

//query selector
// const heading = document.querySelector(".heading");

// console.log(heading);

//QUERYSELECTORALL
// const z = document.querySelectorAll(".heading")
// console.log(z)

// traverse dom
// const head = document.querySelector('.heading')
// const parent = head.parentNode;
// console.log(parent)


// const parent = document.querySelector('.parent');
// console.log(parent.childNodes)

// next element sibling
// const parent = document.querySelector(".heading")
// console.log(parent.nextElementSibling);
// const z =  document.querySelector("h3")
// console.log(z.previousElementSibling);
//manipulation
// const z = document.querySelector(".heading");
// z.innerHTML= "hello moto";

// z.style.color="red"
// z.style.fontSize="100px"
// // z.classList.add("title");
// z.classList.remove(".heading")

// const he = document.createElement('h1');
// he.innerHTML = "javascript is awesome";
// he.classList.add("title");

//  const p = document.querySelector(".parent")
//  p.appendChild(he);

//  const hea = document.createElement('h3');
//  hea.innerHTML = "web dev is awesome"
//  hea.classList.add("title")
//  const  c = document.querySelector(".parent")
//  c.appendChild(hea);
// console.log("hea");
// const zar = document.createElement("h1");
// zar.innerHTML= "by own"
// zar.classList.add("title")
// const z = document.querySelector(".hello")
// z.appendChild(zar)
// console.log("zar")
// const zu = document.createElement("h4")
// zu.innerHTML="hello moto"
// zu.insertAdjacentElement("afterend", zu)
// zu.classList.add("title")
// const k = document.querySelector(".hello")
// k.appendChild(zu)
// console.log(zu)

// const k = document.createElement("h5")
// k.innerHTML= "bakwas"

// k.insertAdjacentElement("afterend",k)
// k.classList.add("title")

// const m = document.querySelector(".hello")
// m.appendChild(k)

// DOM EVENTS

// const button = document.querySelector("#btn")
// const heading = document.querySelector("#heading")
// button.addEventListener("click", function(event){
//     heading.style.color="purple"
//     heading.style.fontSize="100px"
//     console.log("button clicked" , event);
// });




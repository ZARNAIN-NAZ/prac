// static add number 
// let a =4;
// let b = 5;
// var c = a +b
// console.log("the sum of " +a+ " and" +b+ "is:" +c)

//dynamic 
// let a =prompt("enter 1 number",6)
// let b = prompt("enter 2 number is ",9)
// var c =parseInt(a) +parseInt(b)
// console.log(c)

//sqrt of any number
// var a=prompt("please enter a number","")
// var b = Math.sqrt(a)
// console.log(b)

// //area of  right angle triangle (base*height)/2
// var base =prompt("please enterbase value ",9)
// var height = prompt("please enter height value",89)
// var c = (base*height)/2;
// // console.log("area of triangle is "+c) 
// //or
// console.log("base:"+base+ "height:"+height+ "area:" +c) 

// area of regular triangle  hero's formula s=(a+b+c)/2 & sqrt(s(s-a)*(s-b)*(s-c))
// var a = 10;
// var b = 14;
// var c =23;
// var s = (a+b+c)/2
//  var d = s*(s-a)*(s-b)*(s-c)
//  var area =Math.sqrt(d)
//  console.log(s)
// console.log(d)
// console.log(area)

// swapping of two numbers 
// var a = 8
// var b =  3
// console.log("the value of a is"+a+ " the value of b is:"+b)
// var c =a;
// a=b;
// b=c;
// // console.log(`value of a ${a} , value of b :${b}`)
// //or
// console.log("the value of a is"+a+ " the value of b is:"+b)
// a =(a)+(b)
// console.log(a)
// a= a*b
// console.log(a)

//convert kms into miles 1 km = 0.621371 & miles = km*factor
// function convert(){
//     var kms =document.getElementById("data").value
// const factor = 0.621371
// var miles = kms* factor;
// document.getElementById("res").innerText = miles+ "miles!"
// }

 //convert gram into kg
//  function kg_to_g(){
//     var kilogram = document.getElementById("data").value
//     const factor = 0.001;
//     var gram = kilogram* factor;
//     document.getElementById("jay").innerText= gram+ "gram!"
//  }

//convert celsius to fahrenheit , f=c*1.8+32
// function convert(){
//    var c= document.getElementById('data').value 
//   var f= (c*1.8 )+32
//   document.getElementById("res").innerText=+c+"c=\n" +f+ "f"
// }

//check number is positive or neg or zero
//use math.sign to check it
// function check(){
//     var a = document.getElementById("data").value
//     // var res = Math.sign(a)
//     if(a>0){
//         res= +a+"positive"
//     }
// else if(a<0){
// res =+a+"negative"
// }
// else if(a==0){
//   res=  +a+"value is zero"
// }
//     document.getElementById("res").innerText=res;
// }

//math.random generate number(float number)
// var x = Math.random()
// console.log("before calculation"+x)
// // :-Math.random*(highestNumber - LowestNumber)  +LowestNumber
// x= x*(100000-1)+1
// console.log("after calculation"+x) 
// //Math.floor(Math.random) => integar given 
// console.log("floor calculation"+Math.floor(x)) 

//check num is even or odd
// var x = 62;
// // if(a%2 ==0){
// //     console.log(+a+" is even")
// // }
// // else{
// //  console.log(  "it is odd")
// // }
// var res = x%2 ==0?"even " : "odd"
// console.log(+x+ " is "+res)

//check number is prime number
// var n = prompt("enter number")
// if(n==1){
//     console.log(+n+ " is neither prime or composite")
// }
// else if(n<1){
//     console.log(+n+ "is not a prime number")

// }
// else{
//     // n=15
// for(var i=2; i<n; i++){
//     //15%2 =R:1
//     //15/2 Q =7 , R=1
//     if(n%1==0){
//        var res = +n+" this is not prime number"
//        break;
//     }
//     else{
//         var res = +n+ " this is prime number "
//     }
// }
// console.log(res)
// }
//find max of 3 number , Math.max
// function check(p,q,r){
//     if(p>=q && p>=r){
// return p
//     } 
//     else if(q>=p && q>=r){
//         return q
//     }
// else{
//     return  r
// }

// }
// var  a =prompt("enter 1 number")
// var  ab =prompt("enter 1 number")
// var  ac =prompt("enter 1 number")
//  var x = check(a,ab, ac)
//  console.log("the largest number is "+x)

//find factorial of number
// var num = prompt("enter number")
// var a =1;
// if(num ==0){
// console.log("the factorial of" +num+"is 1 ")
// }
// else if(num<0){
//     console.log("then factorial of neg num is not possible")

// }else{
//     for(var  i=1; i<=num;i++){
//             a=a*i}
//             console.log("the factorial of" +num+"is  "+a)
//         }

//factorial using recursion
// var n = prompt("enter nimber")
// var fact =1
// console.log(fact)
// function recursion(nn){
// if(nn>n){
//     return ;
// }
//  var temp =fact;
// fact = fact*nn
// console.log(+temp+"x"+n+"="+fact)
// nn++
// recursion(nn)
// }
// recursion(1)

//table of any input number 
// function table(number){
//  for(i=1; i<=10; i++){
//     var  result = i*number;
//     console.log(number+ "*" +i+ "="+result)
//  }

// }
// console.log(table(3))

//check armstrong number 153 =1*1*1+5*5*5+3*3*3
// var numbr = prompt("enter num")
// var temp = numbr;
// var sum = 0
// while(temp>0){
//     // console.log(temp)

//     var digit = temp%10
//     // console.log(digit)
//     sum +=digit**3
//     // console.log("sum"+sum)
//     temp = parseInt(temp/10)
//     // console.log(temp)
//     // console.log("------")
// }
// if(sum ==numbr){
//     console.log("this is armstirng number "+numbr)
// }
// else{
//     console.log("this is not armstrong number "+numbr)
// }

//last digit same or not
// var a =prompt("enter num")
// var b =prompt("enter num")
// var c =prompt("enter num")
// var res1 = a%10;
// var res2 = a%10;
// var res3= a%10;
// if(res1== res2&&  res1==res3)
// {
//     console.log(+a+  +b+ +c+ "having last same digit")

// }
// else{
//     console.log( +a+  +b+ +c+ "are not having same digits")
// }

//check pALINDROME USING ARRAY READ SAME FROM FORWARD OR BACKWORD LIKE DAD,MADAM
// var s = prompt("enter string")
// var stringArray =s.split('' )
// // console.log(stringArray)
// var r = stringArray.reverse()
// // console.log(r)
// var z =r.join("")
// if(s===z){
//     console.log(+s+ "is palidrown  ")
// }else{
//     console.log("is not palimdrwon ")
// }
// console.log(r)

//check palindrome using for loop
// var v=prompt("enter string")
// // console.log(v)
// var l =v.length
// var msg = "it is palindrome"
// // console.log(l)
// for(i=0; i<l/2; i++){
// if(v[i] != v[l -1-i]){
//  msg = "it is not palindrwom"
// }
//     console.log(v+""+msg)
//     // console.log(v[l-)
// } 

// check number of occurrences of char in string using for loop hello=>l 2 times
// var a= prompt("enter string")
// var l =prompt("enter letter")
// var g =a.length;
// var counter=0;

// for( var i=0; i<g; i++)
// {
//     if(a[i] == l){
//  counter++
//     }}
//     console.log(`${a}=>${l} =>${counter}`)

//check weather a string starts & ends with certain characters
//  var s = prompt("enter string")
//  console.log(s)
//  var t = s.startsWith('w')
//  var v =s.endsWith("e")
//  if(t==true && v ==true ){
//     console.log(+s+"string start with w and ends with e")
//  }
//  else if(t==true && v ==false  ){
//     console.log(+s+"string start with w btu not ends with e")
//  }
//  else if (t==false && v ==true){
//     console.log(+s+"string start with w btu not ends with e")
//  }
//  else{
//     console.log("neither w\start withw and nor ends with e ")
//  }
// console.log(s)

// // weather string contains a subtring ,indexOf() , includes()
// var v = prompt("enter string")
// var s = "a"
// var t = v.includes(s)
// console.log(t)
// var t2 = v.indexOf(s)
// console.log(t2)

//1st letter convert in uppercase , charAt()=>give 1st char of string, toUpperCase() , slice
// var s = prompt("enter string")
// var e =  s.charAt();
// console.log(e)
// var  r = s.slice(1)
// console.log(r)
// console.log(e.toUpperCase())
// var caps = e.toUpperCase() +r
// console.log("fianl"+caps)

//count number of vowels ina string using regex , REGULAR EXPRESSION match , find , test /expression/modifier
// var s= prompt("enter string")
// const r = /[aeiou]/gi;
// var c = s.match(r)
// console.log(c.join(",")) // join use for ocnvert array in string
// console.log(c.length)

//armstr0ng between interval

// var s = prompt("lower number")
// var r = prompt("enter upper")
// for(var i =0; i<= r; i++){
// var temp = i;
// var nod = i.toString().length;
// sum =0
// while( temp>0){
//     var d =temp%10;
//     temp =parseInt(temp/10)
//     sum+=d**nod ;
// }
// if(sum==i){
//     console.log(i)
// }
// }

 //find sum of natural number using recursion 
// function sum(n)
// {
//     if(n>0)
//     {
// return n + sum(n-1)

//     }
//     else{
// return n
//     }
//     alert(n)
// }
// var  res  =sum(7)//7+6+5+4+3+2+1 =21 output
// console.log(res)

// find factor of a number 
// var  num = prompt("enter number")
// for(var i=0;i<=num;i++){
//     if(num %i==0 )
//     {
//         console.log(i)
//     }
// }

// calculator using switch case
// var num1 = prompt("enter num1")
// var num2 = prompt("enter 2nd num")
// var operator = prompt("select +,-,*,/")
//  switch (operator) {
//     case "+":
//         var res =  parseInt(num1) +  parseInt(num2 );
//    console.log(+num1+ "+" +num2+ "="+res)
//         break;
//         case "-":
//         var res =  parseInt(num1) -  parseInt(num2 );
//    console.log(+num1+ "-" +num2+ "="+res)
//         break;
//        case "*":
//         var res =  parseInt(num1) *  parseInt(num2 );
//    console.log(num1+ "*" +num2+ '=' +res)
//         break;
//         case "/":
//         var res =  parseInt(num1) / parseInt(num2 );
//    console.log(+num1+ "/" +num2+ "="+res)
//         break;
//  default:
//     console.log("invalid ")
    
//  }

//print febonacci series , 1st num always zero and 2nd is always 1 and 3rd is sum of previous two numbers
// var n = 0;
// var b = 1;
// console.log(n)
// console.log(b)
//   for(var i=0; i<=10; i++)
//   {
//     var temp = n+b;
//     console.log(temp)
//     n=b;
//     b=temp;
//   }
    
//replace char in stirngs , replace(find ,replace)
// var s =("my red has  a red car and a red bike ")
// console.log(s)
// var  r = new RegExp("red" ) //regex use for remove case sensitivity 
// var n = s.replace(r, "blue")
// console.log(n)

//reverse string
// var s = prompt("enter string")
// var t =s.length;
// var r =""

// for(var i=t-1; i>=0; i--){
//   r+=s[i];
// }
// console.log( s+  "reverse is"  +r)

//sort words in alphabatical order , split()=>stirng into array , sort()=>array into alphabatical ascending order
var a  = prompt("enter ")
var s = a.split("")
var ab = s.sort("")
console.log(s)
console.log(ab)



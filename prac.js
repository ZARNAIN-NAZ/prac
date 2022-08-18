//exe 1 reverse
//  function z(str){
//   return str.split("").reverse().join("")
// }
//console.log(z("32243"))

//exe2 alphabetical order
// function z(str){
//     return str.split("").sort().join("")

// }
// console.log(z("zarnain"))

//exe3 return vowels what match in string 
// function vc(str){
//     var v = "aeiou"
//     var c =0;
//     for(  i=0; i<str.length;i++){
        
//             if(v.indexOf(str[i])!==-1){
// {
//     c+=1;
// }
//             }
//         }
// return c;
//     }
// console.log(vc("hello moto "))

// exe 5 every   alphabet in upper case
// function c(str){
//     str=str.split("")
//     for( let i=0, x=str.length; i<x; i++){
//         str[i] = str[i][0].toUpperCase()+ str[i].substr(1);

//     }
//         return str.join("")
//     }
// console.log(c("huyg y yyff fff vyosogmxo"))

// exe 6 get current date
// var day = function(sp) {
//   today = new Date()
//     var dd=today.getDate()
//     var mm = today.getMonth()+1
//     var yyyy = today.getFullYear()

//     // if(dd<10) dd =  "0"+dd
//     // if(mm<10) mm = "0"+mm
//     return (mm +sp+dd+sp+yyyy)

    
// }
// console.log(day("/"))
// console.log(day("-"))

// exe7 days left in christmas
// today = new Date();
// var m = new Date(today.getFullYear(),11,25)
// if(today.getMonth()==11 && today.getDate()>25)
// {
//  m.setFullYear(m.getFullYear()+1)

// }
// var one_day = 1000*60*60*24
// console.log(Math.ceil((m.getTime()-today.getTime())/(one_day))+"days left until chiristmas!")

// calculate mul and div of 2 numbers
// var a = 2;
// var b=3;
// var c  = a*b
// var d= a/ b;

// console.log(d)
// console.log(c)

//exe1 loop

// var num1, num2 
// num1= window.prompt("input the first int","0")
// num2= window.prompt("input the first int","0")

// if(parseInt(num1,10)>parseInt(num2 ,10))
// {
//     console.log("the larger"+num1+" and "+num2+" is"+num1+".")
// }
// else{
//     if(parseInt(num2 ,10)>parseInt(num1 ,10))
//     {
//         console.log("the larger"+num1+" and "+num2+" is"+num2+".")
//     }
//     else{
//         console.log("the values" +num1+ "and" +num2 +"are equal .")
//     }
// }

//exe2 loop display sign of enter number

// var x=-3;
// var b =80;
// var c =9

// if(x>0&& b>0 && c>0){
// alert("the sign is +")

// }
// else if(x<0&& b<0&& c<0){
// console.log("the sign is +")

// }
// else if(x>0&& b>0 && c>0){
//     console.log("the sign is +")
// }
// else if(x<0 && b>0&& c<0)
// {
//     console.log("the sign is +")
// }

// else{
//     console.log("the sign is +")
// }

// exe1 array inpur is in array or mot  
// var array = function(input){
// if(toString.call(input)==="[object array]")
//     return true;
//     return false;


// }
// console.log(array("5object array"))
// console.log(array[6,5])

// exe2 array clone
// var array = function(arr1){
//     return arr1.slice(0)
// }
// console.log(array([2,2,3,1,2]))
// console.log(array([3,45,[654,6]]))

// exe5 array join all elements
// color=["red","blue" , "white","black"]
// console.log(color.toString())
// console.log(color.join())
// console.log(color.join("+"))

// exe7 sort an item of array
// var arr1=[-3,8,7,6,5,-4,3,2,1]
// var arr2=[]
// var min =arr1[0]
// var pos;
// var max =arr1[0]
// for(i=0; i<arr1.length; i++)
// {

//  if(max<arr1[i] )max=arr1[i]
// }

// for(i=0; i<arr1.length; i++)
// {
// for(var j =0; j<arr1.length; j++)
// {
//     if(arr1[j] != "x")
//     {
//         if(min>arr1[j])
//         {
//             min = arr1[j]
//             pos=j
//         }
//     }
// }
// arr2[j]=min;
// arr1[pos] = "x"
// min = max
// }
// console.log(arr2)

//  prac exe array display color by choice

// var color = [ "blue ","green","red"]
// function Ordinal(n){
//     var o =["th" ,"st","nd", "rd"],
//     x=n%100
//     return x+(o[(x-20)%10] || o[x]||0[0])
// }
// for(n=0; n<color.length; n++){
//     var ordinal = n+1;
//    var output = (Ordinal(ordinal) + "choice is " +color[n]+".")
//   console.log(output)
// }

// exe5 loops and statement

// for(var x=0; x<=25; x++)
// {
//     if( x==0){
// console.log(x+"x is even")

//     }
//     else if(x%2 ==0){
//         console.log(x+"is even")

//     }
//     else{
//         console.log(x+"is odd")
//     }
// }
// exe4 loops and statements find largest of 5 num display in alert box
// a=5;
// b=54;
// c=3;
// d=9;
// e=-2;
// if(a>b && a>c && a>d && a>e){
//     console.log(a)
// }
// else if(b>a && b>c && b>d && b>e){
// console.log(b)
// }
// else if(c>a && c>b && c>d && c>e){
//     console.log(c)

// }
// else if(d>a && d>b && d>c && d>e)
// {
//     console.log(d)
// }
// else{
//     console.log(f)
// }

// exe4 display 3 num in alert and sort it
// var x=0;
// var y=-2
// var z=9;
// if(x>y&& x>z){
//     if(y>z){
//         console.log(x+","+y+ ","+z)
//     }
//     else{
//         console.log(x+","+z+ ","+y)
//     }}
//     else if(y>x && y>z){
//  if(x>z){
//     console.logy(y+"," +x+","+z)
//  }
//  else{
//     console.log(y+","+z+","+x)
//  }
//     }
//     else if(z>x && z>y){
//         if(x>y){
// console.log(z+","+x+","+y)
//         }
//         else{
//             console.log(z+","+y+","+x)
//         }
//     }
    
//exe8 js function get diff betwwn teo dates
//  var date = function(date1, date2){
//     dt1 = new Date(date1)
//     dt2 = new Date(date2)
//     return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(),dt2.getDate())
//     -Date.UTC(dt1.getFullYear() , dt1.getMonth(), dt1.getDate()))/(1000*60*60*24))
    
//  }
//  console.log(date("04-09-2220" , "05-07-2023"))
//  console.log(date("09-12-2019","12-09-2019"))

// exe9 get last day of month
// var day = function(y,m){
// return new Date(y,m+1 , 0).getDate()
// }
// console.log(day(2017,0))
// console.log(day(2019,2))
// console.log(day(2022,09))

// exe 16 count number day pass since biginning of year
// function day(dt)
// {
//     var current = new Date(dt.getTime())
//     var previous = new Date(dt.getFullYear() , 0 ,1)

//     return Math.ceil((current  - previous +1)/86400000)
// }
// console.log(day(new Date(2019,9,17)))
// console.log(day(new Date(2019,8,2)))

// // EXE 18 CALCULATE AGE 
// function calculate_Age(dob){
//     var diff_ms = Date.now() - dob.getTime();
//     var age = new Date(diff_ms)
//         return Math.abs(age.getUTCFullYear() - 2004)
// }
// console.log(calculate_Age(new Date(2004 ,02,02)))
// console.log(calculate_Age(new Date(2020 ,9,12)))

// exe 46 gat time differences between  2   dates
// function f(dt2, dt1)
// {
//     var v=(dt2.getTime()-dt1.getTime())/1000;
//     v/=(60*60*24)
//     return Math.abs(Math.round(v))
// }
// dt1 = new Date(2018,3,3)
// dt2 = new Date(2019,3,3)
// console.log(f(dt1,dt2))
//  dt1 = new Date("oct 13 ,2008 03:23:22")
//  dt2 = new Date("oct 19, 2019 22:23:33")
// console.log(f(dt1, dt2))

// exe 50 to get week start date 
// function s(date){
// var k = date.getDate() - date.getDay()+(date.getDay() ===0 ? - 6: 1)
// return new Date(date.setDate(s))


// }

// dt = new Date()
// console.log(s(dt) .toString())

// exe 51 get week and Date
// function  k (date) {
//     var l = date.getDate - (date.getDay()-1)+6
//     return new Date(date.setDate(l))
// }

// zar = new Date()
// console.log(k(zar).toString())

//exe 52 get month start date 

// function s (date){
//     return new Date(date.getFullYear(), date.getMonth(),1)
// }
// zar = new Date()
//     console.log(s(zar).toString)

// exe2 string  check string is blank or not
// function  z(input){
//     if(input.length ===0)
//     return true;
//     else return false
// }
// console.log(z(""))
// console.log(z("abc"))

// exe4 string function t0 remove specified num of char from string
//  function z (str1,length)
//  {
//     if((str1.constructor === String)||(length>0)){
//     return str1.slice(0,length)

//  }}
//  console.log(z("zarnian , 6"))

// exe 9 string to capitalize 1st letter of each word  
// function v (str){
//     return str.replace(/\w\S*/g, 
//     function(txt){
//         return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();})

//     }
    
// console.log(v("hello zarnain "))
//__________________________________________________________END OF PRACTICE PDF________________________________________________________
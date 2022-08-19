// for(var i=0; i<5; i++){
//     if(i==2){
//      continue;
//     }
//     console.log('i=' +i)
// }

// var foods =['pizza' ,'burger' ,'sandwitch']

// var food = new Array('pizza' ,'burger' ,'sandwitch')
// var  a= foods[0]
// var b = food[1]
// alert(a)
// alert(foods[2])
// console.log(foods[1])
// var a= [23,4353,45,67]
// var b = [true , false]
// console.log(a[2])
// console.log(b[1])
// console.log(foods)
// alert(food)
// foods[1] = 'cake'
// console.log(foods[1])
// foods[4] = 'makkhan'
// console.log(foods)
// console.log(foods.length)
// foods.push("jalebi")

// var foods = [ ];
// foods.push('haleem' , 'jalebi')
// console.log(foods[0]);
// foods.pop("jalebi")
// console.log(foods)

//  for(var i=0; i<6; i++){
//     for(var j=0; j<4; j++){
//         console.log("i=  " +i+   " j= "+j)
//     }
//  }
//  var foods =[]
//  foods.push("biryani")
//   foods.push("pulao") 
//   foods.push("nuggets")
//   console.log(foods.length)
//    var a =foods.pop();
//   console.log(foods)

// foods.pop();
//   console.log(a);
//   foods.push('custard')
//   console.log(foods)

// var foods =[]
// foods.push("pizza")
// foods.push("chinese")
// foods.push("zinger")
// console.log(foods)
// console.log("length" +foods.length)
// var  a = foods.shift()
// var  a = foods.shift()
// var l  = foods.push("lemon")
// console.log(l)
// console.log(foods)
// console.log("length" +foods.length)
// var a =[]
// console.log(a)
// a.unshift('mango')
// console.log(a)
// console.log(a[0]);

// for(var i=0 ; i<5; i--){
//     a[i] = i*2;
//     console.log(a[i])
// }
//---------------------------------var let const------------------------------------
// const a  ="hello"
// // let a = "yahoo"
// // a="world"
// console.log(a)
// if(1==1){
// const a ="hello"
//   console.log(a)
// }
// console.log(a)
// for(const a=1; a<=5; a++){
//     console.log(a) 
// }
// console.log(a);
//---------------------------------------template string or template literals
// var user = "zarnain"
// var user1="ali"
// function fullname(user , user1){
//     return `${user} ${user1}`
// }
// // let h = `${fullname(user , user1)}`
// // console.log(`${fullname(user , user1)}`)
// console.log(fullname(+user+user1))
// // console.log(h)
//----------------arrrow function
// const a = function(){
//     console.log("aaa")
// }
// a()
// function hello(){
//     console.log("sss")
// }
// hello()
// let zara=()=>console.log("zarr")
// zara()
// var f =(adad) =>{
//     console.log("dfnskjfn")
// }
// f()
// let z = (name , age )=> `hello ${name} ${age}`

// console.log(z("zarnain" , 17))
// console.log(typeof(z))

// var zar  =(marks , name , age , grade)=>{
//     return(`${marks} ${name} ${ age} ${grade}`)
// }
// console.log(zar(560,"aranoor",50 , "A"))

//----------------------------------function with mmultiple arguments
// function sum(name,course ,...ali){
// console.log(arguments)
// console.log(`hello${name} ${course}` )
// let s =0;
// for(let i in ali){
//     s+=ali[i]
// }
// console.log(s)
// }
// sum( "  zara","cs",20,30,40)
// sum("ram kishan bbabbuu",90,89)

// function count(name,cgpa){
//     console.log(`${name}`)
//     let a=0;
//     for(let z in cgpa ){
//       a+=cgpa[z]
//     }
//     console.log(a)
// }
// count("zarnain" ,78)

// function sum(name , course){
    // console.log(`hello${name} ,${course}`)
//     let sum =0;
//     for(let i in sum){
//         sum+=sum[i]
//     }
//     console.log(sum)
// }
// console.log("zarnain" , "bcom")
//-----------------------------spread operator
// function sum(name , course ,...args){
// // console.log(arguments);
// console.log(`hello${name}, ${course}`)
// let z=0;
// for (let i in args) {
   
//         z+= args[i];  
//     }
//     console.log(z)
// }
// var a = [45,43,43,3];
// sum("zarnain", "se" ,...a);

// // var arr1  =  [ 56,34,34,343];
// // arr1.push(56565)
// // arr1.pop()
// // console.log(...arr1);

// // var arr2= arr1
// // arr1.push(50);
// // console.log(arr2);

// var a1 = 
// {
//     name :"zarnian",
//  course :"cs"

// }
// var a2 ={
//     age :67
// }
// var temp ={...a1,...a2}
// console.log(temp)

// //------------------------objrct literals-------------------------------------
// let name = "zarnian";
// let course ="bsse"

// let abc={
//     name ,
//     course

// }
// console.log(abc)
//--------------------------use var as a property name

// let n = "student"
// var  a ={
//     [n +"name"]:"zarnain",
//     sec: "ntech",
//     detail:function(){
//         return`${this.studentname}is student of  ${this.sec}`
//     }
// }
// // console.log(a)
// console.log(a.detail())
// let a = "student";
// var ab ={
//     [a +"name" ] :"zarnain",
//     sec:"c",
//      'detailshow'(){
// return`${a} ${this.studentname} is ${this.sec}`
//      }
//     }
// console.log(ab)
// console.log(ab.detail())

// let n = "zarnain"
// let lname = "naz shiekh"
// let c = "navtttac"
// function student(n, lname,c) {
//     let fullname = n +lname
//     return {fullname,c}
    
// }
// let s = student(n, lname,c)
// console.log(n,lname,c)
// console.log(s.fullname)
// console.log(s.c)

//------------------------------------destructuring ARRAY-------------------
// let[name , age ] =user;

// function xyz(){
//  return   ["zarnain",78 , "karachi"]
// }
//  let[name , age , city]=xyz()
//  console.log(city)

// --------------OR-----------------------------------
// let user =["zarnain" ,  44, "lahore" ,["female" , 1000000]]

// let [name , age , city,[gender , salary]]=user;
// console.log(name)
// console.log(gender)
//--------------------------or----------------
// let user = [ "ali" , 89, "pak"]
// let[name , ...args]=user

// console.log(name)
// console.log(args)
// -----------------------------------DESTRUSCTURING OBJECT----------------------
// let abc = {
//     name :"Areeba",
//     age:23,
//     city:"paris"
// }
// let{name:n ,age:a , city:c}=abc
// // console.log("name: "+name,age, city )
// console.log(` name is ${n},${a},${c}`)
// // console.log(abc)
// -----------------------------------------OOOPS INTRO-------------------------------
// class hello{
//     msg(){
//         console.log("hello guyz")
//     }
//     sorry(){
//         console.log("sorry guys")
//     }
// }
// let    a = new hello();
// a.msg()
// a.sorry()
//----------------constructor , static 
// class stu{
// constructor(name ,age){
//     this.n =name ;
//     this.a=age; 
//     console.log("constructor function is running")
// }
// hello(){
//     console.log("hello "+this.n +this.a)
// }
// static bnbn(){
//     console.log("static function")
// }


// }
// let  a =new stu("zarnain" , 67);
// let n = new stu("pawan kumar" , 78)
// a.hello()
//  n.hello()

// stu.bnbn()

// -----------------  inheritance
// class employee{
//     constructor(name , age , salary){
//         this.a=name;
//         this.g=age;
//         this.s=salary
//         console.log("Constructor: Employee ")
//     }
//     info(){
//         console.log(" Employee " +this.a +this.g +this.s)

//     }
// }

// class manager extends employee{
//     info(){
//         let ta = 1000;
//         let p=300;
//         let total = this.s +ta+ p;

//         console.log(" MANAGER " +this.a +this.g +total)

//     }
  
// }
// class test extends manager{

// }
// let k=new test("adil" , 78,899999)
// let a = new manager("ali" , 67, 454454)
// let b = new employee("asad" ,89,600)
// a.info()
// b.info()
// k.info()
 //---------------------------------promise--------------------------
//  let complete = false;
// // function

//  let prom = new Promise(function(resolve , reject){
//     if(complete){
//         resolve("i am succesfull")
//  }
//  else{
//  reject("i am fail")
//  }
// })
// console.log(prom)

// let name = "zarnain";
// let p = new Promise(function(e,s){
//     if(name){
//      e("i am zarnain")
//     }
//     else{
// s("i am ajeeb")
//     }
// })
// console.log(p)


// function f(a,b){
// return new Promise(function(yes , no ){
//     console.log("fetching data plz wait ")
//     var c= a/b
// setTimeout(()=>{
//     if(a,b){
//         yes(`your answer is :${c}`)
//     }
//     else{
//         no("failed to calculate")
//     }
// } ,2000)
// // })
// }
//     if(complete){
//         yes("successfull")
//     }
//     else{
//         no("failure")
//     }
// })
// }
// let ok=(result)=>{
// console.log(result)
// }
// let notok=(error)=>{
//     console.log(error)
//     }
    // f(true).then(ok);
    // f(true).then(ok);
    //or
    // f(5,0).then((result)=>{
    //     console.log(result)
    //     }).catch((error)=>{
    //         console.log(error)
    //         });

// console.log(f(false))
//------------------------------promise.all()------------------------------
// let p1 = function (res,rej){
//     return function (reee,see){
// setTimeout(()=>{
// console.log(rej)
// reee(res)
// }, res*100)
//     }}
//     console.log("1st promise run")
// res("1st")
// })

// let p2 =new Promise((res,rej)=>{
//     console.log("2nd promise run")
// res(20)
// })
// let p3 =new Promise((res , rej)=>{
// console.log("3rd promise is not run ")
// rej("fail")
// })
// let pp1 = new Promise(p1(10,"first"))
// let pp2 = new Promise(p1(20,"second"))
// let pp3 = new Promise(p1(30,"third"))
// let pp4 = new Promise(function(reee,see){
//     see("rejected...")
// })
// })
// var total = 0;
// Promise.all([pp1,pp2, pp3 , pp4]).then((result)=>{
//     for (var z in result) {
//         total+= result[z]  
//         }
            
// console.log(`results:${result}`)
// console.log(`total:${total}`)
//     })
    
// .catch((error)=>{
//     console.log("error"+error)
// })

//-------------------------------async function-------------------------
//   let t = async ()=>{
//     return "hello"
// }
// t().then((result)=>{
//     console.log(result)
// })
//  async function test(){
//     console.log("2 :message");
//      await console.log("3 :message");
// console.log("4 :message")

//  }
//  console.log("1:message")
//  test();
//  console.log("5:message")
//-------------------------------------symbol data type--------------------
// var id = Symbol("hello zarnain")
// // var id2 = Symbol("hello zarnain")

// // console.log(id ==id2)
// console.log(id)
// alert(id .description)
// console.log(typeof id)

// let str = "hello zarnain"
// let str2 = "hello zarnain"

// console.log(str==str2)

var age = Symbol();
let user ={
    name :"zarnain",
    class:"matric",
    // [age]  :25
}
user[age]  =90;
user["gender "] = "male"
// console.log(user.class)
console.log(user)
// for(let z in user){
//     console.log(z)
// }
// console.log(user[age])

console.log(JSON.stringify(user))









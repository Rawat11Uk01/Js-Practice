// let number = 19;
// let userGuess = prompt("guess a number");
// if(userGuess===number){
//     console.log("you are right");
// }else{
//     if(userGuess<=18){
//         console.log("too low")
//     }else{
//         if(userGuess>=19){
//             console.log('too high')
//         }
//     }
// }
// var day = +prompt('choose a num');
// switch(day){
//     case (day===1): console.log('sunday');
//     break;
//     case (day=0): console.log('monday')
// }
// let num= 0;
// while(num<=9){
//     console.log(num);
//     num++;
// }
// let num =10;
// let total = 0;
// let i = 0;
// while(i<=10){
//     total = total + i;
//     i++;
// }
// console.log(total);
// let num = 10;
//  let total = 0;
//  let i = 0;
//  while(i<=10){
//      total= total +i;
//      i++
//  }
//  console.log(total)
// let total = 0;
// for(let i=0; i<=10; i++){
//     if(i===8){
//         break;
//     }
// total=total+i;

// }
// console.log(total);
// let arr = ['mango', 'banna', 'apple'];
// let newArr = arr.slice(0);
// console.log(newArr);
// let arr = ['mango', 'banna', 'apple'];
// let i=0;
// const arr2 = [];
// while(i<arr.length){
//     arr2.push((arr[i]));
//     i++;
// }
// console.log(arr2)
// let arr = ['mango', 'banna', 'apple'];
// for(let array of arr){
//     console.log(array);
// }
// const myArray = ['value1', 'value2', 'value3', 'value4'];
// let [name, age, ...arr1] = myArray;
// console.log(arr1)
// const person = {
//     name: 'rawat',
//     'my age': '23',
//     hobbies: ['one', 'two', 'three']

// };
// for(let keys in person){
//     console.log(`${keys}: ${person[keys]}`);
// }
// console.log(Object.keys(person))
// for(let key of Object.keys(person)){
//     console.log(person[key])
// }
// const key1 = 'objkey1';
// const key2 = 'objkey2';
// const value1 = 'myvalue1';
// const value2 = 'myvalue2';

// var myObj = new Object;
// myObj[key1] = value1;
// myObj[key2] =  value2 ;
// console.log(myObj);
// var obj ={
//     [key1]: value1,
//     [key2]: value2,
// }
// console.log(obj)

// const newObj = [...'abc'];
// console.log(newObj)
// const obj1 ={
//     key1 : 'value1',
//     key2 : 'value2',
// }
// const obj2 ={
//     key3 : 'value3',
//     key4 : 'value4',
// }
// // const newObj = {...obj1, ...obj2}
// const newObj = {...obj1}
// console.log(newObj)

// const band = {
//     bandName: "led zepplin",
//     famousSong: "stair-way to heaven",
//     age:12,
//     love: 16,

// };
// const bandName =band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);
// let {bandName, famousSong, ...restObj}=band;
// console.log(bandName);
// console.log(restObj);\
// const arr = [
//     {firstName:'kashish', age: 12, gender:'male'},
//     {firstName:'rawat', age: 34, gender:'male'},
//     {firstName:'negi', age: 43, gender:'male'}];
// for(let array of arr){
//     console.log(array.firstName);
// }
// let [{age}, , {gender}] = arr;
// console.log(gender);
// function fun(a){
//    return a%2===0;
// }
// console.log(fun(6));
// function a(d){
//     return d.slice(0,1);
// }
// console.log(a('love'));
// let fun=(a,b)=>{
//     for(let i=0; i<a.length; i++){
//         if(a[i]===b){
//             return i
//         }
//         }
//     return -1;

// }

// console.log(fun([0,1,2,6],6));

// function fun(a,b=0){

//     return a+b;
// }
// console.log(fun(5,6))

// function fun(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// fun(1,2,3,4,5,6,7);
//     function addAll(...numbers){
//         let total =0;
//   for(let number of numbers){
//      total = total + number;

//   }return total
//     }
//     console.log(addAll(1,23,4,53,2,23,4));
// function ass(){
//     console.log('why are you');
// }
// function ab(callback){
//     console.log(callback)
//     console.log('hello world')
//     callback();
// };
// ab(ass);
// function myFun(){
//     function hello(){
//         console.log('hello world')
//     }return hello;
// }
// const aws = myFun();
// aws();
// const numbers = [4,2,5,8];

// function fun(number, index){
//     console.log(`index no is ${index}`);
//     console.log(`${number}*2=${number*2}`)
// }
// for(let i=0 ; i< numbers.length; i++){
//     fun(numbers[i], i);

//     }
// numbers.forEach(fun);'

// const person = {
//     name: 'rawat',
//     age: '12',
//     arr: [1,2,3]
// }
// const arr = [
//         {firstName:'kashish', age: 12, gender:'male'},
//         {firstName:'rawat', age: 34, gender:'male'},
//         {firstName:'negi', age: 43, gender:'male'}];

//         for(let array of arr){
//             console.log(array.firstName)
//         }
// var obj ={
//     name: "rawat",
//     age: 12,
// }
// function fun({name,age}){
//     console.log(name);
// }
// fun(obj);

// function one(){
//     console.log('shree RAM')
// }
// function a(b){
//     console.log(b);
//     one();
// }
// a(one);
// let array = [2,3,4,5,];
// function mul(element, index){
// console.log(`${index} and ${element}*2 =${element*2}`)

// }

// for(let i=0; i<array.length; i++){
//     mul(array[i],i);
// }
// array.forEach((element,index)=>{
//     console.log(`${index} and ${element}*2 =${element*2}`)
// });
// const arr = [
//         {firstName:'kashish', age: 12, gender:'male'},
//         {firstName:'rawat', age: 34, gender:'male'},
//         {firstName:'negi', age: 43, gender:'male'}];
// for(let array of arr){
//     console.log(array.firstName)
// }
// arr.forEach(function(element){
//     console.log(element.firstName)
// })
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i].firstName)
// }
// const array1= [2,4,6,8,10];
// const square = function(number){
//     return number*number
// };
// console.log(array1.map(square));
// const arr = [
//             {firstName:'kashish', age: 12, gender:'male'},
//             {firstName:'rawat', age: 34, gender:'male'},
//             {firstName:'negi', age: 43, gender:'male'}];

// const newarr = arr.map((element,index)=>{
// return element.firstName
// })
// console.log(newarr.length);
// const array1= [2,4,6,8,10,1,2,34];
// function asd(element){
//     return element%2===0;
// }
// const newArr = array1.filter((element,index)=>{
//     return element%2===0;
// })
// console.log(newArr)
// const array1= [2,4,6,8,10,1,2,34];
// const newA =array1.reduce((a,b)=>{
//     return a += b;
// });
// console.log(newA)
// const userCart = [
//     {productId:1 , productName: 'mobile', price:2000},
//     {productId:2 , productName: 'laptop', price:2000},
//     {productId:1 , productName: 'tv', price:2000},
// ];
// let total = 0;
// for(let i=0; i<userCart.length; i++){

//     total = total + userCart[i].price;

// }
// console.log(total)
// const total =userCart.reduce((accumulater,element)=>{
// return accumulater + element.price;
// },0)
// console.log(total)
// const num = [1,5,3,6,9,3,2,68,4];
// const newa =num.sort((a,b)=>{
// return b-a;
// });
// console.log(newa);

// const products = [
//     {productId: 1, productName: 'tv', price:200},
//     {productId: 2, productName: 'mobile', price:100},
//     {productId: 3, productName: 'tov', price:500},
//     {productId: 4, productName: 'tiv', price:600},
//     {productId: 5, productName: 'tev', price:90},
// ];

// let newP =products.slice(0).sort((a,b)=>{
//     return (a.price - b.price)
// });
// console.log(newP);

// const myArr = ['cat', 'dog', 'dogs', 'duck'];
// const oK =myArr.find((string)=>{
// return string.length ===3;
// });
// console.log(oK);

// const products = [
//     {productId: 1, productName: 'tv', price:200},
//     {productId: 2, productName: 'mobile', price:100},
//     {productId: 3, productName: 'tov', price:500},
//     {productId: 4, productName: 'tiv', price:600},
//     {productId: 5, productName: 'tev', price:90},
// ];
// const userId = products.find((pI)=>
//  pI.productId === 3);

// console.log(userId)

// const products = [
//     {productId: 1, productName: 'tv', price:200},
//     {productId: 2, productName: 'mobile', price:100},
//     {productId: 3, productName: 'tov', price:500},
//     {productId: 4, productName: 'tiv', price:600},
//     {productId: 5, productName: 'tev', price:90},
// ];
// const userCart = products.every((elem)=>
// elem.price <= 500
// );
// console.log(userCart);

// const userCart = [
//     {productId:1, ProductName: "mobile", price:2000},
//     {productId:2, ProductName: "tv", price:4000},
//     {productId:3, ProductName: "headPhone", price:6000},
// ];
// const total = userCart.reduce((current,element)=>{
//     reduce account += element.price;
// },0)
// console.log(total)

// const numbers = [1,2,3,4,5,8,4,2,7];
// const newNum = numbers.some((num)=> num%2==0);
// console.log(newNum);
// const number = new Set();
// number.add(22);
// number.add([1,2,34])
// number.add([1,2,34])
// number.add(22);
// number.add(23);
// number.add(24);
// number.add(25);number.add(22);
// number.add(26);
// for(let numbers of number){
//     console.log(numbers)
// }
// console.log(number)

// / block scope vs function scope

// let and const are block scope
// var is function scope

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }

// console.log(firstName);

// function myApp(){
//     if(true){
//         var firstName = "harshit";
//         console.log(firstName);
//     }

//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();

// let bioData = {
//         myName : {
//             realName : "vinod thapa",
//             channelName : 'thapa technical'
//         },
//         // things to remember is that the myName is the key and the object is act like a value
//         myAge : 26,
//         getData (){
//           console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
//         }
//       }

//       bioData.getData();

//       const fun2 = () => {
//           setTimeout(()=> {
//               console.log(`Function 2️⃣  is called`);
//           }, 2000);
//         }

//         const fun1 = () => {
//           console.log(`Function 1 is called`);
//           fun2();
//           console.log(`Function 1 is called Again ✌`);
//         }

//         fun1();

// const URL = "https://jsonplaceholder.typicode.com/postssss";

// fetch(URL,{
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
//     })
//     .then(response =>{
//         if(response.ok){
//             return response.json()
//         }else{
//             throw new Error("Something went wrong!!!")
//         }
//     })
//     .then(data =>{
//         console.log(data);
//     })
//     .catch(error =>{
//         console.log("inside catch");
//         console.log(error);
//     })

// async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
// console.log("script start");
// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }

// const getPosts = async() =>{
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }

// const myData = getPosts();
// console.log(myData);

// getPosts()
//     .then((myData) => {
//         console.log(myData);
//     })
//     .catch(error =>{
//         console.log("inside catch")
//         console.log(error);
//     })

// console.log("script end ");

// /
// console.log(user3.sing());

// class Animal {
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }

//     isSuperCute(){
//         return this.age <= 1;
//     }

//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{

// }

// const tommy = new Dog("tommy", 3);
// console.log(tommy);
// console.log(tommy.isCute());

// function returning promise

// function ricePromise(){
//     const bucket = ['coffee', 'chips','vegetables','salts','rice'];
//     return new Promise((resolve,reject)=>{
//       if(bucket.includes("vegetables")&& bucket.includes("salt") && bucket.includes("rice")){
//           resolve({value:"friedrice"});
//       }else{
//           reject("could not do it");
//       }
//     })
//   }

//   ricePromise().then(
// jab promise resolve hoga
// (myfriedRice)=>{
// console.log("lets eat ", myfriedRice);
// }
// ).catch(
// (error)=>{
//     console.log(error)
// })

// async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
// console.log("script start");
// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }

// const getPosts = async() =>{
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }

// const myData = getPosts();
// console.log(myData);

// getPosts()
//     .then((myData) => {
//         console.log(myData);
//     })
//     .catch(error =>{
//         console.log("inside catch")
//         console.log(error);
//     })

// console.log("script end ");

// Promise.resolve
// Promise chaining

// const myPromise = Promise.resolve(5);
// Promise.resolve(5).then(value=>{
//   console.log(value);
// })

// then()
// then method hamesha promise return karta hai

// function myPromise(){
//     return new Promise((resolve, reject)=>{
//       resolve("foo");
//     })
//   }

//   myPromise()
//     .then((value)=>{
//       console.log(value);
//       value += "bar";
//       return value
//     })
//     .then((value) =>{
//       console.log(value);
//       value += "baaz";
//       return value;
//     })
//     .then(value=>{
//       console.log(value);
//     })

// var age = 17;
// if(age >= 18){
//   console.log("you are eligible to vote");
// }else{
//   console.log("you are not eligible to vote");
// }

// var age = 18;
// console.log((age >= 18) ? "you can vote" : "you can't vote");

// var area = "square" ;
// var PI = 3.142, l=5, b=4, r=3;

// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);
// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);
// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));
// }else{
//   console.log("please enter valid data");
// }

// var area = "dsfsad" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){
//   case 'circle':
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }
// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// let flatArr = arr.reduce((accum, currVal)  => {
//           return accum.concat(currVal);
// })

// console.log(arr.flat(Infinity));

// const add = (a,b) => {
//     return a+b;
// }
// // console.log(add(5,2));

// const subs = (a,b) => {
//     return Math.abs(a-b);
// }
// const mult = (a,b) => {
//     return a*b;
// }

// const calculator = (num1,num2, operator) => {
//   return operator(num1,num2);
// }

// calculator(5,2,subs)

// console.log(calculator(5,2,subs));

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);

// Array.prototype.push()
// The push() method adds one or more elements to the
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// // console.log(count);

// animals.push('chicken', 'cats','cow');
// console.log(animals);

// Array.prototype.unshift()
// The unshift() method adds one or more elements to the
// beginning of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');
// console.log(count);
// console.log(animals);

// animals.unshift('chicken', 'cats','cow');
// console.log(animals);

// function myFunc(callback){
//     console.log("my function is doing some task")
//    callback();
// }
//  function myFunc2(){
//     console.log("my function is doing some task 2")
// }
// myFunc(myFunc2);

// function getTwoNumAndAdd(number1,number2, callback){
//   console.log(number1, number2);
//   callback(number1,number2);
// }

// function twoNum(num1, num2){
// console.log(num1+num2)
// }

// getTwoNumAndAdd(2,4,twoNum);

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeText(
//   elem,
//   text,
//   color,
//   time,
//   onsuccesCallback,
//   onFailureCallback
// ) {
//   setTimeout(() => {
//     if (elem) {
//       elem.textContent = text;
//       elem.style.color = color;
//       if (onsuccesCallback) {
//         onsuccesCallback();
//       }
//     } else {
//       if (onFailureCallback) {
//         onFailureCallback();
//       }
//     }
//   }, time);
// }
// changeText(
//   heading1,
//   "one",
//   "green",
//   1000,
//   () => {
//     changeText(
//       heading2,
//       "two",
//       "red",
//       1000,
//       () => {
//         changeText(
//           heading3,
//           "three",
//           "white",
//           1000,
//           () => {},
//           () => {
//             console.log("headind three dosent exist");
//           }
//         );
//       },
//       () => {
//         console.log("heading 2 dosenot exist");
//       }
//     );
//   },
//   () => {
//     console.log("heading 1 dosenot exist");
//   }
// );
// setTimeout(() => {
//   heading1.textContent = "one";
//   heading1.style.color = "violet";
//   setTimeout(() => {
//     heading2.textContent = "two";
//     heading2.style.color = "red";
//     setTimeout(() => {
//       heading3.textContent = "three";
//       heading3.style.color = "purple";
//       setTimeout(() => {
//         heading4.textContent = "four";
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "five";
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "six";
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "seven";
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);


// const bucket = ['coffe', 'chips', 'vegetable', 'salt', 'rice'];
// const friedrice = new Promise((resolve, reject)=>{
//     if(bucket.includes('vegetable') && bucket.includes('salt') && bucket.includes('rice') ){
//         resolve('fried')
//     }else{
//         reject('not found')
//     }
// });

// friedrice.then((friedrice)=>{
//     console.log('yahooooo')
// }).catch((error)=>{
//     console.log('error')
// })


// function myProise(){
//     return new Promise((resolve, reject)=>{
//         resolve('foo');
//     })
// }
// myProise().then((value)=>{
// console.log(value);
// value += 'bar';
// return value
// }).then((value)=>{
// console.log(value)
// }
// )


// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// const changeText = (element, text , color, time)=>{
// return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//         element.style.color = color;
//         resolve();
//         }else{
//     reject();
//         }
//     },time)

// })
// }
// changeText(heading1, 'one', 'blue', 1000)
// .then(()=>
//      changeText(heading2, 'two', 'yellow', 1000)
// ).then(()=>
//      changeText(heading3, 'three', 'red', 1000)
// ).catch(()=>
//     console.log('not found')
// )

// const URL = 'https://jsonplaceholder.typicode.com/posts';
// const xhr = new XMLHttpRequest();

// xhr.open("GET",URL);
// xhr.onload = function(){
//     if(xhr.status ===200 && xhr.status<300){
//         const data = JSON.parse(xhr.response);
//         console.log(data)
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const url2 = `${URL}/${id}`;
//         xhr2.open('GET', url2)
//         xhr2.onload = function(){
//             const data2 = JSON.parse(xhr2.response);
//         console.log(data2)
//         }
//         xhr2.send();
//     }else{
//         console.log('no data found')
//     }

// }
// xhr.onerror= ()=>{
//     console.log('neywork error')
// }
// xhr.send();

// const url = 'https://jsonplaceholder.typicode.com/posts';

// function sendRequest(method,url){
//     return new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest();
//         xhr.open(method,url)
//         xhr.onload = function(){
//             if(xhr.status===200 && xhr.status<300){
//                 resolve(xhr.response);
//             }else{
//                 reject(new Error('wrong'));
//             }
//             xhr.onerror =function(){
//                 reject(new Error('wrong'));
//             }
//         }
//         xhr.send();
//     })
// }
// sendRequest('GET',url).then(a =>{
//    const data= JSON.parse(a)
//     return data;
// }).then((data)=>{
//      const id = data[3].id;
//     return id;

// }).then(()=>{
//     const url2 = `${url}/${id}`
// })


// const url = 'https://jsonplaceholder.typicode.com/poss';

// fetch(url).then((resolve)=>{
//     if(resolve.ok){
//         return resolve.json();
//     }else{
//         throw new Error('something went wrong')
//     }

// }).then((data)=>{
// console.log(data)
// })
// .catch(error =>{
//     console.log('inside catch');
//     console.log(error);
// })


////////////////////////// async await///////////////////

// const url = 'https://jsonplaceholder.typicode.com/posts';

// fetch(url).then((response)=>
// response.json()
// ).then((data)=>
//    console.log(data)

// )

// const url = 'https://jsonplaceholder.typicode.com/posts';

// async function getData(){
//       const response = await fetch(url);  
//     //   console.log(response)
//       const data = await response.json();
//     //   console.log(data)
//     return data;
// }

// getData().then((myData)=>{
//    console.log(myData)
// })

// const redux = require('redux');

// const counterReducer = (state = {counter:0},action)=>{
// return{
//   couter: state.counter+1,
// };
// }

// const store = redux.createStore(counterReducer);

// const counterSubscriber = ()=>{
//   const ltState= store.getState();
//   console.log(ltState)
// }
// store.subscribe(counterSubscriber);
// store.dispatch({type:'ok'});

// const redux = require('redux');

// const counterReducer = (state = {counter:0},action)=>{
// return{
//   couter: state.counter+1,
// };
// }

// const store = redux.createStore(counterReducer);

// const counterSubscriber = ()=>{
//   const ltState= store.getState();
//   console.log(ltState)
// }
// store.subscribe(counterSubscriber);
// store.dispatch({type:'ok'});


// const redux = require('redux');

// const counterReducer = (state = {counter:0},action)=>{
// return{
//   couter: state.counter+1,
// };
// }

// const store = redux.createStore(counterReducer);

// const counterSubscriber = ()=>{
//   const ltState= store.getState();
//   console.log(ltState)
// }
// store.subscribe(counterSubscriber);
// store.dispatch({type:'ok'});



// const response = {
//   "kind": "customsearch#search",
//   "url": {
//     "type": "application/json",
//     "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
//   },
//   "queries": {
//     "request": [
//       {
//         "title": "Google Custom Search - xaxa",
//         "totalResults": "2750000",
//         "searchTerms": "xaxa",
//         "count": 10,
//         "startIndex": 1,
//         "inputEncoding": "utf8",
//         "outputEncoding": "utf8",
//         "safe": "off",
//         "cx": "877c468654b4e6533"
//       }
//     ],
//     "nextPage": [
//       {
//         "title": "Google Custom Search - xaxa",
//         "totalResults": "2750000",
//         "searchTerms": "xaxa",
//         "count": 10,
//         "startIndex": 11,
//         "inputEncoding": "utf8",
//         "outputEncoding": "utf8",
//         "safe": "off",
//         "cx": "877c468654b4e6533"
//       }
//     ]
//   },
//   "context": {
//     "title": "Google"
//   },
//   "searchInformation": {
//     "searchTime": 0.269552,
//     "formattedSearchTime": "0.27",
//     "totalResults": "2750000",
//     "formattedTotalResults": "2,750,000"
//   },
//   "items": [
//     {
//       "kind": "customsearch#result",
//       "title": "XAXA (@xaxa.music) • Instagram photos and videos",
//       "htmlTitle": "\u003cb\u003eXAXA\u003c/b\u003e (@\u003cb\u003exaxa\u003c/b\u003e.music) • Instagram photos and videos",
//       "link": "https://www.instagram.com/xaxa.music/?hl=en",
//       "displayLink": "www.instagram.com",
//       "snippet": "XAXA. Musician/band. Manhattan | NYC Musician Singer/Songwriter | Prime mover of the SAUCE Soul • Pop • R&B. linktr.ee/xaxa.music.",
//       "htmlSnippet": "\u003cb\u003eXAXA\u003c/b\u003e. Musician/band. Manhattan | NYC Musician Singer/Songwriter | Prime mover of the SAUCE Soul • Pop • R&amp;B. linktr.ee/\u003cb\u003exaxa\u003c/b\u003e.music.",
//       "formattedUrl": "https://www.instagram.com/xaxa.music/?hl=en",
//       "htmlFormattedUrl": "https://www.instagram.com/\u003cb\u003exaxa\u003c/b\u003e.music/?hl=en",
//       "pagemap": {
//         "xfn": [
//           {}
//         ],
//         "metatags": [
//           {
//             "og:image": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/274078571_295270512593193_7318177685172393647_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=afaQ93l976kAX8qdYco&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_nbJl7_ZU9rhXD0E33S4UhMM9wxfTgMR-Wl0nwGVzvbg&oe=625E14E2&_nc_sid=7bff83",
//             "theme-color": "#ffffff",
//             "og:type": "profile",
//             "al:ios:app_name": "Instagram",
//             "og:title": "@xaxa.music is on Instagram • 2,077 people follow their account",
//             "al:android:package": "com.instagram.android",
//             "al:ios:url": "instagram://user?username=xaxa.music",
//             "og:description": "2,077 Followers, 1,069 Following, 419 Posts - See Instagram photos and videos from XAXA (@xaxa.music)",
//             "al:ios:app_store_id": "389801252",
//             "al:android:url": "https://www.instagram.com/_u/xaxa.music/",
//             "apple-mobile-web-app-status-bar-style": "default",
//             "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
//             "mobile-web-app-capable": "yes",
//             "og:url": "https://www.instagram.com/xaxa.music/",
//             "al:android:app_name": "Instagram"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/274078571_295270512593193_7318177685172393647_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=afaQ93l976kAX8qdYco&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_nbJl7_ZU9rhXD0E33S4UhMM9wxfTgMR-Wl0nwGVzvbg&oe=625E14E2&_nc_sid=7bff83"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "xaxa - Urban Dictionary",
//       "htmlTitle": "xaxa - Urban Dictionary",
//       "link": "https://www.urbandictionary.com/define.php?term=xaxa",
//       "displayLink": "www.urbandictionary.com",
//       "snippet": "Just xaxa, lolol, wtfbbq, QQ, whatever you like. Person #1: I found a coin in my pocket. ... Get the xaxa mug.",
//       "htmlSnippet": "Just \u003cb\u003exaxa\u003c/b\u003e, lolol, wtfbbq, QQ, whatever you like. Person #1: I found a coin in my pocket. ... Get the \u003cb\u003exaxa\u003c/b\u003e mug.",
//       "cacheId": "0bXALDwhSsMJ",
//       "formattedUrl": "https://www.urbandictionary.com/define.php?term=xaxa",
//       "htmlFormattedUrl": "https://www.urbandictionary.com/define.php?term=\u003cb\u003exaxa\u003c/b\u003e",
//       "pagemap": {
//         "metatags": [
//           {
//             "fb:app_id": "169142139769391",
//             "twitter:title": "Urban Dictionary: xaxa",
//             "twitter:site": "@urbandictionary",
//             "og:site_name": "Urban Dictionary",
//             "viewport": "width=device-width, initial-scale=1.0, user-scalable = no",
//             "apple-mobile-web-app-capable": "yes",
//             "twitter:description": "Greek and Russian for haha. Latin H is X in the Cyrillic and Greek alphabets.",
//             "apple-mobile-web-app-title": "UrbanDict",
//             "og:title": "Urban Dictionary: xaxa"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "xaxA - XaxA - Xenorhabdus nematophila (strain ATCC 19061 / DSM ...",
//       "htmlTitle": "\u003cb\u003exaxA\u003c/b\u003e - \u003cb\u003eXaxA\u003c/b\u003e - Xenorhabdus nematophila (strain ATCC 19061 / DSM ...",
//       "link": "https://www.uniprot.org/uniprot/D3VB22",
//       "displayLink": "www.uniprot.org",
//       "snippet": "Other locations · Protein found in the spore core. · Protein associated with the membrane that surrounds the center or core of a spore, often called spore inner ...",
//       "htmlSnippet": "Other locations &middot; Protein found in the spore core. &middot; Protein associated with the membrane that surrounds the center or core of a spore, often called spore inner&nbsp;...",
//       "formattedUrl": "https://www.uniprot.org/uniprot/D3VB22",
//       "htmlFormattedUrl": "https://www.uniprot.org/uniprot/D3VB22",
//       "pagemap": {
//         "WebPage": [
//           {
//             "help": "Retrieve/ID mapping",
//             "copyrightYear": "2022"
//           }
//         ],
//         "VisualArtwork": [
//           {
//             "license": "http://creativecommons.org/licenses/by/4.0",
//             "name": "Rod-shaped bacteria: one membrane (Gram+)"
//           }
//         ],
//         "metatags": [
//           {
//             "viewport": "width=device-width, initial-scale=1",
//             "google": "nositelinkssearchbox"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//       "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//       "link": "https://www.linkedin.com/in/xaxa-smith",
//       "displayLink": "www.linkedin.com",
//       "snippet": "View Xaxa Sheng Smith's profile on LinkedIn, the world's largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile ...",
//       "htmlSnippet": "View \u003cb\u003eXaxa\u003c/b\u003e Sheng Smith&#39;s profile on LinkedIn, the world&#39;s largest professional community. \u003cb\u003eXaxa\u003c/b\u003e has 12 jobs listed on their profile. See the complete profile&nbsp;...",
//       "formattedUrl": "https://www.linkedin.com/in/xaxa-smith",
//       "htmlFormattedUrl": "https://www.linkedin.com/in/\u003cb\u003exaxa\u003c/b\u003e-smith",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTalCITcOJ7HZ1mfa6fecr6kWzjH7lL_bwzgSc634JgClyM1dxMn4FlTI",
//             "width": "200",
//             "height": "200"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI",
//             "twitter:card": "summary",
//             "platform-worker": "https://static-exp1.licdn.com/sc/h/7nirg34a8ey4y2l4rw7xgwxx4",
//             "al:android:package": "com.linkedin.android",
//             "locale": "en_US",
//             "al:ios:url": "https://www.linkedin.com/in/xaxa-smith",
//             "og:description": "View Xaxa Sheng Smith’s profile on LinkedIn, the world’s largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile on LinkedIn and discover Xaxa’s connections and jobs at similar companies.",
//             "al:ios:app_store_id": "288429040",
//             "platform": "https://static-exp1.licdn.com/sc/h/chqeu129ev4l6ac5l3g3l20xi",
//             "twitter:image": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI",
//             "profile:last_name": "Sheng Smith",
//             "twitter:site": "@Linkedin",
//             "litmsprofilename": "public-profile-frontend",
//             "profile:first_name": "Xaxa",
//             "og:type": "profile",
//             "twitter:title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//             "al:ios:app_name": "LinkedIn",
//             "og:title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//             "pagekey": "public_profile_v3_mobile",
//             "al:android:url": "https://www.linkedin.com/in/xaxa-smith",
//             "viewport": "width=device-width, initial-scale=1.0",
//             "twitter:description": "View Xaxa Sheng Smith’s profile on LinkedIn, the world’s largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile on LinkedIn and discover Xaxa’s connections and jobs at similar companies.",
//             "ubba": "https://static-exp1.licdn.com/sc/h/6mgdxeyaxy3187f4nknns79p2",
//             "og:url": "https://www.linkedin.com/in/xaxa-smith",
//             "al:android:app_name": "LinkedIn"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Xaxa | Spotify",
//       "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e | Spotify",
//       "link": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//       "displayLink": "open.spotify.com",
//       "snippet": "Listen to Xaxa on Spotify. Artist · 69 monthly listeners.",
//       "htmlSnippet": "Listen to \u003cb\u003eXaxa\u003c/b\u003e on Spotify. Artist · 69 monthly listeners.",
//       "cacheId": "1MOSviu2bWAJ",
//       "formattedUrl": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//       "htmlFormattedUrl": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7vizPKWR3qBOa67N4_8kk5xHJNfRylnzLLGqv30xC8MDzDUvu7TYprLo",
//             "width": "225",
//             "height": "225"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a",
//             "og:type": "profile",
//             "twitter:title": "Xaxa",
//             "twitter:card": "summary",
//             "og:site_name": "Spotify",
//             "al:ios:app_name": "Spotify",
//             "og:title": "Xaxa",
//             "al:android:package": "com.spotify.music",
//             "google": "notranslate",
//             "al:ios:url": "spotify://artist/0DNvfqzGi3M7X4cyG3VqiB",
//             "og:description": "Artist · 69 monthly listeners.",
//             "al:ios:app_store_id": "324684580",
//             "twitter:image": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a",
//             "al:android:url": "spotify://artist/0DNvfqzGi3M7X4cyG3VqiB",
//             "fb:app_id": "174829003346",
//             "twitter:site": "@spotify",
//             "viewport": "width=device-width, initial-scale=1",
//             "twitter:description": "Artist · 69 monthly listeners.",
//             "og:url": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//             "al:android:app_name": "Spotify"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Xaxa - Wikipedia",
//       "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e - Wikipedia",
//       "link": "https://en.wikipedia.org/wiki/Xaxa",
//       "displayLink": "en.wikipedia.org",
//       "snippet": "Xaxa may refer to: Places[edit]. Xaxa, Tibet, a village in Tibet; Xaxa, Botswana, a village in Botswana; Xaxa, Cape Verde, a village in the municipality São ...",
//       "htmlSnippet": "\u003cb\u003eXaxa\u003c/b\u003e may refer to: Places[edit]. \u003cb\u003eXaxa\u003c/b\u003e, Tibet, a village in Tibet; \u003cb\u003eXaxa\u003c/b\u003e, Botswana, a village in Botswana; \u003cb\u003eXaxa\u003c/b\u003e, Cape Verde, a village in the municipality São&nbsp;...",
//       "cacheId": "LWvcc-_CDFQJ",
//       "formattedUrl": "https://en.wikipedia.org/wiki/Xaxa",
//       "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eXaxa\u003c/b\u003e",
//       "pagemap": {
//         "metatags": [
//           {
//             "referrer": "origin",
//             "og:type": "website",
//             "og:title": "Xaxa - Wikipedia",
//             "format-detection": "telephone=no"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Women and Gender in the Study of Tribes in India - Virginius Xaxa ...",
//       "htmlTitle": "Women and Gender in the Study of Tribes in India - Virginius \u003cb\u003eXaxa\u003c/b\u003e ...",
//       "link": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//       "displayLink": "journals.sagepub.com",
//       "snippet": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women's issues the world over.",
//       "htmlSnippet": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women&#39;s issues the world over.",
//       "formattedUrl": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//       "htmlFormattedUrl": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeqoJGteVKNtoIXvclnJhEMyE3X6Uu69IONxzsP8AdnEBr-h8vIvDE33s",
//             "width": "180",
//             "height": "279"
//           }
//         ],
//         "metatags": [
//           {
//             "dc.publisher": "Sage PublicationsSage CA: Thousand Oaks, CA",
//             "og:image": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb",
//             "twitter:card": "summary_large_image",
//             "og:image:width": "600",
//             "og:site_name": "SAGE Journals",
//             "citation_journal_title": "Indian Journal of Gender Studies",
//             "dc.format": "text/HTML",
//             "og:description": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women’s issues the world over. The valu...",
//             "twitter:image": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb",
//             "dc.type": "research-article",
//             "dc.source": "http://dx.doi.org/10.1177/097152150401100304",
//             "dc.creator": "Virginius  Xaxa",
//             "dc.description": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women’s issues the world over. The value system governing larger Indian soci...",
//             "og:type": "article",
//             "pbcontext": ";journal:journal:ijgb;wgroup:string:SAGE Publication Websites;page:string:Article/Chapter View;ctype:string:Journal Content;subPage:string:Abstract;issue:issue:10.1177/IJGB_11_3;website:website:sage;article:article:10.1177/097152150401100304;requestedJournal:journal:ijgb;pageGroup:string:Publication Pages",
//             "dc.coverage": "Sage CA: Thousand Oaks, CA",
//             "og:title": "Women and Gender in the Study of Tribes in India - Virginius Xaxa, 2004",
//             "og:image:height": "900",
//             "dc.date": "2016-07-24",
//             "article:published_time - datetime": "July 24, 2016",
//             "article:author": "Virginius Xaxa",
//             "viewport": "width=device-width, initial-scale=1",
//             "dc.title": "Women and Gender in the Study of Tribes in India:",
//             "og:locale": "en_US",
//             "dc.identifier": "10.1177/097152150401100304",
//             "dc.language": "en",
//             "og:url": "https://journals.sagepub.com/doi/10.1177/097152150401100304"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "XAXA nails and more - Google Maps",
//       "htmlTitle": "\u003cb\u003eXAXA\u003c/b\u003e nails and more - Google Maps",
//       "link": "https://www.google.com/maps/?cid=13078536182945203777",
//       "displayLink": "www.google.com",
//       "snippet": "(Translated by Google) Yesterday I had my fifth appointment with XAXA. Unfortunately there was a longer waiting time in the studio.",
//       "htmlSnippet": "(Translated by Google) Yesterday I had my fifth appointment with \u003cb\u003eXAXA\u003c/b\u003e. Unfortunately there was a longer waiting time in the studio.",
//       "cacheId": "u54dtOh68S8J",
//       "formattedUrl": "https://www.google.com/maps/?cid=13078536182945203777",
//       "htmlFormattedUrl": "https://www.google.com/maps/?cid=13078536182945203777",
//       "pagemap": {
//         "metatags": [
//           {
//             "referrer": "origin",
//             "og:image": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p",
//             "og:image:width": "256",
//             "twitter:card": "summary",
//             "og:site_name": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//             "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
//             "og:title": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//             "og:image:height": "256",
//             "google": "notranslate",
//             "og:description": "★★★★★ · Nail salon"
//           }
//         ],
//         "place": [
//           {
//             "image": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p",
//             "name": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//             "description": "★★★★★ · Nail salon"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Stream Xaxa by cop | Listen online for free on SoundCloud",
//       "htmlTitle": "Stream \u003cb\u003eXaxa\u003c/b\u003e by cop | Listen online for free on SoundCloud",
//       "link": "https://soundcloud.com/woopheadclrms/vaxa",
//       "displayLink": "soundcloud.com",
//       "snippet": "May 5, 2021 ... Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//       "htmlSnippet": "May 5, 2021 \u003cb\u003e...\u003c/b\u003e Stream \u003cb\u003eXaxa\u003c/b\u003e by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//       "cacheId": "3OmODf8xa5sJ",
//       "formattedUrl": "https://soundcloud.com/woopheadclrms/vaxa",
//       "htmlFormattedUrl": "https://soundcloud.com/woopheadclrms/vaxa",
//       "pagemap": {
//         "cse_thumbnail": [
//           {
//             "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV_QU4_rACCSoGdn7jpGU3SSQkSd_Yxlgl8M3ET7FUwJHG-u9BTpFiBL4",
//             "width": "225",
//             "height": "225"
//           }
//         ],
//         "metatags": [
//           {
//             "twitter:audio:source": "https://api-partners.soundcloud.com/twitter/tracks/soundcloud:sounds:1042925479/vmap",
//             "twitter:app:id:googleplay": "com.soundcloud.android",
//             "og:image": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg",
//             "twitter:app:url:iphone": "soundcloud://sounds:1042925479",
//             "theme-color": "#333",
//             "og:image:width": "500",
//             "twitter:card": "player",
//             "og:site_name": "SoundCloud",
//             "twitter:url": "https://soundcloud.com/woopheadclrms/vaxa",
//             "twitter:app:url:ipad": "soundcloud://sounds:1042925479",
//             "al:android:package": "com.soundcloud.android",
//             "twitter:app:name:googleplay": "SoundCloud",
//             "medium": "video",
//             "twitter:app:id:iphone": "336353151",
//             "al:ios:url": "soundcloud://sounds:1042925479",
//             "og:description": "Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//             "al:ios:app_store_id": "336353151",
//             "twitter:player": "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1042925479&auto_play=false&show_artwork=true&visual=true&origin=twitter",
//             "twitter:player:height": "400",
//             "og:video:type": "application/x-shockwave-flash",
//             "og:video:height": "98",
//             "og:type": "music.song",
//             "twitter:title": "Xaxa",
//             "al:ios:app_name": "SoundCloud",
//             "twitter:audio:partner": "SoundCloud",
//             "og:title": "Xaxa",
//             "twitter:app:id:ipad": "336353151",
//             "og:image:height": "500",
//             "og:video:width": "460",
//             "twitter:image:src": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg",
//             "al:android:url": "soundcloud://sounds:1042925479",
//             "referrer": "origin",
//             "fb:app_id": "19507961798",
//             "twitter:app:url:googleplay": "soundcloud://sounds:1042925479",
//             "twitter:app:name:ipad": "SoundCloud",
//             "og:video": "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1042925479&auto_play=false&show_artwork=true&visual=true&color=3b5998&origin=facebook",
//             "viewport": "width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1",
//             "twitter:audio:artist_name": "cop",
//             "twitter:description": "Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//             "al:web:should_fallback": "false",
//             "og:url": "https://soundcloud.com/woopheadclrms/vaxa",
//             "twitter:player:width": "435",
//             "al:android:app_name": "SoundCloud",
//             "twitter:app:name:iphone": "SoundCloud"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg"
//           }
//         ]
//       }
//     },
//     {
//       "kind": "customsearch#result",
//       "title": "Social Exclusion and Adverse Inclusion - Dev Nathan; Virginius Xaxa",
//       "htmlTitle": "Social Exclusion and Adverse Inclusion - Dev Nathan; Virginius \u003cb\u003eXaxa\u003c/b\u003e",
//       "link": "https://global.oup.com/academic/product/social-exclusion-and-adverse-inclusion-9780198078937",
//       "displayLink": "global.oup.com",
//       "snippet": "Dev Nathan and Virginius Xaxa. Case studies on Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura; Examines issues of child mortality, ...",
//       "htmlSnippet": "Dev Nathan and Virginius \u003cb\u003eXaxa\u003c/b\u003e. Case studies on Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura; Examines issues of child mortality,&nbsp;...",
//       "cacheId": "nl0QNuOQUDgJ",
//       "formattedUrl": "https://global.oup.com/.../social-exclusion-and-adverse-inclusion- 9780198078937",
//       "htmlFormattedUrl": "https://global.oup.com/.../social-exclusion-and-adverse-inclusion- 9780198078937",
//       "pagemap": {
//         "offer": [
//           {
//             "price": "50.00"
//           }
//         ],
//         "product": [
//           {
//             "image": "https://global.oup.com/academic/covers/pdp/9780198078937",
//             "name": "Social Exclusion and Adverse Inclusion"
//           }
//         ],
//         "metatags": [
//           {
//             "og:image": "https://global.oup.com/academic/covers/pop-up/9780198078937",
//             "twitter:card": "product",
//             "wt.si_n": "Purchase1",
//             "language": "en_GB",
//             "wt.sp": "GAB_Marketing",
//             "og:description": "This volume focuses on themes of exclusion and inclusion vis-a-vis Adivasis in India. It locates issues of development and impediments to their growth within a larger regional, national, and even global, context. The discussion centres on the states of Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura, which have significant Adivasi populations.",
//             "twitter:creator": "@OUPAcademic",
//             "wt.z_cc": "us",
//             "twitter:image": "https://global.oup.com/academic/covers/pop-up/9780198078937",
//             "twitter:site": "@OUPAcademic",
//             "wt.z_lang": "en",
//             "wt.pn_sku": "9780198078937",
//             "wt.tx_u": "1",
//             "wt.z_tab": "overview",
//             "og:type": "book",
//             "twitter:title": "Social Exclusion and Adverse Inclusion",
//             "og:title": "Social Exclusion and Adverse Inclusion",
//             "wt.cg_n": "Product Detail Page",
//             "og:updated_time": "Sun Apr 10 04:46:36 UTC 2022",
//             "wt.tx_e": "v",
//             "viewport": "initial-scale=1.0",
//             "wt.si_x": "1",
//             "twitter:description": "This volume focuses on themes of exclusion and inclusion vis-a-vis Adivasis in India. It locates issues of development and impediments to their growth within a larger regional, national, and even global, context. The discussion centres on the states of Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura, which have significant Adivasi populations.",
//             "og:url": "https://global.oup.com/academic/product/social-exclusion-and-adverse-inclusion-9780198078937",
//             "format-detection": "telephone=no"
//           }
//         ],
//         "cse_image": [
//           {
//             "src": "https://global.oup.com/academic/covers/pop-up/9780198078937"
//           }
//         ],
//         "hproduct": [
//           {
//             "fn": "Social Exclusion and Adverse Inclusion",
//             "photo": "https://global.oup.com/academic/covers/pdp/9780198078937",
//             "currency": "USD",
//             "currency_iso4217": "840"
//           }
//         ]
//       }
//     }
//   ]
// }

// console.log(JSON.parse(response));


// export default {
//   "kind": "customsearch#search",
//   "url": {
//       "type": "application/json",
//       "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
//   },
//   "queries": {
//       "request": [
//           {
//               "title": "Google Custom Search - xaxa",
//               "totalResults": "2750000",
//               "searchTerms": "xaxa",
//               "count": 10,
//               "startIndex": 1,
//               "inputEncoding": "utf8",
//               "outputEncoding": "utf8",
//               "safe": "off",
//               "cx": "877c468654b4e6533"
//           }
//       ],
//       "nextPage": [
//           {
//               "title": "Google Custom Search - xaxa",
//               "totalResults": "2750000",
//               "searchTerms": "xaxa",
//               "count": 10,
//               "startIndex": 11,
//               "inputEncoding": "utf8",
//               "outputEncoding": "utf8",
//               "safe": "off",
//               "cx": "877c468654b4e6533"
//           }
//       ]
//   },
//   "context": {
//       "title": "Google"
//   },
//   "searchInformation": {
//       "searchTime": 0.269552,
//       "formattedSearchTime": "0.27",
//       "totalResults": "2750000",
//       "formattedTotalResults": "2,750,000"
//   },
//   "items": [
//       {
//           "kind": "customsearch#result",
//           "title": "XAXA (@xaxa.music) • Instagram photos and videos",
//           "htmlTitle": "\u003cb\u003eXAXA\u003c/b\u003e (@\u003cb\u003exaxa\u003c/b\u003e.music) • Instagram photos and videos",
//           "link": "https://www.instagram.com/xaxa.music/?hl=en",
//           "displayLink": "www.instagram.com",
//           "snippet": "XAXA. Musician/band. Manhattan | NYC Musician Singer/Songwriter | Prime mover of the SAUCE Soul • Pop • R&B. linktr.ee/xaxa.music.",
//           "htmlSnippet": "\u003cb\u003eXAXA\u003c/b\u003e. Musician/band. Manhattan | NYC Musician Singer/Songwriter | Prime mover of the SAUCE Soul • Pop • R&amp;B. linktr.ee/\u003cb\u003exaxa\u003c/b\u003e.music.",
//           "formattedUrl": "https://www.instagram.com/xaxa.music/?hl=en",
//           "htmlFormattedUrl": "https://www.instagram.com/\u003cb\u003exaxa\u003c/b\u003e.music/?hl=en",
//           "pagemap": {
//               "xfn": [
//                   {}
//               ],
//               "metatags": [
//                   {
//                       "og:image": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/274078571_295270512593193_7318177685172393647_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=afaQ93l976kAX8qdYco&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_nbJl7_ZU9rhXD0E33S4UhMM9wxfTgMR-Wl0nwGVzvbg&oe=625E14E2&_nc_sid=7bff83",
//                       "theme-color": "#ffffff",
//                       "og:type": "profile",
//                       "al:ios:app_name": "Instagram",
//                       "og:title": "@xaxa.music is on Instagram • 2,077 people follow their account",
//                       "al:android:package": "com.instagram.android",
//                       "al:ios:url": "instagram://user?username=xaxa.music",
//                       "og:description": "2,077 Followers, 1,069 Following, 419 Posts - See Instagram photos and videos from XAXA (@xaxa.music)",
//                       "al:ios:app_store_id": "389801252",
//                       "al:android:url": "https://www.instagram.com/_u/xaxa.music/",
//                       "apple-mobile-web-app-status-bar-style": "default",
//                       "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
//                       "mobile-web-app-capable": "yes",
//                       "og:url": "https://www.instagram.com/xaxa.music/",
//                       "al:android:app_name": "Instagram"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/274078571_295270512593193_7318177685172393647_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=afaQ93l976kAX8qdYco&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_nbJl7_ZU9rhXD0E33S4UhMM9wxfTgMR-Wl0nwGVzvbg&oe=625E14E2&_nc_sid=7bff83"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "xaxa - Urban Dictionary",
//           "htmlTitle": "xaxa - Urban Dictionary",
//           "link": "https://www.urbandictionary.com/define.php?term=xaxa",
//           "displayLink": "www.urbandictionary.com",
//           "snippet": "Just xaxa, lolol, wtfbbq, QQ, whatever you like. Person #1: I found a coin in my pocket. ... Get the xaxa mug.",
//           "htmlSnippet": "Just \u003cb\u003exaxa\u003c/b\u003e, lolol, wtfbbq, QQ, whatever you like. Person #1: I found a coin in my pocket. ... Get the \u003cb\u003exaxa\u003c/b\u003e mug.",
//           "cacheId": "0bXALDwhSsMJ",
//           "formattedUrl": "https://www.urbandictionary.com/define.php?term=xaxa",
//           "htmlFormattedUrl": "https://www.urbandictionary.com/define.php?term=\u003cb\u003exaxa\u003c/b\u003e",
//           "pagemap": {
//               "metatags": [
//                   {
//                       "fb:app_id": "169142139769391",
//                       "twitter:title": "Urban Dictionary: xaxa",
//                       "twitter:site": "@urbandictionary",
//                       "og:site_name": "Urban Dictionary",
//                       "viewport": "width=device-width, initial-scale=1.0, user-scalable = no",
//                       "apple-mobile-web-app-capable": "yes",
//                       "twitter:description": "Greek and Russian for haha. Latin H is X in the Cyrillic and Greek alphabets.",
//                       "apple-mobile-web-app-title": "UrbanDict",
//                       "og:title": "Urban Dictionary: xaxa"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "xaxA - XaxA - Xenorhabdus nematophila (strain ATCC 19061 / DSM ...",
//           "htmlTitle": "\u003cb\u003exaxA\u003c/b\u003e - \u003cb\u003eXaxA\u003c/b\u003e - Xenorhabdus nematophila (strain ATCC 19061 / DSM ...",
//           "link": "https://www.uniprot.org/uniprot/D3VB22",
//           "displayLink": "www.uniprot.org",
//           "snippet": "Other locations · Protein found in the spore core. · Protein associated with the membrane that surrounds the center or core of a spore, often called spore inner ...",
//           "htmlSnippet": "Other locations &middot; Protein found in the spore core. &middot; Protein associated with the membrane that surrounds the center or core of a spore, often called spore inner&nbsp;...",
//           "formattedUrl": "https://www.uniprot.org/uniprot/D3VB22",
//           "htmlFormattedUrl": "https://www.uniprot.org/uniprot/D3VB22",
//           "pagemap": {
//               "WebPage": [
//                   {
//                       "help": "Retrieve/ID mapping",
//                       "copyrightYear": "2022"
//                   }
//               ],
//               "VisualArtwork": [
//                   {
//                       "license": "http://creativecommons.org/licenses/by/4.0",
//                       "name": "Rod-shaped bacteria: one membrane (Gram+)"
//                   }
//               ],
//               "metatags": [
//                   {
//                       "viewport": "width=device-width, initial-scale=1",
//                       "google": "nositelinkssearchbox"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//           "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//           "link": "https://www.linkedin.com/in/xaxa-smith",
//           "displayLink": "www.linkedin.com",
//           "snippet": "View Xaxa Sheng Smith's profile on LinkedIn, the world's largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile ...",
//           "htmlSnippet": "View \u003cb\u003eXaxa\u003c/b\u003e Sheng Smith&#39;s profile on LinkedIn, the world&#39;s largest professional community. \u003cb\u003eXaxa\u003c/b\u003e has 12 jobs listed on their profile. See the complete profile&nbsp;...",
//           "formattedUrl": "https://www.linkedin.com/in/xaxa-smith",
//           "htmlFormattedUrl": "https://www.linkedin.com/in/\u003cb\u003exaxa\u003c/b\u003e-smith",
//           "pagemap": {
//               "cse_thumbnail": [
//                   {
//                       "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTalCITcOJ7HZ1mfa6fecr6kWzjH7lL_bwzgSc634JgClyM1dxMn4FlTI",
//                       "width": "200",
//                       "height": "200"
//                   }
//               ],
//               "metatags": [
//                   {
//                       "og:image": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI",
//                       "twitter:card": "summary",
//                       "platform-worker": "https://static-exp1.licdn.com/sc/h/7nirg34a8ey4y2l4rw7xgwxx4",
//                       "al:android:package": "com.linkedin.android",
//                       "locale": "en_US",
//                       "al:ios:url": "https://www.linkedin.com/in/xaxa-smith",
//                       "og:description": "View Xaxa Sheng Smith’s profile on LinkedIn, the world’s largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile on LinkedIn and discover Xaxa’s connections and jobs at similar companies.",
//                       "al:ios:app_store_id": "288429040",
//                       "platform": "https://static-exp1.licdn.com/sc/h/chqeu129ev4l6ac5l3g3l20xi",
//                       "twitter:image": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI",
//                       "profile:last_name": "Sheng Smith",
//                       "twitter:site": "@Linkedin",
//                       "litmsprofilename": "public-profile-frontend",
//                       "profile:first_name": "Xaxa",
//                       "og:type": "profile",
//                       "twitter:title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//                       "al:ios:app_name": "LinkedIn",
//                       "og:title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//                       "pagekey": "public_profile_v3_mobile",
//                       "al:android:url": "https://www.linkedin.com/in/xaxa-smith",
//                       "viewport": "width=device-width, initial-scale=1.0",
//                       "twitter:description": "View Xaxa Sheng Smith’s profile on LinkedIn, the world’s largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile on LinkedIn and discover Xaxa’s connections and jobs at similar companies.",
//                       "ubba": "https://static-exp1.licdn.com/sc/h/6mgdxeyaxy3187f4nknns79p2",
//                       "og:url": "https://www.linkedin.com/in/xaxa-smith",
//                       "al:android:app_name": "LinkedIn"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "Xaxa | Spotify",
//           "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e | Spotify",
//           "link": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//           "displayLink": "open.spotify.com",
//           "snippet": "Listen to Xaxa on Spotify. Artist · 69 monthly listeners.",
//           "htmlSnippet": "Listen to \u003cb\u003eXaxa\u003c/b\u003e on Spotify. Artist · 69 monthly listeners.",
//           "cacheId": "1MOSviu2bWAJ",
//           "formattedUrl": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//           "htmlFormattedUrl": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//           "pagemap": {
//               "cse_thumbnail": [
//                   {
//                       "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7vizPKWR3qBOa67N4_8kk5xHJNfRylnzLLGqv30xC8MDzDUvu7TYprLo",
//                       "width": "225",
//                       "height": "225"
//                   }
//               ],
//               "metatags": [
//                   {
//                       "og:image": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a",
//                       "og:type": "profile",
//                       "twitter:title": "Xaxa",
//                       "twitter:card": "summary",
//                       "og:site_name": "Spotify",
//                       "al:ios:app_name": "Spotify",
//                       "og:title": "Xaxa",
//                       "al:android:package": "com.spotify.music",
//                       "google": "notranslate",
//                       "al:ios:url": "spotify://artist/0DNvfqzGi3M7X4cyG3VqiB",
//                       "og:description": "Artist · 69 monthly listeners.",
//                       "al:ios:app_store_id": "324684580",
//                       "twitter:image": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a",
//                       "al:android:url": "spotify://artist/0DNvfqzGi3M7X4cyG3VqiB",
//                       "fb:app_id": "174829003346",
//                       "twitter:site": "@spotify",
//                       "viewport": "width=device-width, initial-scale=1",
//                       "twitter:description": "Artist · 69 monthly listeners.",
//                       "og:url": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//                       "al:android:app_name": "Spotify"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "Xaxa - Wikipedia",
//           "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e - Wikipedia",
//           "link": "https://en.wikipedia.org/wiki/Xaxa",
//           "displayLink": "en.wikipedia.org",
//           "snippet": "Xaxa may refer to: Places[edit]. Xaxa, Tibet, a village in Tibet; Xaxa, Botswana, a village in Botswana; Xaxa, Cape Verde, a village in the municipality São ...",
//           "htmlSnippet": "\u003cb\u003eXaxa\u003c/b\u003e may refer to: Places[edit]. \u003cb\u003eXaxa\u003c/b\u003e, Tibet, a village in Tibet; \u003cb\u003eXaxa\u003c/b\u003e, Botswana, a village in Botswana; \u003cb\u003eXaxa\u003c/b\u003e, Cape Verde, a village in the municipality São&nbsp;...",
//           "cacheId": "LWvcc-_CDFQJ",
//           "formattedUrl": "https://en.wikipedia.org/wiki/Xaxa",
//           "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eXaxa\u003c/b\u003e",
//           "pagemap": {
//               "metatags": [
//                   {
//                       "referrer": "origin",
//                       "og:type": "website",
//                       "og:title": "Xaxa - Wikipedia",
//                       "format-detection": "telephone=no"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "Women and Gender in the Study of Tribes in India - Virginius Xaxa ...",
//           "htmlTitle": "Women and Gender in the Study of Tribes in India - Virginius \u003cb\u003eXaxa\u003c/b\u003e ...",
//           "link": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//           "displayLink": "journals.sagepub.com",
//           "snippet": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women's issues the world over.",
//           "htmlSnippet": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women&#39;s issues the world over.",
//           "formattedUrl": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//           "htmlFormattedUrl": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//           "pagemap": {
//               "cse_thumbnail": [
//                   {
//                       "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeqoJGteVKNtoIXvclnJhEMyE3X6Uu69IONxzsP8AdnEBr-h8vIvDE33s",
//                       "width": "180",
//                       "height": "279"
//                   }
//               ],
//               "metatags": [
//                   {
//                       "dc.publisher": "Sage PublicationsSage CA: Thousand Oaks, CA",
//                       "og:image": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb",
//                       "twitter:card": "summary_large_image",
//                       "og:image:width": "600",
//                       "og:site_name": "SAGE Journals",
//                       "citation_journal_title": "Indian Journal of Gender Studies",
//                       "dc.format": "text/HTML",
//                       "og:description": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women’s issues the world over. The valu...",
//                       "twitter:image": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb",
//                       "dc.type": "research-article",
//                       "dc.source": "http://dx.doi.org/10.1177/097152150401100304",
//                       "dc.creator": "Virginius  Xaxa",
//                       "dc.description": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women’s issues the world over. The value system governing larger Indian soci...",
//                       "og:type": "article",
//                       "pbcontext": ";journal:journal:ijgb;wgroup:string:SAGE Publication Websites;page:string:Article/Chapter View;ctype:string:Journal Content;subPage:string:Abstract;issue:issue:10.1177/IJGB_11_3;website:website:sage;article:article:10.1177/097152150401100304;requestedJournal:journal:ijgb;pageGroup:string:Publication Pages",
//                       "dc.coverage": "Sage CA: Thousand Oaks, CA",
//                       "og:title": "Women and Gender in the Study of Tribes in India - Virginius Xaxa, 2004",
//                       "og:image:height": "900",
//                       "dc.date": "2016-07-24",
//                       "article:published_time - datetime": "July 24, 2016",
//                       "article:author": "Virginius Xaxa",
//                       "viewport": "width=device-width, initial-scale=1",
//                       "dc.title": "Women and Gender in the Study of Tribes in India:",
//                       "og:locale": "en_US",
//                       "dc.identifier": "10.1177/097152150401100304",
//                       "dc.language": "en",
//                       "og:url": "https://journals.sagepub.com/doi/10.1177/097152150401100304"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "XAXA nails and more - Google Maps",
//           "htmlTitle": "\u003cb\u003eXAXA\u003c/b\u003e nails and more - Google Maps",
//           "link": "https://www.google.com/maps/?cid=13078536182945203777",
//           "displayLink": "www.google.com",
//           "snippet": "(Translated by Google) Yesterday I had my fifth appointment with XAXA. Unfortunately there was a longer waiting time in the studio.",
//           "htmlSnippet": "(Translated by Google) Yesterday I had my fifth appointment with \u003cb\u003eXAXA\u003c/b\u003e. Unfortunately there was a longer waiting time in the studio.",
//           "cacheId": "u54dtOh68S8J",
//           "formattedUrl": "https://www.google.com/maps/?cid=13078536182945203777",
//           "htmlFormattedUrl": "https://www.google.com/maps/?cid=13078536182945203777",
//           "pagemap": {
//               "metatags": [
//                   {
//                       "referrer": "origin",
//                       "og:image": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p",
//                       "og:image:width": "256",
//                       "twitter:card": "summary",
//                       "og:site_name": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//                       "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
//                       "og:title": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//                       "og:image:height": "256",
//                       "google": "notranslate",
//                       "og:description": "★★★★★ · Nail salon"
//                   }
//               ],
//               "place": [
//                   {
//                       "image": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p",
//                       "name": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//                       "description": "★★★★★ · Nail salon"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "Stream Xaxa by cop | Listen online for free on SoundCloud",
//           "htmlTitle": "Stream \u003cb\u003eXaxa\u003c/b\u003e by cop | Listen online for free on SoundCloud",
//           "link": "https://soundcloud.com/woopheadclrms/vaxa",
//           "displayLink": "soundcloud.com",
//           "snippet": "May 5, 2021 ... Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//           "htmlSnippet": "May 5, 2021 \u003cb\u003e...\u003c/b\u003e Stream \u003cb\u003eXaxa\u003c/b\u003e by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//           "cacheId": "3OmODf8xa5sJ",
//           "formattedUrl": "https://soundcloud.com/woopheadclrms/vaxa",
//           "htmlFormattedUrl": "https://soundcloud.com/woopheadclrms/vaxa",
//           "pagemap": {
//               "cse_thumbnail": [
//                   {
//                       "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV_QU4_rACCSoGdn7jpGU3SSQkSd_Yxlgl8M3ET7FUwJHG-u9BTpFiBL4",
//                       "width": "225",
//                       "height": "225"
//                   }
//               ],
//               "metatags": [
//                   {
//                       "twitter:audio:source": "https://api-partners.soundcloud.com/twitter/tracks/soundcloud:sounds:1042925479/vmap",
//                       "twitter:app:id:googleplay": "com.soundcloud.android",
//                       "og:image": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg",
//                       "twitter:app:url:iphone": "soundcloud://sounds:1042925479",
//                       "theme-color": "#333",
//                       "og:image:width": "500",
//                       "twitter:card": "player",
//                       "og:site_name": "SoundCloud",
//                       "twitter:url": "https://soundcloud.com/woopheadclrms/vaxa",
//                       "twitter:app:url:ipad": "soundcloud://sounds:1042925479",
//                       "al:android:package": "com.soundcloud.android",
//                       "twitter:app:name:googleplay": "SoundCloud",
//                       "medium": "video",
//                       "twitter:app:id:iphone": "336353151",
//                       "al:ios:url": "soundcloud://sounds:1042925479",
//                       "og:description": "Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//                       "al:ios:app_store_id": "336353151",
//                       "twitter:player": "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1042925479&auto_play=false&show_artwork=true&visual=true&origin=twitter",
//                       "twitter:player:height": "400",
//                       "og:video:type": "application/x-shockwave-flash",
//                       "og:video:height": "98",
//                       "og:type": "music.song",
//                       "twitter:title": "Xaxa",
//                       "al:ios:app_name": "SoundCloud",
//                       "twitter:audio:partner": "SoundCloud",
//                       "og:title": "Xaxa",
//                       "twitter:app:id:ipad": "336353151",
//                       "og:image:height": "500",
//                       "og:video:width": "460",
//                       "twitter:image:src": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg",
//                       "al:android:url": "soundcloud://sounds:1042925479",
//                       "referrer": "origin",
//                       "fb:app_id": "19507961798",
//                       "twitter:app:url:googleplay": "soundcloud://sounds:1042925479",
//                       "twitter:app:name:ipad": "SoundCloud",
//                       "og:video": "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1042925479&auto_play=false&show_artwork=true&visual=true&color=3b5998&origin=facebook",
//                       "viewport": "width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1",
//                       "twitter:audio:artist_name": "cop",
//                       "twitter:description": "Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//                       "al:web:should_fallback": "false",
//                       "og:url": "https://soundcloud.com/woopheadclrms/vaxa",
//                       "twitter:player:width": "435",
//                       "al:android:app_name": "SoundCloud",
//                       "twitter:app:name:iphone": "SoundCloud"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg"
//                   }
//               ]
//           }
//       },
//       {
//           "kind": "customsearch#result",
//           "title": "Social Exclusion and Adverse Inclusion - Dev Nathan; Virginius Xaxa",
//           "htmlTitle": "Social Exclusion and Adverse Inclusion - Dev Nathan; Virginius \u003cb\u003eXaxa\u003c/b\u003e",
//           "link": "https://global.oup.com/academic/product/social-exclusion-and-adverse-inclusion-9780198078937",
//           "displayLink": "global.oup.com",
//           "snippet": "Dev Nathan and Virginius Xaxa. Case studies on Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura; Examines issues of child mortality, ...",
//           "htmlSnippet": "Dev Nathan and Virginius \u003cb\u003eXaxa\u003c/b\u003e. Case studies on Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura; Examines issues of child mortality,&nbsp;...",
//           "cacheId": "nl0QNuOQUDgJ",
//           "formattedUrl": "https://global.oup.com/.../social-exclusion-and-adverse-inclusion- 9780198078937",
//           "htmlFormattedUrl": "https://global.oup.com/.../social-exclusion-and-adverse-inclusion- 9780198078937",
//           "pagemap": {
//               "offer": [
//                   {
//                       "price": "50.00"
//                   }
//               ],
//               "product": [
//                   {
//                       "image": "https://global.oup.com/academic/covers/pdp/9780198078937",
//                       "name": "Social Exclusion and Adverse Inclusion"
//                   }
//               ],
//               "metatags": [
//                   {
//                       "og:image": "https://global.oup.com/academic/covers/pop-up/9780198078937",
//                       "twitter:card": "product",
//                       "wt.si_n": "Purchase1",
//                       "language": "en_GB",
//                       "wt.sp": "GAB_Marketing",
//                       "og:description": "This volume focuses on themes of exclusion and inclusion vis-a-vis Adivasis in India. It locates issues of development and impediments to their growth within a larger regional, national, and even global, context. The discussion centres on the states of Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura, which have significant Adivasi populations.",
//                       "twitter:creator": "@OUPAcademic",
//                       "wt.z_cc": "us",
//                       "twitter:image": "https://global.oup.com/academic/covers/pop-up/9780198078937",
//                       "twitter:site": "@OUPAcademic",
//                       "wt.z_lang": "en",
//                       "wt.pn_sku": "9780198078937",
//                       "wt.tx_u": "1",
//                       "wt.z_tab": "overview",
//                       "og:type": "book",
//                       "twitter:title": "Social Exclusion and Adverse Inclusion",
//                       "og:title": "Social Exclusion and Adverse Inclusion",
//                       "wt.cg_n": "Product Detail Page",
//                       "og:updated_time": "Sun Apr 10 04:46:36 UTC 2022",
//                       "wt.tx_e": "v",
//                       "viewport": "initial-scale=1.0",
//                       "wt.si_x": "1",
//                       "twitter:description": "This volume focuses on themes of exclusion and inclusion vis-a-vis Adivasis in India. It locates issues of development and impediments to their growth within a larger regional, national, and even global, context. The discussion centres on the states of Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura, which have significant Adivasi populations.",
//                       "og:url": "https://global.oup.com/academic/product/social-exclusion-and-adverse-inclusion-9780198078937",
//                       "format-detection": "telephone=no"
//                   }
//               ],
//               "cse_image": [
//                   {
//                       "src": "https://global.oup.com/academic/covers/pop-up/9780198078937"
//                   }
//               ],
//               "hproduct": [
//                   {
//                       "fn": "Social Exclusion and Adverse Inclusion",
//                       "photo": "https://global.oup.com/academic/covers/pdp/9780198078937",
//                       "currency": "USD",
//                       "currency_iso4217": "840"
//                   }
//               ]
//           }
//       }
//   ]
// }

// let response = {
//     "kind": "customsearch#search",
//     "url": {
//         "type": "application/json",
//         "template": "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json"
//     },
//     "queries": {
//         "request": [
//             {
//                 "title": "Google Custom Search - xaxa",
//                 "totalResults": "2750000",
//                 "searchTerms": "xaxa",
//                 "count": 10,
//                 "startIndex": 1,
//                 "inputEncoding": "utf8",
//                 "outputEncoding": "utf8",
//                 "safe": "off",
//                 "cx": "877c468654b4e6533"
//             }
//         ],
//         "nextPage": [
//             {
//                 "title": "Google Custom Search - xaxa",
//                 "totalResults": "2750000",
//                 "searchTerms": "xaxa",
//                 "count": 10,
//                 "startIndex": 11,
//                 "inputEncoding": "utf8",
//                 "outputEncoding": "utf8",
//                 "safe": "off",
//                 "cx": "877c468654b4e6533"
//             }
//         ]
//     },
//     "context": {
//         "title": "Google"
//     },
//     "searchInformation": {
//         "searchTime": 0.269552,
//         "formattedSearchTime": "0.27",
//         "totalResults": "2750000",
//         "formattedTotalResults": "2,750,000"
//     },
//     "items": [
//         {
//             "kind": "customsearch#result",
//             "title": "XAXA (@xaxa.music) • Instagram photos and videos",
//             "htmlTitle": "\u003cb\u003eXAXA\u003c/b\u003e (@\u003cb\u003exaxa\u003c/b\u003e.music) • Instagram photos and videos",
//             "link": "https://www.instagram.com/xaxa.music/?hl=en",
//             "displayLink": "www.instagram.com",
//             "snippet": "XAXA. Musician/band. Manhattan | NYC Musician Singer/Songwriter | Prime mover of the SAUCE Soul • Pop • R&B. linktr.ee/xaxa.music.",
//             "htmlSnippet": "\u003cb\u003eXAXA\u003c/b\u003e. Musician/band. Manhattan | NYC Musician Singer/Songwriter | Prime mover of the SAUCE Soul • Pop • R&amp;B. linktr.ee/\u003cb\u003exaxa\u003c/b\u003e.music.",
//             "formattedUrl": "https://www.instagram.com/xaxa.music/?hl=en",
//             "htmlFormattedUrl": "https://www.instagram.com/\u003cb\u003exaxa\u003c/b\u003e.music/?hl=en",
//             "pagemap": {
//                 "xfn": [
//                     {}
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/274078571_295270512593193_7318177685172393647_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=afaQ93l976kAX8qdYco&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_nbJl7_ZU9rhXD0E33S4UhMM9wxfTgMR-Wl0nwGVzvbg&oe=625E14E2&_nc_sid=7bff83",
//                         "theme-color": "#ffffff",
//                         "og:type": "profile",
//                         "al:ios:app_name": "Instagram",
//                         "og:title": "@xaxa.music is on Instagram • 2,077 people follow their account",
//                         "al:android:package": "com.instagram.android",
//                         "al:ios:url": "instagram://user?username=xaxa.music",
//                         "og:description": "2,077 Followers, 1,069 Following, 419 Posts - See Instagram photos and videos from XAXA (@xaxa.music)",
//                         "al:ios:app_store_id": "389801252",
//                         "al:android:url": "https://www.instagram.com/_u/xaxa.music/",
//                         "apple-mobile-web-app-status-bar-style": "default",
//                         "viewport": "width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover",
//                         "mobile-web-app-capable": "yes",
//                         "og:url": "https://www.instagram.com/xaxa.music/",
//                         "al:android:app_name": "Instagram"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/274078571_295270512593193_7318177685172393647_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_cat=109&_nc_ohc=afaQ93l976kAX8qdYco&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT_nbJl7_ZU9rhXD0E33S4UhMM9wxfTgMR-Wl0nwGVzvbg&oe=625E14E2&_nc_sid=7bff83"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "xaxa - Urban Dictionary",
//             "htmlTitle": "xaxa - Urban Dictionary",
//             "link": "https://www.urbandictionary.com/define.php?term=xaxa",
//             "displayLink": "www.urbandictionary.com",
//             "snippet": "Just xaxa, lolol, wtfbbq, QQ, whatever you like. Person #1: I found a coin in my pocket. ... Get the xaxa mug.",
//             "htmlSnippet": "Just \u003cb\u003exaxa\u003c/b\u003e, lolol, wtfbbq, QQ, whatever you like. Person #1: I found a coin in my pocket. ... Get the \u003cb\u003exaxa\u003c/b\u003e mug.",
//             "cacheId": "0bXALDwhSsMJ",
//             "formattedUrl": "https://www.urbandictionary.com/define.php?term=xaxa",
//             "htmlFormattedUrl": "https://www.urbandictionary.com/define.php?term=\u003cb\u003exaxa\u003c/b\u003e",
//             "pagemap": {
//                 "metatags": [
//                     {
//                         "fb:app_id": "169142139769391",
//                         "twitter:title": "Urban Dictionary: xaxa",
//                         "twitter:site": "@urbandictionary",
//                         "og:site_name": "Urban Dictionary",
//                         "viewport": "width=device-width, initial-scale=1.0, user-scalable = no",
//                         "apple-mobile-web-app-capable": "yes",
//                         "twitter:description": "Greek and Russian for haha. Latin H is X in the Cyrillic and Greek alphabets.",
//                         "apple-mobile-web-app-title": "UrbanDict",
//                         "og:title": "Urban Dictionary: xaxa"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "xaxA - XaxA - Xenorhabdus nematophila (strain ATCC 19061 / DSM ...",
//             "htmlTitle": "\u003cb\u003exaxA\u003c/b\u003e - \u003cb\u003eXaxA\u003c/b\u003e - Xenorhabdus nematophila (strain ATCC 19061 / DSM ...",
//             "link": "https://www.uniprot.org/uniprot/D3VB22",
//             "displayLink": "www.uniprot.org",
//             "snippet": "Other locations · Protein found in the spore core. · Protein associated with the membrane that surrounds the center or core of a spore, often called spore inner ...",
//             "htmlSnippet": "Other locations &middot; Protein found in the spore core. &middot; Protein associated with the membrane that surrounds the center or core of a spore, often called spore inner&nbsp;...",
//             "formattedUrl": "https://www.uniprot.org/uniprot/D3VB22",
//             "htmlFormattedUrl": "https://www.uniprot.org/uniprot/D3VB22",
//             "pagemap": {
//                 "WebPage": [
//                     {
//                         "help": "Retrieve/ID mapping",
//                         "copyrightYear": "2022"
//                     }
//                 ],
//                 "VisualArtwork": [
//                     {
//                         "license": "http://creativecommons.org/licenses/by/4.0",
//                         "name": "Rod-shaped bacteria: one membrane (Gram+)"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "viewport": "width=device-width, initial-scale=1",
//                         "google": "nositelinkssearchbox"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//             "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//             "link": "https://www.linkedin.com/in/xaxa-smith",
//             "displayLink": "www.linkedin.com",
//             "snippet": "View Xaxa Sheng Smith's profile on LinkedIn, the world's largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile ...",
//             "htmlSnippet": "View \u003cb\u003eXaxa\u003c/b\u003e Sheng Smith&#39;s profile on LinkedIn, the world&#39;s largest professional community. \u003cb\u003eXaxa\u003c/b\u003e has 12 jobs listed on their profile. See the complete profile&nbsp;...",
//             "formattedUrl": "https://www.linkedin.com/in/xaxa-smith",
//             "htmlFormattedUrl": "https://www.linkedin.com/in/\u003cb\u003exaxa\u003c/b\u003e-smith",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTalCITcOJ7HZ1mfa6fecr6kWzjH7lL_bwzgSc634JgClyM1dxMn4FlTI",
//                         "width": "200",
//                         "height": "200"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI",
//                         "twitter:card": "summary",
//                         "platform-worker": "https://static-exp1.licdn.com/sc/h/7nirg34a8ey4y2l4rw7xgwxx4",
//                         "al:android:package": "com.linkedin.android",
//                         "locale": "en_US",
//                         "al:ios:url": "https://www.linkedin.com/in/xaxa-smith",
//                         "og:description": "View Xaxa Sheng Smith’s profile on LinkedIn, the world’s largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile on LinkedIn and discover Xaxa’s connections and jobs at similar companies.",
//                         "al:ios:app_store_id": "288429040",
//                         "platform": "https://static-exp1.licdn.com/sc/h/chqeu129ev4l6ac5l3g3l20xi",
//                         "twitter:image": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI",
//                         "profile:last_name": "Sheng Smith",
//                         "twitter:site": "@Linkedin",
//                         "litmsprofilename": "public-profile-frontend",
//                         "profile:first_name": "Xaxa",
//                         "og:type": "profile",
//                         "twitter:title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//                         "al:ios:app_name": "LinkedIn",
//                         "og:title": "Xaxa Sheng Smith - New Analyst - Zeeba Investment Group | LinkedIn",
//                         "pagekey": "public_profile_v3_mobile",
//                         "al:android:url": "https://www.linkedin.com/in/xaxa-smith",
//                         "viewport": "width=device-width, initial-scale=1.0",
//                         "twitter:description": "View Xaxa Sheng Smith’s profile on LinkedIn, the world’s largest professional community. Xaxa has 12 jobs listed on their profile. See the complete profile on LinkedIn and discover Xaxa’s connections and jobs at similar companies.",
//                         "ubba": "https://static-exp1.licdn.com/sc/h/6mgdxeyaxy3187f4nknns79p2",
//                         "og:url": "https://www.linkedin.com/in/xaxa-smith",
//                         "al:android:app_name": "LinkedIn"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://media-exp1.licdn.com/dms/image/C4D03AQFxy1m3OcS92Q/profile-displayphoto-shrink_200_200/0/1633441020246?e=1655337600&v=beta&t=Oi4wEBIVnlifZhhlEXKJbIFk1qS9-nz4X5dPG1rh3sI"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Xaxa | Spotify",
//             "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e | Spotify",
//             "link": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//             "displayLink": "open.spotify.com",
//             "snippet": "Listen to Xaxa on Spotify. Artist · 69 monthly listeners.",
//             "htmlSnippet": "Listen to \u003cb\u003eXaxa\u003c/b\u003e on Spotify. Artist · 69 monthly listeners.",
//             "cacheId": "1MOSviu2bWAJ",
//             "formattedUrl": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//             "htmlFormattedUrl": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT7vizPKWR3qBOa67N4_8kk5xHJNfRylnzLLGqv30xC8MDzDUvu7TYprLo",
//                         "width": "225",
//                         "height": "225"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a",
//                         "og:type": "profile",
//                         "twitter:title": "Xaxa",
//                         "twitter:card": "summary",
//                         "og:site_name": "Spotify",
//                         "al:ios:app_name": "Spotify",
//                         "og:title": "Xaxa",
//                         "al:android:package": "com.spotify.music",
//                         "google": "notranslate",
//                         "al:ios:url": "spotify://artist/0DNvfqzGi3M7X4cyG3VqiB",
//                         "og:description": "Artist · 69 monthly listeners.",
//                         "al:ios:app_store_id": "324684580",
//                         "twitter:image": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a",
//                         "al:android:url": "spotify://artist/0DNvfqzGi3M7X4cyG3VqiB",
//                         "fb:app_id": "174829003346",
//                         "twitter:site": "@spotify",
//                         "viewport": "width=device-width, initial-scale=1",
//                         "twitter:description": "Artist · 69 monthly listeners.",
//                         "og:url": "https://open.spotify.com/artist/0DNvfqzGi3M7X4cyG3VqiB",
//                         "al:android:app_name": "Spotify"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://i.scdn.co/image/ab67616d0000b273fb7684e5e83b637dee36d83a"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Xaxa - Wikipedia",
//             "htmlTitle": "\u003cb\u003eXaxa\u003c/b\u003e - Wikipedia",
//             "link": "https://en.wikipedia.org/wiki/Xaxa",
//             "displayLink": "en.wikipedia.org",
//             "snippet": "Xaxa may refer to: Places[edit]. Xaxa, Tibet, a village in Tibet; Xaxa, Botswana, a village in Botswana; Xaxa, Cape Verde, a village in the municipality São ...",
//             "htmlSnippet": "\u003cb\u003eXaxa\u003c/b\u003e may refer to: Places[edit]. \u003cb\u003eXaxa\u003c/b\u003e, Tibet, a village in Tibet; \u003cb\u003eXaxa\u003c/b\u003e, Botswana, a village in Botswana; \u003cb\u003eXaxa\u003c/b\u003e, Cape Verde, a village in the municipality São&nbsp;...",
//             "cacheId": "LWvcc-_CDFQJ",
//             "formattedUrl": "https://en.wikipedia.org/wiki/Xaxa",
//             "htmlFormattedUrl": "https://en.wikipedia.org/wiki/\u003cb\u003eXaxa\u003c/b\u003e",
//             "pagemap": {
//                 "metatags": [
//                     {
//                         "referrer": "origin",
//                         "og:type": "website",
//                         "og:title": "Xaxa - Wikipedia",
//                         "format-detection": "telephone=no"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Women and Gender in the Study of Tribes in India - Virginius Xaxa ...",
//             "htmlTitle": "Women and Gender in the Study of Tribes in India - Virginius \u003cb\u003eXaxa\u003c/b\u003e ...",
//             "link": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//             "displayLink": "journals.sagepub.com",
//             "snippet": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women's issues the world over.",
//             "htmlSnippet": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women&#39;s issues the world over.",
//             "formattedUrl": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//             "htmlFormattedUrl": "https://journals.sagepub.com/doi/10.1177/097152150401100304",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQeqoJGteVKNtoIXvclnJhEMyE3X6Uu69IONxzsP8AdnEBr-h8vIvDE33s",
//                         "width": "180",
//                         "height": "279"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "dc.publisher": "Sage PublicationsSage CA: Thousand Oaks, CA",
//                         "og:image": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb",
//                         "twitter:card": "summary_large_image",
//                         "og:image:width": "600",
//                         "og:site_name": "SAGE Journals",
//                         "citation_journal_title": "Indian Journal of Gender Studies",
//                         "dc.format": "text/HTML",
//                         "og:description": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women’s issues the world over. The valu...",
//                         "twitter:image": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb",
//                         "dc.type": "research-article",
//                         "dc.source": "http://dx.doi.org/10.1177/097152150401100304",
//                         "dc.creator": "Virginius  Xaxa",
//                         "dc.description": "Concern for a focus on women in tribal studies has been very recent. It emerged out of general interest and concern with women’s issues the world over. The value system governing larger Indian soci...",
//                         "og:type": "article",
//                         "pbcontext": ";journal:journal:ijgb;wgroup:string:SAGE Publication Websites;page:string:Article/Chapter View;ctype:string:Journal Content;subPage:string:Abstract;issue:issue:10.1177/IJGB_11_3;website:website:sage;article:article:10.1177/097152150401100304;requestedJournal:journal:ijgb;pageGroup:string:Publication Pages",
//                         "dc.coverage": "Sage CA: Thousand Oaks, CA",
//                         "og:title": "Women and Gender in the Study of Tribes in India - Virginius Xaxa, 2004",
//                         "og:image:height": "900",
//                         "dc.date": "2016-07-24",
//                         "article:published_time - datetime": "July 24, 2016",
//                         "article:author": "Virginius Xaxa",
//                         "viewport": "width=device-width, initial-scale=1",
//                         "dc.title": "Women and Gender in the Study of Tribes in India:",
//                         "og:locale": "en_US",
//                         "dc.identifier": "10.1177/097152150401100304",
//                         "dc.language": "en",
//                         "og:url": "https://journals.sagepub.com/doi/10.1177/097152150401100304"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://journals.sagepub.com/action/showCoverImage?journalCode=ijgb"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "XAXA nails and more - Google Maps",
//             "htmlTitle": "\u003cb\u003eXAXA\u003c/b\u003e nails and more - Google Maps",
//             "link": "https://www.google.com/maps/?cid=13078536182945203777",
//             "displayLink": "www.google.com",
//             "snippet": "(Translated by Google) Yesterday I had my fifth appointment with XAXA. Unfortunately there was a longer waiting time in the studio.",
//             "htmlSnippet": "(Translated by Google) Yesterday I had my fifth appointment with \u003cb\u003eXAXA\u003c/b\u003e. Unfortunately there was a longer waiting time in the studio.",
//             "cacheId": "u54dtOh68S8J",
//             "formattedUrl": "https://www.google.com/maps/?cid=13078536182945203777",
//             "htmlFormattedUrl": "https://www.google.com/maps/?cid=13078536182945203777",
//             "pagemap": {
//                 "metatags": [
//                     {
//                         "referrer": "origin",
//                         "og:image": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p",
//                         "og:image:width": "256",
//                         "twitter:card": "summary",
//                         "og:site_name": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//                         "viewport": "initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no",
//                         "og:title": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//                         "og:image:height": "256",
//                         "google": "notranslate",
//                         "og:description": "★★★★★ · Nail salon"
//                     }
//                 ],
//                 "place": [
//                     {
//                         "image": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p",
//                         "name": "XAXA nails and more · Sonthofener Str. 18, 87544 Blaichach, Germany",
//                         "description": "★★★★★ · Nail salon"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://lh5.googleusercontent.com/p/AF1QipO6kuuOUN6BiAyXr8S5RVhFz8Ho5wG6tmNQvMjD=w256-h256-k-no-p"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Stream Xaxa by cop | Listen online for free on SoundCloud",
//             "htmlTitle": "Stream \u003cb\u003eXaxa\u003c/b\u003e by cop | Listen online for free on SoundCloud",
//             "link": "https://soundcloud.com/woopheadclrms/vaxa",
//             "displayLink": "soundcloud.com",
//             "snippet": "May 5, 2021 ... Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//             "htmlSnippet": "May 5, 2021 \u003cb\u003e...\u003c/b\u003e Stream \u003cb\u003eXaxa\u003c/b\u003e by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//             "cacheId": "3OmODf8xa5sJ",
//             "formattedUrl": "https://soundcloud.com/woopheadclrms/vaxa",
//             "htmlFormattedUrl": "https://soundcloud.com/woopheadclrms/vaxa",
//             "pagemap": {
//                 "cse_thumbnail": [
//                     {
//                         "src": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRV_QU4_rACCSoGdn7jpGU3SSQkSd_Yxlgl8M3ET7FUwJHG-u9BTpFiBL4",
//                         "width": "225",
//                         "height": "225"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "twitter:audio:source": "https://api-partners.soundcloud.com/twitter/tracks/soundcloud:sounds:1042925479/vmap",
//                         "twitter:app:id:googleplay": "com.soundcloud.android",
//                         "og:image": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg",
//                         "twitter:app:url:iphone": "soundcloud://sounds:1042925479",
//                         "theme-color": "#333",
//                         "og:image:width": "500",
//                         "twitter:card": "player",
//                         "og:site_name": "SoundCloud",
//                         "twitter:url": "https://soundcloud.com/woopheadclrms/vaxa",
//                         "twitter:app:url:ipad": "soundcloud://sounds:1042925479",
//                         "al:android:package": "com.soundcloud.android",
//                         "twitter:app:name:googleplay": "SoundCloud",
//                         "medium": "video",
//                         "twitter:app:id:iphone": "336353151",
//                         "al:ios:url": "soundcloud://sounds:1042925479",
//                         "og:description": "Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//                         "al:ios:app_store_id": "336353151",
//                         "twitter:player": "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1042925479&auto_play=false&show_artwork=true&visual=true&origin=twitter",
//                         "twitter:player:height": "400",
//                         "og:video:type": "application/x-shockwave-flash",
//                         "og:video:height": "98",
//                         "og:type": "music.song",
//                         "twitter:title": "Xaxa",
//                         "al:ios:app_name": "SoundCloud",
//                         "twitter:audio:partner": "SoundCloud",
//                         "og:title": "Xaxa",
//                         "twitter:app:id:ipad": "336353151",
//                         "og:image:height": "500",
//                         "og:video:width": "460",
//                         "twitter:image:src": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg",
//                         "al:android:url": "soundcloud://sounds:1042925479",
//                         "referrer": "origin",
//                         "fb:app_id": "19507961798",
//                         "twitter:app:url:googleplay": "soundcloud://sounds:1042925479",
//                         "twitter:app:name:ipad": "SoundCloud",
//                         "og:video": "https://w.soundcloud.com/player/?url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1042925479&auto_play=false&show_artwork=true&visual=true&color=3b5998&origin=facebook",
//                         "viewport": "width=device-width, initial-scale=1.0, viewport-fit=cover, maximum-scale=1",
//                         "twitter:audio:artist_name": "cop",
//                         "twitter:description": "Stream Xaxa by cop on desktop and mobile. Play over 265 million tracks for free on SoundCloud.",
//                         "al:web:should_fallback": "false",
//                         "og:url": "https://soundcloud.com/woopheadclrms/vaxa",
//                         "twitter:player:width": "435",
//                         "al:android:app_name": "SoundCloud",
//                         "twitter:app:name:iphone": "SoundCloud"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://i1.sndcdn.com/artworks-EczKLQaFnBZVV9E8-daBnLg-t500x500.jpg"
//                     }
//                 ]
//             }
//         },
//         {
//             "kind": "customsearch#result",
//             "title": "Social Exclusion and Adverse Inclusion - Dev Nathan; Virginius Xaxa",
//             "htmlTitle": "Social Exclusion and Adverse Inclusion - Dev Nathan; Virginius \u003cb\u003eXaxa\u003c/b\u003e",
//             "link": "https://global.oup.com/academic/product/social-exclusion-and-adverse-inclusion-9780198078937",
//             "displayLink": "global.oup.com",
//             "snippet": "Dev Nathan and Virginius Xaxa. Case studies on Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura; Examines issues of child mortality, ...",
//             "htmlSnippet": "Dev Nathan and Virginius \u003cb\u003eXaxa\u003c/b\u003e. Case studies on Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura; Examines issues of child mortality,&nbsp;...",
//             "cacheId": "nl0QNuOQUDgJ",
//             "formattedUrl": "https://global.oup.com/.../social-exclusion-and-adverse-inclusion- 9780198078937",
//             "htmlFormattedUrl": "https://global.oup.com/.../social-exclusion-and-adverse-inclusion- 9780198078937",
//             "pagemap": {
//                 "offer": [
//                     {
//                         "price": "50.00"
//                     }
//                 ],
//                 "product": [
//                     {
//                         "image": "https://global.oup.com/academic/covers/pdp/9780198078937",
//                         "name": "Social Exclusion and Adverse Inclusion"
//                     }
//                 ],
//                 "metatags": [
//                     {
//                         "og:image": "https://global.oup.com/academic/covers/pop-up/9780198078937",
//                         "twitter:card": "product",
//                         "wt.si_n": "Purchase1",
//                         "language": "en_GB",
//                         "wt.sp": "GAB_Marketing",
//                         "og:description": "This volume focuses on themes of exclusion and inclusion vis-a-vis Adivasis in India. It locates issues of development and impediments to their growth within a larger regional, national, and even global, context. The discussion centres on the states of Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura, which have significant Adivasi populations.",
//                         "twitter:creator": "@OUPAcademic",
//                         "wt.z_cc": "us",
//                         "twitter:image": "https://global.oup.com/academic/covers/pop-up/9780198078937",
//                         "twitter:site": "@OUPAcademic",
//                         "wt.z_lang": "en",
//                         "wt.pn_sku": "9780198078937",
//                         "wt.tx_u": "1",
//                         "wt.z_tab": "overview",
//                         "og:type": "book",
//                         "twitter:title": "Social Exclusion and Adverse Inclusion",
//                         "og:title": "Social Exclusion and Adverse Inclusion",
//                         "wt.cg_n": "Product Detail Page",
//                         "og:updated_time": "Sun Apr 10 04:46:36 UTC 2022",
//                         "wt.tx_e": "v",
//                         "viewport": "initial-scale=1.0",
//                         "wt.si_x": "1",
//                         "twitter:description": "This volume focuses on themes of exclusion and inclusion vis-a-vis Adivasis in India. It locates issues of development and impediments to their growth within a larger regional, national, and even global, context. The discussion centres on the states of Jharkhand, Andhra Pradesh, Orissa, Meghalaya, Nagaland, and Tripura, which have significant Adivasi populations.",
//                         "og:url": "https://global.oup.com/academic/product/social-exclusion-and-adverse-inclusion-9780198078937",
//                         "format-detection": "telephone=no"
//                     }
//                 ],
//                 "cse_image": [
//                     {
//                         "src": "https://global.oup.com/academic/covers/pop-up/9780198078937"
//                     }
//                 ],
//                 "hproduct": [
//                     {
//                         "fn": "Social Exclusion and Adverse Inclusion",
//                         "photo": "https://global.oup.com/academic/covers/pdp/9780198078937",
//                         "currency": "USD",
//                         "currency_iso4217": "840"
//                     }
//                 ]
//             }
//         }
//     ]
// }


// console.log(JSON.parse(response.toString()));

// new Object().toString()
// // "[object Object]"

// JSON.parse(new Object())
// // Uncaught SyntaxError: Unexpected token o in JSON at position 1

// JSON.parse("[object Object]")
// Uncaught SyntaxError: Unexpected token o in JSON at position 1

// const actions = {
//     ADD_TODO_ITEM: 'ADD_TODO_ITEM',
//     REMOVE_TODO_ITEM: 'REMOVE_TODO_ITEM',
//     TOGGLE_COMPLETED: 'TOGGLE_COMPLETED',
// }

// const ADD_TODO_ITEM = 'ADD_TODO_ITEM';
// const REMOVE_TODO_ITEM = 'REMOVE_TODO_ITEM';
// const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';


// const addTodoItem = (data) => {
//     return {
//         type: 'ADD_TODO_ITEM',
//         payload: data,
//     }
// }

// const REMOVETODOITEM = (data) => {
//     return {
//         type: 'REMOVE_TODO_ITEM',
//         payload: data,
//     }
// }

// const TOGGLECOMPLETED = (data) => {
//     return {
//         type: 'TOGGLE_COMPLETED',
//         payload: data,
//     }
// }


// const reducer = (state,action)=>{
//     switch(action.type){
//        case ADD_TODO_ITEM : return{
//            ...state,
//            noOflist: action.payload,
//        }
//        default: return state;
//     }
// }

// const ctc = createContext({});

// const ctcProvider = ()=>{
//     const initialstate = {
//         noOfSomething: ''
//     }
//     const [state, dispatch] = useReducer(reducer, initialstate);
// const value = {
//     initialstate: state.payload
// }


//     return <ctc.Provider value={value}>
//         {props.children}
//     </ctc.Provider>
// }


// function number(a,b){
//     if(a===100 || b===100 || a+b===100){
//         return true;
//     }else{
//         return false
//     }
// }

// console.log(number(100,20))

// import { actions } from "./actionType";

// export const initialState = {
//     counter: 0
// }
// export const reducer = (state=initialState, action)=>{
//    switch(action.type){
//        case actions.Increament : return {
//            state: state.counter + 1
//        }
//        case actions.Decreament : return {
//            state : state.counter -1
//        }
//        default: return state
//    }
// }
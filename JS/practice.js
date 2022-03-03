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
        



const URL = "https://jsonplaceholder.typicode.com/postssss";

fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then(response =>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("Something went wrong!!!")
        }
    })
    .then(data =>{
        console.log(data);
    })
    .catch(error =>{
        console.log("inside catch");
        console.log(error);
    })

    // async await

// fetch(URL)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data);
//     })
console.log("script start");
const URL = "https://jsonplaceholder.typicode.com/posts";

// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong")
//     }
//     const data = await response.json();
//     return data;
// }


const getPosts = async() =>{
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Something went wrong")
    }
    const data = await response.json();
    return data;
}

// const myData = getPosts();
// console.log(myData);

getPosts()
    .then((myData) => {
        console.log(myData);
    })
    .catch(error =>{
        console.log("inside catch")
        console.log(error);
    })


console.log("script end ");
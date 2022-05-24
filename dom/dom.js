// ###############Dom################
// const mainheading =document.querySelector('#main-heading');
// console.log(mainheading.textContent)





// mainheading.textContent = 'this is the end';
// console.log(mainheading.textContent)


// const mainheading = document.querySelector('div.headline h2');
// console.log(mainheading);
// mainheading.style.backgroundColor = 'blue';
// function myFunction(power){
//     return function(number){
//         return number**power
//     }
// }
// const ans = myFunction(2);
// const square = ans(3);
// console.log(square);

// function func(){
//     return function(){
// console.log('hi you called me')
//     }
// }
// const reT = func();
// reT();





// ###############Dom################
// const mainheading =document.querySelector('#main-heading');
// console.log(mainheading.textContent)

// mainheading.textContent = 'this is the end';
// console.log(mainheading.textContent)


// const mainheading = document.querySelector('div.headline h2');
// console.log(mainheading);
// mainheading.style.backgroundColor = 'blue';

// const link = document.querySelector('a');
// link.setAttribute("href", "https://google.com");
// console.log(link.getAttribute('href').slice(1))



// const link = document.querySelector('.form-todo input');
// console.log(link.getAttribute('type'))

// const navItems = document.getElementsByTagName("a");
// for(let items of navItems){
//     console.log(items)
// const navItem =navItems[i];
//     items.style.backgroundColor = '#fff';
//     items.style.color = 'green'
// }
// const headline = document.querySelector('.headline');
// console.log(headline.innerHTML);
// headline.innerHTML = ''



// const rootNode = document.getRootNode();
// const htmlelementNode =rootNode.childNodes[0];
// console.log(htmlelementNode.childNodes) NodeList(3) [head, text, body]
// const headElementNode = htmlelementNode.childNodes[0];
// const textElementNode  = htmlelementNode.childNodes[1];
// const bodyElementNode  = htmlelementNode.childNodes[2];
// console.log(bodyElementNode );
// console.log(headElementNode );
// console.log(textElementNode );
// console.log(headElementNode.nextElementSibling)


// const tagSelector = document.querySelector('h1');
// console.log(tagSelector);
// const parentDiv = tagSelector.parentNode;
// console.log(parentDiv)

// parentDiv.style.backgroundColor = '#333'; 

// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');


// const newtodoItem = document.createElement('li');
// const newtodoItemText = document.createTextNode('why not me');
// newtodoItem.append(newtodoItemText);
// const todo1 = document.querySelector('.todo-list');
// todo1.append(newtodoItem);
// console.log(newtodoItem);


// const todo1 = document.querySelector('.todo-list li')
// todo1.remove();


// const newtodoItem = document.createElement('li');
// newtodoItem.textContent = "why not me";
// const todo1 = document.querySelector('.todo-list');
// todo1.before(newtodoItem) ;
// const btnHeadline = document.querySelector('.btn-headline');
// function rawat(){
// console.log('yu huuuuu')
// }
// btnHeadline.addEventListener('click', rawat)


// const allButtons = document.querySelectorAll('button');
// for(let button of allButtons){

//     button.addEventListener('click', function(){
//         console.log(this.textContent)
//     })}
//     allButtons.forEach((button){
//         button.addEventListener('click', function(){
//             console.log(this.textContent)
//     });
// });
// const allButtons = document.querySelectorAll('button');
// for(let button of allButtons){

//     button.addEventListener('click', (a)=>{
//         console.log(a.currentTarget)
//     })}
// const allButtons = document.querySelectorAll('.my-buttons button');
// for(let button of allButtons){

//         button.addEventListener('click', (e)=>{
//             e.target.style.backgroundColor = 'yellow';
//             e.target.style.color = 'grey';
//         })}

// const mainButton = document.querySelector('button');
// const bodyA = document.body;
// const currentColor = document.querySelector('.currentColor');
// function randomColorGenerator(){
//     const red = Math.floor(Math.random()*256);
//          const green = Math.floor(Math.random()*256);
//          const blue = Math.floor(Math.random()*256);
//          const randomColor = `rgb(${red},${green},${blue})`
//          return randomColor;
// }
// mainButton.addEventListener('click',()=>{
//     const randomColor = randomColorGenerator();
//       bodyA.style.backgroundColor = randomColor
//   currentColor.textContent = randomColor;

// })

// mainButton.addEventListener('click', ()=>{
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const changeColor = `rgb(${red},${green},${blue})`
//   mainButton.style.color = changeColor
//   bodyA.style.backgroundColor = changeColor
//   currentColor.textContent = changeColor;
// })
// const one = document.body;
// const mainButton = document.querySelector('.btn-headline');

// mainButton.addEventListener('mouseover',()=>{
//     console.log("man");
// })
// for(let i=0; i<10000; i++){
//     console.log('i')
// }
// console.log('hiii')
// console.log('hello world');

// setTimeout(()=>{
//     console.log('hello world');
// },1000);
// console.log('rawat');




// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');
// setTimeout(()=>{
//     heading1.textContent = 'heading1';
//     heading1.style.color = 'violet';

//     setTimeout(()=>{
//         heading2.textContent = 'heading2';
//     heading2.style.color = 'purple';
//     setTimeout(()=>{
//         heading3.textContent = 'heading3';
//     heading3.style.color = 'red';
//     setTimeout(()=>{
//         heading4.textContent = 'heading4';
//     heading4.style.color = 'pink';
//     setTimeout(()=>{
//         heading5.textContent = 'heading5';
//     heading5.style.color = 'green';
//     setTimeout(()=>{
//         heading6.textContent = 'heading6';
//     heading6.style.color = 'blue';
//     setTimeout(()=>{
//         heading7.textContent = 'heading7';
//     heading7.style.color = 'brown';

//     },1000);
//     },3000);
//     },2000);
//     },1000);

//     },2000);
//     },2000);

// },1000) ;

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');
// function changeText(element, text, color, time, onSuccessCallback, onfailiureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;

//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }
//         }else{
//             if(onfailiureCallback){
//                 onfailiureCallback();
//             }
//         }
//     },time)
// };
// changeText(heading1, 'one', 'green', 1000,()=>{
//     changeText(heading2, 'two', 'purple', 2000,()=>{
//         changeText(heading3, 'three', 'red', 3000,()=>{

//         },()=>{
//             console.log('h3 does not exist')
//         })
//     },()=>{
//         console.log('h2 does not exist')
//     })
// },()=>{
//     console.log('h1 does not exist')
// })

// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');

// function changeText(element,text,color,time,onSuccessCallback,onfailiureCallback){
//     setInterval(()=>{
//         if(element){
//             element.textContent = text;
//         element.style.color = color;
//         if(onSuccessCallback){
//             onSuccessCallback();
//         }
//         }else{
//             if(onfailiureCallback){
//                 onfailiureCallback();
//             }
//         }

//     },time)
// }
// changeText(heading1,'one','yellow',1000,()=>{
//     changeText(heading2,'two','purple',2000,()=>{

//     },()=>{
//         console.log('your element dose not do shit')
//     })
// },()=>{
//     console.log('your element dose not do shit')
// })

// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// const friedRicePromise =new Promise((resolve,reject)=>{
// if(bucket.includes('vegetables') && bucket.includes("salt") && bucket.includes('rice')){
//     resolve('fried rice')
// }else{
//     reject('could not do it')
// }
// });

// friedRicePromise.then((myFriedRice)=>{
// console.log('lets eat it', myFriedRice);
// },((error)=>{
// console.log(error)
// }))

// function myPromise(){
//     return new Promise((resolve,reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         },2000)
//     })
// }
// myPromise().then(()=>{
//     console.log('resolved')
// }).catch(()=>{
//     console.log('rejected')
// })

// function newP(){
//    return new Promise((resolve,reject)=>{
// resolve('foo')
// });
// };
// newP().then((value)=>{
// console.log(value);
// return value+= "bar";
// }).then((value)=>{
// console.log(value)
// })



// const heading1 = document.querySelector('.heading1');
// const heading2 = document.querySelector('.heading2');
// const heading3 = document.querySelector('.heading3');
// const heading4 = document.querySelector('.heading4');
// const heading5 = document.querySelector('.heading5');
// const heading6 = document.querySelector('.heading6');
// const heading7 = document.querySelector('.heading7');

// function changeText(element,text,color,time){
//     return new Promise((resolve,reject)=>{
//         setInterval(()=>{
//             if(element){
//             element.textContent = text;
//             element.style.color = color;
//             resolve();
//             }else{
//                 reject();
//                 }
//             },time);
//     })


//     };

// changeText(heading1,"one","yellow",1000)
// .then(()=>changeText(heading2,"two","white",1000))
// .then(()=>changeText(heading3,"three","blue",1000))


// const link = document.getElementsByTagName('a');
// console.log(link)


// const rootNode = document.getRootNode();


// const rootElement = document.getRootNode();
// const rootE =rootElement.childNodes[1];

// const childNodes = rootE.childNodes;

// console.log(childNodes);
// const headNode = childNodes[0];
// console.log(headNode.nextElementSibling);

// const heaing = document.querySelector('h1');
// console.log(heaing.parentNode);
// const parentDiv = heaing.parentNode.parentNode;
// parentDiv.style.background = 'red';
// parentDiv.style.color = 'blue';


// const li = document.querySelector('.todo-list');
// console.log(li.getBoundingClientRect())

// console.log(li);


// const btn = document.querySelectorAll('button');
// for(let b of btn){
//     b.addEventListener('click', function(){
//         console.log(this.textContent)
//     })
// }

// btn.forEach((a, b) => {
//     a.addEventListener('click', function (e) {

//     })
// })




















// ######## program to swap two numbers##########



// let a = prompt('enter first number');
// let b = prompt('enter second number');
// let c;
// c=a;
// a=b;
// b=c;

// console.log(`the value of firstnum is ${a}`);
// console.log(`the value of secondnum is ${b}`)

// let a = prompt('enter first number');
// let b = prompt('enter second number');
// [a,b]=[b,a]

// console.log(`the value of firstnum is ${a}`);
// console.log(`the value of secondnum is ${b}`)


// let a = parseInt(prompt('enter first number'));
// let b = parseInt(prompt('enter second number'));

// a = a+b;
// b= a-b;
// a= a-b;

// console.log(`the value of firstnum is ${a}`);
// console.log(`the value of secondnum is ${b}`)

// ######## program to swap two numbers##########

// ##########Fibonacci Sequence##############😀





// let x = 0;
// let y = 1;
// let fn = x+y;

// console.log(x);

// while(fn<100){
//     console.log(fn);
//     x=y;
//     y=fn;
//     fn = x+y;
// }




// function fb(a){
//   let fibArr = [0,1];
//   for(i=2; i<a ; i++){
//     fibArr.push(fibArr[i-2] + fibArr[i-1]);
//   }  
//   return fibArr;
// }

// console.log(fb(12));




// let a = 0;
// let b = 1;
// for (i = 0; i <10; i++) {

//     let c = a + b;
//     console.log(c)
//     a = b;
//     b = c;

// }


// ##########Fibonacci Sequence##############

// 2


// function yo(a){
//     let cha = a;
//     if(cha==='a'|| cha==='e'|| cha==='i'||cha==='o'||cha==='u'){
//          console.log('hii')
//     }else{
//         console.log('okkk')
//     }
// }


// yo('u');

// 2


//########## function currying ########


// const getSum = (a) => (b) => (c) => (d) => (e) => console.log(a + b + c + d + e)




// const getSum = (a) => {
//     return (b) => {
//         return (c) => {
//             return (d) => {
//                 return (e) => {
//                     console.log(a + b + c + d + e)
//                 }
//             }
//         }
//     }
// }



// getSum(500)(4)(3)(2)(1);



//########## function currying ########


//########### replace all ###########

// let str = 'kasish rawat is the beat rawat';
// console.log(str.replaceAll('rawat', 'God'));
// console.log(str);


//########### replace all ###########


//#######programme to ompare two array are eqal or not########

// let array1 = [1,2,3,4,5,6];
// let array2 = [6,1,3,4,5,2];

// const is_same = array1.length === array2.length && array1.every((curE)=>{
//     if(array2.indexOf(curE)>-1){
//         // console.log(array2.indexOf((curE)));

//         return curE = array2[array2.indexOf((curE))]
//     }
// })
// console.log(is_same);


//#######programme to ompare two array are eqal or not########



//  ####programme to remove duplicate in array ##########

// let array1 = [1,2,3,4,5,6,2,4,2,3,4,2,3,4];

// const newN = [...new Set(array1)]
// console.log(newN)


//  ####programme to remove duplicate in array ##########

//  ####programme to reverse string in array ##########


// const reverseString = (string) => {
//     let newStr = '';
//     for (let i = string.length -1 ; i >= 0;  i--) {
//         newStr += string[i];
//     }
//     console.log(newStr);
// }

// reverseString('kittu loves everyone')


// const reversString = (string) => {
//   let splitString = string.split('').reverse().join('');
//  return splitString;
// }

// console.log(reversString('kittu loves everyone'));



// const reverseL = (a)=>{
//     let str = a.split('').reverse().join('');
//      return str;
// }

// console.log(reverseL('i am kittu'))



// const reverseL = (a)=>{
//     let str = a.toString();
//     let newStr = str.split('').reverse().join('');
//      return +newStr;
// }

// console.log(reverseL(7618452940))





//  ####programme to reverse string in array ##########



//########   Programmer to find prime number ##########

// const no = 83;


// for(i=2;  i < no ; i++){
//        if(no%2===0){
//            console.log('given num is not a prime no')
//        }
//        else if(no%i===0){
//         console.log('given num is not a prime no')
//        }
//        else{
//            console.log('given no is a prime no')
//        }
// }


// function isPrime(num){
//   for (i=2; i*i<= num; i++){
//     if(num % i ===0){
//       return false
//     }

//   }
//   return num>1
// }
// console.log(isPrime(4))
// function isPrime(num) {
//     for ( i = 2; i*i <= num; i++)
//         if (num % i === 0)
//           return false; 
//     return num > 1;
// }
// console.log(isPrime(5))
// console.log(isPrime(4))
//  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.


// function isPrime(a) {
//     for (i = 2; i * i <= a; i++)
//         if (a % i === 0)
//             return false;
//     return a > 1;
// }

// console.log(isPrime(17));


//########   Programmer to find prime number ##########

// const f = (s) => {
//     let num = 1;
//     for (i = s; i >= 1; i--) {
//         num = num * i;

//     }
//     return (`the factorial of ${s} is ${num} `);
// }

// console.log(f(5));




//########### union of two arrays###########


// const num1 = [4, 5, 8];
// const num2 = [1, 2, 3, 4, 5, 8];


// const getUnion = () => {
//     const num = [...num1, ...num2];
//     const un = [...new Set(num)];
//     console.log(un.sort((a,b)=>b-a));
// }

// getUnion();

//########### union of two arrays###########


// ###### intersection of two arrays ###########

// let i = 1;
// function  x(){
//     setTimeout(function(){
//         console.log(i);
//     },1000);

// }

// x();



// ###### intersection of two arrays ###########









//############# javascript execises###########

// ##### average salary ##########
// const a = people.reduce((b,c)=>{
//        return b += +c.salary;

// },0)/people.length;
// console.log(a)
// ##### average salary ##########


//  ##### age less than 30 #######

// console.log(people.filter(p => new Date().getFullYear() - new Date(p.DOB).getFullYear() < 30))

//  ##### age less than 30 #######



// list of people fullName###########
// for(let p of people){
//     console.log(p.firstName + ' ' +p.lastName);

// }

// const yo = people.map((s)=> `${s.firstName} ${s.lastName}`)

// const yo = people.map((a)=> ({...a, fullName: `${a.firstName} ${a.lastName}`}))
// list of people fullName###########



//  age of peole sort############

// const yo = people.sort((a,b)=> new Date(a.DOB).getFullYear() - new Date(b.DOB).getFullYear());

//  age of peole sort############

// const people = [
//     { firstName: 'Sam', lastName: 'Hughes', DOB: '07/07/1978', department: 'Development', salary: '45000' },
//     { firstName: 'Terri', lastName: 'Bishop', DOB: '02/04/1989', department: 'Development', salary: '35000' },
//     { firstName: 'Jar', lastName: 'Burke', DOB: '11/01/1985', department: 'Marketing', salary: '38000' },
//     { firstName: 'Julio', lastName: 'Miller', DOB: '12/07/1991', department: 'Sales', salary: '40000' },
//     { firstName: 'Chester', lastName: 'Flores', DOB: '03/15/1988', department: 'Development', salary: '41000' },
//     { firstName: 'Madison', lastName: 'Marshall', DOB: '09/22/1980', department: 'Sales', salary: '32000' },
//     { firstName: 'Ava', lastName: 'Pena', DOB: '11/02/1986', department: 'Development', salary: '38000' },
//     { firstName: 'Gabriella', lastName: 'Steward', DOB: '08/26/1994', department: 'Marketing', salary: '46000' },
//     { firstName: 'Charles', lastName: 'Campbell', DOB: '09/04/1977', department: 'Sales', salary: '42000' },
//     { firstName: 'Tiffany', lastName: 'Lambert', DOB: '05/11/1990', department: 'Development', salary: '34000' },
//     { firstName: 'Antonio', lastName: 'Gonzalez', DOB: '03/24/1985', department: 'Office Management', salary: '49000' },
//     { firstName: 'Aaron', lastName: 'Garrett', DOB: '09/04/1985', department: 'Development', salary: '39000' },
// ];




// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.



// const a = orders.filter((a) => a.customerId === '234' && !a.delivered


// 1) Get a list of the orders for the customer with the ID 234 that have not been delivered.


// 2) Create a new property on each order with the total price of items ordered.

// const a = orders.map((a)=> ({...a, totalPrice: a.items.reduce((a,b)=> a += b.price ,0)}) )


// 2) Create a new property on each order with the total price of items ordered.



// 3) Have all the orders been delivered?


// const a = orders.every((a)=> a.delivered);


// 3) Have all the orders been delivered?



// const orders = [
//     {
//         orderId: '123', customerId: '123', deliveryDate: '01-01-2020', delivered: true, items: [
//             { productId: '123', price: 55 },
//             { productId: '234', price: 30 },
//         ]
//     },
//     {
//         orderId: '234', customerId: '234', deliveryDate: '01-02-2020', delivered: false, items: [
//             { productId: '234', price: 30 },
//         ]
//     },
//     {
//         orderId: '345', customerId: '234', deliveryDate: '05-01-2020', delivered: true, items: [
//             { productId: '567', price: 30 },
//             { productId: '678', price: 80 },
//         ]
//     },
//     {
//         orderId: '456', customerId: '345', deliveryDate: '12-01-2020', delivered: true, items: [
//             { productId: '789', price: 12 },
//             { productId: '890', price: 90 },
//         ]
//     },
//     {
//         orderId: '578', customerId: '456', deliveryDate: '12-01-2020', delivered: true, items: [
//             { productId: '901', price: 43 },
//             { productId: '123', price: 55 },
//         ]
//     },
// ];


// 1) What is Madison Marshall's user id?


// const a = users.filter((a)=> (a.firstName==='Madison' && a.lastName ==='Marshall'))

// 1) What is Madison Marshall's user id?



// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)

// const a = comments.find((a)=> a.text)


// 2) Who wrote the first comment (assuming the first comment is in position 0 of the comments array)



//  4) Add the user's first and last name to each comment in the comments array

// const a = comments.map((comment)=> {
//     const {firstName,lastName} = users.find((user)=> user.id === comment.userId );
//     return {...comment, firstName, lastName}

// })

// console.log(a);


//  4) Add the user's first and last name to each comment in the comments array

// const users = [
//     { id: '88f24bea-3825-4237-a0d1-efb6b92d37a4', firstName: 'Sam', lastName: 'Hughes' },
//     { id: '2a35032d-e02b-4508-b3b5-6393aff75a53', firstName: 'Terri', lastName: 'Bishop' },
//     { id: '7f053852-7440-4e44-838c-ddac24611050', firstName: 'Jar', lastName: 'Burke' },
//     { id: 'd456e3af-596a-4224-b1dc-dd990a34c9cf', firstName: 'Julio', lastName: 'Miller' },
//     { id: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', firstName: 'Chester', lastName: 'Flores' },
//     { id: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', firstName: 'Madison', lastName: 'Marshall' },
//     { id: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', firstName: 'Ava', lastName: 'Pena' },
//     { id: '7f0ce45a-bdca-4067-968b-d908e79276ce', firstName: 'Gabriella', lastName: 'Steward' },
//     { id: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', firstName: 'Charles', lastName: 'Campbell' },
//     { id: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', firstName: 'Madison', lastName: 'Lambert' },
// ];

// const comments = [
//     { userId: '88f24bea-3825-4237-a0d1-efb6b92d37a4', text: 'Great Job!' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'Well done, I think I understand now!' },
//     { userId: 'e789565f-fa5a-4d5e-8f6c-dd126cf995be', text: 'How do you do that? 😲' },
//     { userId: '7f053852-7440-4e44-838c-ddac24611050', text: 'OK great thanks' },
//     { userId: 'b4a306cb-8b95-4f85-b9f8-434dbe010985', text: 'Cool, thanks!' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Nice one 😉' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Got it.' },
//     { userId: '9e525c2d-6fcd-4d88-9ac4-a44eaf3a43e6', text: 'Thanks!' },
//     { userId: '58a1e37b-4b15-47c1-b95b-11fe016f7b64', text: 'Cool 😀' },
//     { userId: '6ee904be-e3b0-41c9-b7a2-5a0233c38e4c', text: 'Great stuff!' },
// ];


// const c = users.filter((user)=> !comments.find((comment)=> comment.userId === user.id))


// console.log(c)





// *
//  * Exercise 02
//  * 
//  * Find out how many users have an IP address in a Class A network

// const a = users.filter((a)=> a.ip_address.split('.')[0] < 127)


// users.filter((a) => parseInt(a.ip_address) > 0 && parseInt(a.ip_address) < 128);


// const a = users.find((a)=> a.ip_address.split('.')[0] > 127)



// *
//  * Exercise 02
//  * 
//  * Find out how many users have an IP address in a Class A network



//  * Find the position in the array of the first  user object that has a Class B IP address




//  * Find the position in the array of the first  user object that has a Class B IP address

// const users = [{
//     id: "e0aafb31-8ac6-48d4-99ee-12af8ddcbdae",
//     email: "tcasaletto0@soundcloud.com",
//     ip_address: "53.215.156.73"
// }, {
//     id: "a7b0221d-5228-4992-a964-b5f3e3d7a022",
//     email: "nmoffett1@paginegialle.it",
//     ip_address: "34.81.219.4"
// }, {
//     id: "1019b52c-db9d-45a2-975f-404455925a6a",
//     email: "rcrampin2@yale.edu",
//     ip_address: "65.181.114.151"
// }, {
//     id: "e8637c3b-645d-4742-a463-d2006742606f",
//     email: "ddreinan3@smugmug.com",
//     ip_address: "136.171.217.116"
// }, {
//     id: "a20803f2-c372-4f39-97b1-d8e948151c8c",
//     email: "gdorkin4@taobao.com",
//     ip_address: "220.228.4.97"
// }, {
//     id: "63f8e789-009d-4e7b-ad6b-cc8c8a1d1248",
//     email: "vhucquart5@typepad.com",
//     ip_address: "101.212.0.49"
// }, {
//     id: "74120248-03b5-4888-84c0-d1a459c6273b",
//     email: "vsircombe6@marriott.com",
//     ip_address: "28.180.205.167"
// }, {
//     id: "412a0669-7171-48b4-95eb-e898993ec1dc",
//     email: "kdesouza7@t.co",
//     ip_address: "61.44.195.62"
// }, {
//     id: "6cd04ecc-8316-4542-9faa-b8438e82b4ad",
//     email: "sbehnke8@booking.com",
//     ip_address: "1.176.238.27"
// }, {
//     id: "cfdf5009-84d3-4599-88c0-048c4fcae2ed",
//     email: "clindsell9@nymag.com",
//     ip_address: "44.37.119.76"
// }];


// const a =users.fill('deleted')

// console.log(a)


// var num =15;
// var newNum = num++;
// console.log(2=='2');
// console.log(newNum);

// var _ = require('lodash'); 
// let obj1 = { name: 'kashish',
// age: 12,
// address: {
//     village: 'masi',
//     distt: 'Almora'
// },
// add: function(a,c){console.log(a,c)},
// date: new Date()

// }

// let obj2 = JSON.parse(JSON.stringify(obj1));


// let obj2 = _.cloneDeep(obj1)
// obj1.email= 'kshishtrawat308@gmail.com'
// obj1.name = 'rawat';
// obj1.address.village = 'Ranikhet'
// obj1.address.love = 'Ranikhet'
// console.log(obj1);
// console.log(obj2);


// ok = 'okk';

// console.log(ok);

// var ok;

// {var x =5 };

// console.log(x)


// function ok(a,b,c,e,f,g,h,i){
// console.log(a,b,c,e,f,g,h,i)
// }


// let four  = [1,23,32,33,3232,32323,32,4,5,6,1,2,3];
// ok(...four)

// function* genFunc(){
//     yield 3;
//     yield 4;
// }
// console.log(genFunc().next());
// console.log(genFunc().next());


// function func(){
//     for(i=0; i<3;i++){
//         setTimeout(()=>{
//        console.log(i)
//         },2000)
//     }
// }
// func();
// let a = 5;
// let x = ++a;
// console.log(a)


// let str = '13km';
// console.log(str.slice(0,2));



// const arr = [1,2,3,4,5,6];

// console.log(arr.splice(1,2,'ok'));
// console.log(arr);
// function userDetails(username) {
//     if (username) {
//       console.log(salary); // undefined due to hoisting
//       console.log(age); // ReferenceError: Cannot access 'age' before initialization
//       let age = 30;
//       var salary = 10000;
//     }
//     console.log(salary); //10000 (accessible to due function scope)
//     console.log(age); //error: age is not defined(due to block scope)
//   }
//   userDetails('ok');
// salary =1000;
// age =20;
// console.log(salary);
// console.log(age);
// let age;
// var salary;


// let uri = "employeeDetails?name=john&occupation=manager";
// let encoded_uri = encodeURI(uri);
// let decoded_uri = decodeURI(encoded_uri);

// console.log(encoded_uri);
// console.log(decoded_uri);



// let user = {
//     name: 'kashish',
//     age: 12
// }

// function sum(){

//     return arguments;
// }

// console.log(sum(1,9,3));


// let date = new Date();
// let dd = String(date.getDate()).padStart(2,'0');
// let mm = String(date.getMonth()).padStart(2,'0');
// let yy = date.getFullYear();

// console.log(dd+'/'+mm+'/'+yy)


// let b =0;
// let c =6;
// let a = b || c;
// console.log(a)

// let str = (a,b,c,d,e,s,v)=>{
//    return 
// }

// console.log(str.length)


// for(i=0; i<10 ; i++){
//     if(i===5){
//         break;
//     }
//     console.log(i)
// }


// const obj = {
//     name: 'rawat',
//     age: 12,
//     about: ()=>{
//         console.log(ok)
//     }
// }

// const obj2 = Object.create(obj);
// console.log(obj2.name)

// for(var i =0; i < 4; i++ ){
//     setTimeout(()=> console.log(i))
// }
// for(
//     let i =0; i < 4; i++ ){
//     setTimeout(()=> console.log(i))
// }


// console.log('%c Color of the text', 'color: blue; font-size: x-large; background: red');


// const array = [1,2,3,4,5,6];
// array.length = 2;
// console.log(array)

// var obj = new Object();

// obj.name = 'kashish'
// console.log(obj)



// const o = Object.assign({age: 12},obj);

// console.log(o)


// useEffect(() => {
//   async function fetchdata(){
//       const response = await axios.get();

//   }

//   return () => {
//     second
//   }
// }, [third])



// useEffect(() => {
//   async function fetchdata(){
//       const response = await axios.get();

//   }

//   return () => {
//     second
//   }
// }, [third])
// function sumOfThree(...elem){
//  return new Promise((resolve, reject)=>{
//    if(elem.length > 3){
//      reject('only 3 elements are allowed')
//    }else{
//      let sumof = 0;
//      let i = 0;
//      while(i< elem.length){
//        sumof += elem[i];
//        i++;
//      }
//      resolve('sum is' + sumof)
//    }
//  })
// }
// sumOfThree(1,2,3,4).then((a)=> console.log(a)).catch((b)=>console.log(b))

// let x = {} ,y ={name: 'rawat'} ,z ={name: 'negi'};
// x[y] = {name: 'vivek'};
// x[z]={name: 'akki'};

// console.log(x[y])

// const x = [1,2,3]

// function func(num){
//  return x.push(num)
// }

// console.log(func(4));
// console.log(x)


// const fonc = (a)=>{
//   const arr= a.split('').reverse().join('')

//   if(a !== arr){
//     console.log('its not  palindrome')
//   }else{
//     console.log('its palindrome')
//   }

// }

// fonc('rawat');





// function checkPalindrome(string) {


//   const arrayValues = string.split('');


//   const reverseArrayValues = arrayValues.reverse();


//   const reverseString = reverseArrayValues.join('');

//   if(string == reverseString) {
//       console.log('It is a palindrome');
//   }
//   else {
//       console.log('It is not a palindrome');
//   }
// }


// const string = prompt('Enter a string: ');

// checkPalindrome(string);

// var x =1 ;
// function foo(){
//   var x =3;
// }
// foo();
// console.log(x);

// function bar(){
//   x=4;
// }
// bar();
// console.log(x);









// const arr = [{name : "Apple",count:5},{name :"Mango",count:5},{name :"Mango",count:1}] 


// returns [{name:"Mango",count:6},{name:"Apple",count:5}]
// const newArr = arr.filter((a)=> {

//   if(a.key === 'Mango'){
//     a.count.reducer((curE, el)=> curE +=el)
//   }

// } )

// console.log(newArr)



// emocleW ot siht tpircsavaJ !ediuG

// const arr = [{name : "Apple",count:5},{name :"Mango",count:5},{name :"Mango",count:1}] 

// const neArr =arr.reduce((a,b)=>
// if(b.name === 'Mango'){
//     a += b;
// }
// )

// console.log(neArr)

// function square(n){
//     let result = 0;
//     for(let i=1; i<=n; i++){
//         for(let j=1; j<=n; j++){
//             result += 1
//         }
//     }
//     return result
// }
// console.log(square(2))
// console.log(square(3))
// console.log(square(4))
// console.log(square(5))
// console.log(square(6))

// function fib(n,prev=[]){
//     if(prev[n] != null){
//           return prev[n]
//     }
//     let result;
//     if (n <=2) {
//         result = 1
//     }else{
//         result = fib(n-1,prev) + fib(n-2,prev)
//     }
//     prev[n] = result;
//     return result;
// }

// console.log(fib(50))

// const arr = [
//     {store_id: 1, price: 0.55},
//     {store_id: 1, price: 0.25},
//     {store_id: 2, price: 0.2},
//     {store_id: 2, price: 0.25}
//   ]

//   const res = Object.values(arr.reduce((acc,item) => {
//     const { store_id } = item;
//     const prev = acc[store_id];
//     acc[store_id] = prev ? { ...prev, price: prev.price+item.price } : {...item};
//     return acc;
//   }, {}));

//   console.log(res);
















// function swapNo(a,b){
//  let arr = [a,b]
//   [a,b] = [b,a]
//   return arr;

// }

// console.log(swapNo(23,12))



// let a = 2;
// let b = 3;

// a= a+b;
// b = a-b;
// a = a-b;



// console.log(a,b)







// function reverse(str){
//    let reverse = '';
//    for(let i=str.length-1; i>=0; i--){
//        reverse += str[i];
//    }

// return reverse;

// }

// console.log(reverse('okollk'))


// function area(a,b){
//      let areaOfTriangle = a*b/2
//      return areaOfTriangle;
// }
// const height = prompt('enter the height');
// const base = prompt('enter the base');
// console.log(area(height,base))

// function thirdSide(a,b){
//       const thirdEdge = (a+b)-1;
//       return thirdEdge;
// }


// console.log(thirdSide(40,40))
// function area(a,b){
//      let areaOfTriangle = a*b/2
//      return areaOfTriangle;
// }
// const height = prompt('enter the height');
// const base = prompt('enter the base');
// console.log(area(height,base))

// function thirdSide(a,b){
//       const thirdEdge = (a+b)-1;
//       return thirdEdge;
// }


// console.log(thi

// }
// const height = prompt('enter the height');
// const base = prompt('enter the base');
// console.log(area(height,base))

// function thirdSide(a,b){
//       const thirdEdge = (a+b)-1;
//       return thirdEdge;
// }


// console.log(thirdSide(40,40))

// const ip = 'This is a string';


// const words = ip.split(' ');
// console.log(words);
// const newWord = words.map((a)=> a.split('').reverse().join('')).join(' ');
// console.log(newWord)

// const height = prompt('enter the height');
// const base = prompt('enter the base');
// console.log(area(height,base))

// function thirdSide(a,b){
//       const thirdEdge = (a+b)-1;
//       return thirdEdge;
// }


// console.log(thirdSide(40,40))

// const ip = 'This is a string';


// const words = ip.split(' ');
// console.log(words);
// const newWord = words.map((a)=> a.split('').reverse().join('')).join(' ');
// console.log(newWord)





// const func = (...a)=>{
// console.log(...a)


// }

// const arr = [1,2,3,4,5];
// func(...arr)

const product = [];


const result = product.map((data)=>data.image );

console.log(result)
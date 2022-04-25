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


const btn = document.querySelectorAll('button');
// for(let b of btn){
//     b.addEventListener('click', function(){
//         console.log(this.textContent)
//     })
// }

btn.forEach((a, b) => {
    a.addEventListener('click', function (e) {
       e.target.style.background = 'red';
       e.target.style.color = 'yellow'
    })
})


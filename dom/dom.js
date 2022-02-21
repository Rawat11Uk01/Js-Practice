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
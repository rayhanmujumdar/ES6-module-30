const priya = 'Asif Akbar';
const meye = "meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine = 'this is my first line \n'
+'this is my first link\n'
+"sabbir tumi kothay"//old type of delire string; 
// es6 version using this;
const multiLineNew = `this is a multiline
this is second line
this is third line
fourth line
`;

const Count = 5;
const old = "<h3 class='friend-name'>Friend-2</h3>"
const old2 = "<h3 class='friend-name'>Friend-"+Count+"</h3>"
console.log(old2)
// tampate style es6;
const new1 = `<h3 class='friend-name'>Friend-${Count}</h3>`
console.log(new1);
const firstName = "rakib";
const lastName = "ahmed";
const fullold = firstName + " " + lastName; //full pera and distrap code;
// tampate style ES6;
const fullMyName = `This person name is: ${firstName} ${lastName}`;//easyly handle no pera;
console.log(fullMyName)



//practice
// let count = 4;
// document.getElementById("extra").addEventListener("click",function(e){
//     count++;
//     console.log(count)
//     const div = document.createElement("div");
//     div.innerHTML = `<h3 class='friend-name'>Friend-${count}</h3>`//make a dynamic tamplete in javascript string added;
//     const body = e.target.parentNode.parentNode;
//     body.appendChild(div);
//     console.log(e.target.parentNode.parentNode)
// })
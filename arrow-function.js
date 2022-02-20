//function delire;
function add(num1,num2){
    return num1 + num2;
}
//function expression;
const add2 = function add2(num1,num2){
    return num1 + num2;
}
// function expression (anonymous);
const add3 = function (num1,num2){
    return num1 + num2;
}
//arrow (=>) function;
const add4 = (num1,num2) => {
    return num1 + num2;
}
// function call;
const sum = add(25,25);
const sum2 = add2(25,25);
const sum3 = add3(25,25);
const sum4 = add4(25,25);
console.log(sum)
console.log(sum2);
console.log(sum3);
console.log(sum4)
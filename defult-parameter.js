//function defult parameter add;
function add(num1,num2 = 0){//0 = defult value;
    // option - 2;
    // num2 = num2 || 0
    // option - 1;
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    const total = num1 + num2;
    return total;
}
const result = add(15);
console.log(result);

// practice;
function fullName(first,last = "no name added"){
    const fullName = first + " " + last;
    return fullName;
}
const sakib = undefined;
const fullMyName = fullName("rakib",sakib);
console.log(fullMyName);
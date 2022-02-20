// let or const;
let priyoPerson = 'kolsum Begum';
priyoPerson = "Momotaj Begum";
const hubby = "Akbar the great";
//defult parameter value;
function calculate(first,last = "chowdhury"){
    const fullName = first + ' ' + last;
    return fullName;
};
const fullName = calculate("rayhan","mujumdar");
// useing daynamic templete-string;
const myPeople = `my lovely person is ${fullName}.he is very smart gay and intrelegent.so he married to ${priyoPerson}`
console.log(myPeople);

//arrow function;
const getName2 = (first,last) => first + " " + last;
const fiveTimes = y => y*5;
fiveTimes(5);
const bigArrowFunc = (x,y,z) => {
    const firstPart = x + y;
    const secondPart = x - y;
    const thirdPart = z * y;
    const result = (firstPart / secondPart) * thirdPart;
    return result;
}
console.log(bigArrowFunc(20,30,40));

// spread operator;
const numbers = [2,5,67,68,68];
const addnumbers = numbers.join(" ");//not work to min or max beacuse join return to string or spread operator return to number;
const min = Math.min(...numbers);
console.log(min);
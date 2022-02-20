const sum = (num1 = 0,num2 = 0,num3 = 0) => num1 + num2 + num3;
const result = sum(60,70,80);

const name = (first,last) => `${first} ${last}`;
const fullName = name('rayhan','mujumdar');

const addString = prem => `amar sonar bangla ami tomay ${prem}`
const prem = addString("valobashi");
const getName = () => "Hello Friends My name is rayhan";
const intro = getName();

// multiline arrow function;
const gunpol = (num1,num2) => {
    const sum = num1 + num2;
    const gun = sum * 5;
    return gun;
};
console.log(intro);
console.log(gunpol(17,20));
console.log(prem)
console.log(fullName)
console.log(result);

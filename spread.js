// using to spread operator (...);
const numbers = [99,25,88,102,50];
// console.log(numbers);
// console.log(...numbers);
const max = Math.max(88,90,33,58);
const maxInArray = Math.max(...numbers);
// console.log(maxInArray)
// console.log(max);
const numbers2 = [...numbers];
numbers2.push(89,90,91);
numbers.push(56,88,86);
console.log(numbers,numbers2);

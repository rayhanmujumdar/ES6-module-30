// variable
var deposit = 400
// condition;
if(deposit > 200){

}
if(deposit < 200){

}
if(deposit == 500){

}
if(deposit != 500){

}
else if(deposit >= 300){

}
else{

}
//array
const numbers = [45,232,34,56,77,89,44]
const numberCount = numbers.length;
numbers.push(50);
numbers.pop();
// number[2] = 555;
// check wether 222 included in the array;
console.log(numbers.includes(232))
if(numbers.indexOf(232) != -1){

}
if(numbers.includes(222)){

}
// loop
//while,for
for(const number of numbers){

}
// function
function fullName (first,second){
    const name = first + " " + second;
    return name;
}
const person = fullName("rohim","ali")
console.log(person);

// object
const bottle = {color: "yellow", contain: "water", ml:"460ml"};
for(const bot in bottle){
    console.log(bot)
}
console.log(bottle)
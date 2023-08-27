// //ARROW FUNCTION
// const greet = (count) => {
//     for (let i = 0; i<count; i++) 
//     console.log("Hello World");
// };

// greet(3);

// //without curly brackets yeah statement jab kaam karta h jab tak aapko ek expression likhna hota h  
// const square = (num) => num*num;

// console.log(square(3));

//CALLBACK FUNCTION EXAMPLE 1
//FUNCTION
// function greet(name, callback) {
//     console.log('Hi' + ' ' + name);
//     callback();
// }
// //callback function
// function callMe() {
//     console.log('I am callback function');
// }
// //passing function as an argument
// greet('Khushi', callMe); 

//FUNCTION WITH ARGUMENTS AND CALLBACK FUNCTION
const calculate = (a, b, operation) => {
    return operation(a,b);
};

//method 1
const addition = calculate(3,4, function (num1, num2) {
    return num1 + num2;
});

console.log(addition);

//method 2
const subtraction = (a,b) => a-b;

const subResult = calculate(8,3, subtraction)

console.log(subResult);

// method 3
function multiply(a,b) {
    return a*b;
}

const mulResult = calculate =  calculate(3,2,multiply); //jab hum call karte h tab hum paranthesis lagte h or jab pass karte h tab sirf naam likhte h function ka
console.log(mulResult);

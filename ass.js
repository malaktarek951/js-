//question 1
let str = "123";

let result = Number(str) + 7;

console.log(result); 


//question 2
let value = 0;

if (!value) {
    console.log("Invalid");
} else {
    console.log("Valid");
}

//question 3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

//question 4
let numbers = [1, 2, 3, 4, 5];

let evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 

//question 5
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray); 
//question 6
function getDay(day) {
    switch (day) {
        case 1:
            return "Sunday";
        case 2:
            return "Monday";
        case 3:
            return "Tuesday";
        case 4:
            return "Wednesday";
        case 5:
            return "Thursday";
        case 6:
            return "Friday";
        case 7:
            return "Saturday";
        default:
            return "Invalid Day";
    }
}

console.log(getDay(2)); 

//question 7
let words = ["a", "ab", "abc"];

let lengths = words.map(word => word.length);

console.log(lengths); 

//question 8
function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Divisible by both";
    } else if (num % 3 === 0) {
        return "Divisible by 3";
    } else if (num % 5 === 0) {
        return "Divisible by 5";
    } else {
        return "Not divisible by 3 or 5";
    }
}

console.log(checkNumber(15)); 

//question 9
const square = num => num * num;

console.log(square(5));

//question 10
function getPersonInfo(person) {
    const { name, age } = person;

    return `${name} is ${age} years old`;
}

const person = { name: "John", age: 25 };

console.log(getPersonInfo(person));

//question 11
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); 

 //question 12
 function getSuccess() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Success");
        }, 3000);
    });
}

getSuccess().then(message => console.log(message));

//question 13
function findLargest(numbers) {
    return Math.max(...numbers);
}

console.log(findLargest([1, 3, 7, 2, 
    
4])); 

//question 14
function getKeys(obj) {
    return Object.keys(obj);
}

let Person = { name: "John", age: 30 };

console.log(getKeys(Person)); 

//question 15
function splitWords(sentence) {
    return sentence.split(" ");
}

console.log(splitWords("The quick brown fox"));





//forEach() runs a function for every array element, while for...of loops through the elements directly. I use forEach() for simple operations and for...of when I need more control, like using break.
//***************** */
//2. What is Hoisting and what is the Temporal Dead Zone (TDZ)?
//Hoisting means JavaScript processes declarations before executing the code.
//TDZ is the time before a let or const variable is declared, when we cannot access it.
//****************** */
//3. What are the main differences between == and ===?
//== compares values after converting their types if needed, while === compares both value and type without conversion.
//*********
// 4. Explain how try-catch works and why it is important in async operations.
//try-catch is used to handle errors. The try block contains the code, and the catch block handles errors if they happen. It helps prevent the program from stopping unexpectedly, especially when using async/await.
//*************** */
//5. What’s the difference between type conversion and coercion?
//Type conversion happens when we manually change a data type using functions like Number().
//Type coercion happens when JavaScript automatically changes a data type during an operation. 



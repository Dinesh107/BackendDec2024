// console.log("Welcome to js");
// window.alert("Welcome to ja");

// document.getElementById("myH1").textContent = "Welcome to js world";

// Varaiables - a container thar stores a value 

// behaves as if it were the value contains

// declaration 
// let, var, const 

// let x = 10;


// console.log(x);

// // assignment 

// number, string, boolean 

// let firstName = 'Gowtham';

// console.log("Hai " + firstName);

// console.log(`hai ${firstName} welcome to js classes`);

// let online = true;

// console.log(`gowtham is online: ${online}`);

// let student = 30;

// student = student + 1;

// student += 1;

// console.log(student);


// let x = 1;
// x++; -> post incrment
// x--; -> post decrement
// ++x --> pre 
// --x --> pre decrement
// console.log(x++);

// how to accecpt user input 

// easy way 

// professionaL way

// let username;

// username = window.prompt("Whats your username");

// console.log(username);

// let username;

// document.getElementById("myButton").onclick = function() {
//    username = document.getElementById("myText").value;
//    document.getElementById("myH1").textContent = `Welcome ${username}`;
//    console.log(username);
// }



// Type Conversion

// let x = "2";
// console.log(typeof x);
// let y = 23;
// console.log(typeof y);
// let z = true;

// x = Number(x);
// console.log(typeof x);
// y = String(y);
// console.log(typeof y);
// x = Boolean(x);
// console.log(typeof x);
// console.log(x);

// ternary Operator = shortcut to if() and else() statements 

// let age = 10;

// condition ? conIfTrue : conIfFasle;

// let message = age >= 18 ? "You are major" : "You are minor";

// console.log(message);

// Number Guessing Game

// const minNum = 1;
// const maxNum = 10;


// const answer = Math.floor(Math.random() * (maxNum - minNum + 1));

// let attempt = 0;
// let guess;
// let running = true;


// while(running) {
  
//     guess = window.prompt(`Guess a number b/w ${minNum} to ${maxNum}`);
//     guess = Number(guess);
//     if(isNaN(guess)) {
//        window.alert("Please enter the valid number");
//     } else if(guess < minNum || guess > maxNum) {
//         window.alert(`Please enter the valid number`);
//     } else {
//         attempt++;
//         if(guess < answer) {
//             window.alert("Too low, try again");
//         } else if(guess > answer) {
//             window.alert("Too high, try again");
//         } else {
//             window.alert(`Congratulations, you guessed it in ${attempt} attempts`);
//             running = false;
//         }
//     }

// }

// Variable scope let vs var 

// functions - a section of reusable code
// declare code, use it whenever we want
// call the function to execute that code

// function happyBirthaday(username, age) {
//   console.log("Happy birthday to you!!!");
//   console.log("Happy birthday to you!!!");
//   console.log("Happy birthday to you!!!");
//   console.log(`Happy birthday dear ${username} to you!!!`);
//   console.log(`you are ${age} years old`);
// }

// happyBirthaday("gowtham", 30);
// happyBirthaday("ram", 32);
// happyBirthaday("saran", 35);

// function add(x, y) {
//    let result = x + y;
//    return result
// }
// function add(x, y) {
//   return x + y;
// }
// function sub(x, y) {
//   return x - y;
// }
// function mul(x, y) {
//   return x * y;
// }
// function div(x, y) {
//   return x / y;
// }

// function isEven(number) {
//    if(number % 2 === 0) {
//      return true;
//    } else {
//     return false;
//    }
// }

// function isValidEmail(email) {
//   if(email.includes("@")) {
//     return true;
//   } else {
//     return false;
//   }
//   return email.includes("@") ? true : false;
// }

// let answer = add(10, 20);
// console.log(mul(10, 20));
// console.log(isEven(10));
// console.log(isValidEmail("gowtham123@gmail.com"));
// console.log(isValidEmail("gowtham@meta.com"));


// Variable scope  - where a variable is recognized and accessible (local vs global)


// let x = 10;

// function function1() {
//     let x = 1;
//     console.log(x);
// }
// function function2() {
//     let x = 3;
//     console.log(x);
// }

// function1();
// function2();

// arrays - a varaiable like structure that can hold more than 1 values

// index atarts from 0 to n-1 
// let fruits = ["apple", "orange", "banana", "coconut"]; // 0 to 2

// fruits.sort();
// fruits.sort().reverse();

// for(let i = fruits.length - 1; i >=0 ; i--) {
//       console.log(fruits[i]);   
// } 

// for(let fruit of fruits) {
//     console.log(fruit);
// }

// fruits[3] = "coconut";

// fruits.push("coconut"); it will add the element at the last in the array

// fruits.pop() // remove the element from the last

// fruits.unshift("Mango"); // it will add the element at the begining in the array

// fruits.shift("Mango"); // it will remove the element at the begining in the array

// let numOfFruits = fruits.length; 
// let index = fruits.indexOf("mango");

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(numOfFruits);
// console.log(index);
















// spread operator - ... allows an iterable such as an array or string to be expanded into seperate elemnts
//(unpack the elements)

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(max);
// console.log(min);


// let username = "Gowtham Nataraj";

// let letters = [...username];
// console.log(letters);

// let letters = [...username].join("/")
// console.log(letters);

// shalow copy - it is different data structure but contains identical values

// let fruits = ["apple", "orange", "banana"];
// let veggies = ["carrot", "potato", "spinach"];
// let foods = [...fruits, ...veggies, "eggs", "milk"];

// console.log(foods);

// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array

// spread - expands an array into seprate elements 
// rest - bundles seperate elements into an array


// function openFridge(...foods) {
//   console.log(...foods);
// }

// function getFood(...foods) {
//     return foods;
// }

// const food1 = "lemon rice";
// const food2 = "Veg briyani";
// const food3 = "Veg burger";
// const food4 = "panner pizza";
// const food5= "ramen maggie";

// openFridge(food1, food2, food3, food4, food5);


// const foods = getFood(food1, food2, food3, food4, food5);

// console.log(foods);

// function sum(...numbers) {
//    let result = 0; 
//    for(let number of numbers) {
//       result += number;
//    }
//    return result;
// }

// const total = sum(1, 3, 5, 5, 12, 45, 7, 98);
// console.log(`your total is ${total} ruppes`);



// callbacks - a function that is passed as an argument to another function 


// used for handle asynchronous operations 

// Reading a file 
// network request
// interacting with database

// "hey, when you're done, call this next"

// hello(leave);

// hello();

// function hello(callback) {
//         console.log("Hello");
//         callback();
// }

// function wait() {
//     console.log("wait");  
// }

// function leave() {
//     console.log("Leave");
// }

// function hello() {
//     setTimeout(function(){
//         console.log("Hello");
//     }, 3000);
//     console.log("hello world"); 
// }

// function goodbye() {
//     console.log("goodbye");
// }



// mul(displayDOM, 3, 3);

// function mul(callback, x , y) {
//     let result = x * y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log(result);
// }

// function displayDOM(result) {
//    document.getEalementById("myH1").textContent = result;
// }


// ForEach() - method is used to iterate over the elements of an array and apply specified function(callback) to each element

// array.forEach(callback)
// element, index, array are provided

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array) {
//    array[index] = element * 2;
// }

// triple(element, index, array);
// square(element, index, array); // Math.pow(element, 2)
// cube(element, index, array); // Math.pow(element, 3)

// function display(element) {
//     console.log(element);
// }

//  let fruits = ["apple", "orange", "mango", "banana"];

//  fruits.forEach(capitalize);
// // fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//      array[index] = element.toUpperCase();
// }

// function capitalize(element, index, array) {
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }

// function display(elements) {
//   console.log(elements); 
// }

















// map()
// filter()
// reduce()
// fuction expression
// arrow function 
// javascript objects
// Constructors
// classess 
// STATIC keywords
// getter and setter
// Destructing 
// nested objects
// sorting


// setTimeout
// ErrorHandling 
// DOM Navigation 
// Mouse Events 
// key events 

// Node List 
// class List

// Async/awiat 
// promises 
// json files 
// fetch data from an API 



















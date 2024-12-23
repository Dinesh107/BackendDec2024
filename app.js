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


// .map() - accepts a callback and applies that function to each element of an array, then return a new array




// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);
// const cubes = numbers.map(cube);

// console.log(squares);
// console.log(cubes);

// function square(element) {
//     return Math.pow(element, 2);
// }

// function cube(element) {
//     return Math.pow(element, 3);
// }



// const students = ["Ram", "Arjun", "Karnan"];
// const studentsUpper = students.map(upperCase);

// console.log(studentsUpper);

// function upperCase(element) {
//   return element.toUpperCase();
// }


// const dates = ["2024-10-10", "2025-10-20", "2026-1-30"] ;

// const formattedDates = dates.map(formatDates);

// console.log(formattedDates);

// function formatDates(element) {
//     const parts = element.split("-");
//     return `${parts[2]}/${parts[1]}/${parts[0]}`
// }



// filter() = creates a new array by filtering out elements

// let numbers = [1, 2, 3, 4, 5, 6, 7];

// let evenNums = numbers.filter(isEven);

// console.log(evenNums);


// function isEven(element) {
//     return element % 2 === 0;
// }

// let ages = [16, 17, 18, 19, 20, 60];

// const adults = ages.filter(isAdult);

// console.log(adults);

// function isAdult(element) {
//     return element >= 18;
// }

// reduce() - reduce the elemnet of an array to single value 

// const prices = [10, 20, 30, 42.4, 50, 60];

// const totalPrice = prices.reduce(sum);

// console.log(`${totalPrice.toFixed(2)}`);


// function sum(accumulator, element) {
//   return accumulator + element;
// }

// Task

// const grades = [75, 50, 90, 99, 65];

// max and min using reduce

// function declaration - define a reusable block of code that performs a specific task

// function helloStudent() {
//     console.log("Hello Student");
// }

// helloStudent();

// function expression -  away to define a function as value or variables

// 1) callbacks in asynchronous operators
// 2) higher order functions
// 3) event listeners

// We are not polluting the global name sapce with function names we are only going to be using this function once there no need to declare the function.

// const helloStudent = function() {
//     console.log("Hello Student");
// }

// helloStudent();


// setTimeout(function() {
//     console.log("Hello World");
// }, 3000);

// const numbers = [1, 2, 3, 4, 5, 6];

// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// });

// console.log(squares);


// function square(element) {
//     return Math.pow(element, 2);
// }

// arrow functions - consise way to write a function expression, good for simple functions that you use only once.

// function hello() {
//     console.log("Hello World!!!");
// }

// const hello = (name, age) => { console.log(`hello ${name}`)
//                                console.log(`You are ${age}, years old`);};


// hello("balaji", 30);

// setTimeout(() => console.log("Hello"), 3000);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const squares = numbers.map((element) => Math.pow(element, 2));
// const evenNums = numbers.filter((element) => element % 2 === 0);

// const total = numbers.reduce((accumulator, element) => accumulator + element);

// console.log(total);


























// fuction expression
// arrow function 
// javascript objects

// objects - a collection of releated properties and/or methods can represent real world objects (people, products, places)

// object = {key: value, function()}

// const person1 = {
//       firstname: "John",
//       lastname: "Doe",
//       age: 28,
//       isemployed: true,
//       sayHello: function() {console.log("Hai! i am john");
//       },
//       sayBye: function() {console.log("Goodbye");
//       }
//     };

// const person2 = {
//       firstname: "Jane",
//       lastname: "Smith",
//       age: 34,
//       isemployed: false,
//       sayHello: function() {console.log("Hai! i am john");
//       },
//       sayBye: function() {console.log("Goodbye");
//       }
//     };

// const person3 = {
//       firstname: "Mike",
//       lastname: "Johnson",
//       age: 40,
//       isemployed: true,
//       sayHello: function() {console.log("Hai! i am john");
//       },
//       sayBye: function() {console.log("Goodbye");
//       }
//     };

// const person4 = {
//       firstname: "Emily",
//       lastname: "Davis",
//       age: 25,
//       isemployed: false,
//       sayHello: function() {console.log("Hai! i am john");
//       },
//       sayBye: function() {console.log("Goodbye");
//       }
//     };



// console.log(person1.firstname);
// console.log(person2.firstname);
// console.log(person3.firstname);
// console.log(person4.firstname);

// const person = { 
//     firstname: "John",
//     lastname: "Doe",
//     age: 28,
//     isemployed: true,
//     sayHello() {console.log(`Hai! I am ${this.firstname}`);
//     }
// }

// console.log(person.firstname);
// console.log(person.lastname);
// person.sayHello();


// this = refrence to the object where THIS is used (the object depends on the imediate context)
// person.name = this.name

// const person1 = {
//     name: 'John',
//     favFood: "Dosa",
//     sayHello: function() {
//         console.log(`Hi i am ${this.name}` );
//     },
//     eat : function() {
//         console.log(`I am eating ${this.favFood}`);
//     }
// }
// const person2 = {
//     name: 'adam',
//     favFood: "idly",
//     sayHello: function() {
//         console.log(`Hi i am ${this.name}` );
//     },
//     eat : function() {
//         console.log(`I am eating ${this.favFood}`);
//     }
// }

// person2.sayHello();
// person2.eat();


// Constructor = special method for defining the properties and methods of objects.

// const car1 = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020,
//     color: "red",
//     drive: function() {console.log(`You drive the ${this.model}`)}
// }


// const car2 = {
//     make: "Maruthi",
//     model: "Swift",
//     year: 2016,
//     color: "white",
//     drive: function() {console.log(`You drive the ${this.model}`)}
// }

// const car3 = {
//     make: "Tata",
//     model: "Punch",
//     year: 2012,
//     color: "Grey",
//     drive: function() {console.log(`You drive the ${this.model}`)}
// }

// function Car(make, model, year, color) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     this.drive = function() {
//         console.log(`You drive the ${this.model}`);
//     };
// }

// const car1 = new Car("Toyota", "Camry", 2024, "red");
// const car2 = new Car("Maruthi", "Swift", 2016, "white");
// const car3 = new Car("Tata", "Punch", 2012, "grey");

// console.log(car1);
// car1.drive();
// console.log(car2);
// car2.drive();
// console.log(car3);
// car3.drive();























// Constructors
// classes - ES6 Features provide a more structred and clearer way to work with objects compared to the traditional constructor functions 

// eg static, encapsulation, inheritance

// class Product {
//     constructor(name, price, quantity) {
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//     }
//     displayProductInfo() {
//         console.log(`Name: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`);
//     }

//     calculateTotal(salesTax) {
//        return this.price + (this.price * salesTax);
//     }

// }

// const salesTax = 0.05;

// const product1 = new Product("Shirt", 500, 1);
// console.log(product1);
// product1.displayProductInfo();

// const product2 = new Product("Shorts", 300, 2);
// console.log(product2);
// product2.displayProductInfo();

// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): ₹${total.toFixed(2)}`);



// STATIC keywords - Keyword that defines the properties and methods that belong to a class itself rather than the objects created from the that class (class owns anything, not the objects)


// class MathUtil {
//     static PI = 3.14159;

//     static GetDiaameter(radius) {
//         return radius * 2;
//     }

//     static getCircumference(radius) {
//         return 2 * this.PI * radius;
//     }

//     static getArea(radius) {
//         return this.PI * radius * radius;
//     }
// }


// console.log(MathUtil.PI);
// console.log(MathUtil.GetDiaameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));

// class User {
//     static userCount = 0;

//     constructor(username) {
//         this.username = username;
//         User.userCount++;
//     }

//     sayHello() {
//         console.log(`Hello, my username ${this.username}`)
//     }

//     static getUserCount() {
//         console.log(`There are ${User.userCount} users online`);
        
//     }

// }

// const user1 = new User("john");
// const user2 = new User("Thiloth");
// const user3 = new User("Navin");


// user1.sayHello();
// user2.sayHello();
// user3.sayHello();

// User.getUserCount();

// console.log(User.userCount);



// inheritance -  allow a new class to inherit properties and methods from an exiting class (Parent -> Child)

//(help with code reusability)

// class Animals {
//     alive = true;
//     eat() {
//         console.log("I am eating");
//     }
//     sleep() {
//         console.log("I am sleeping");
//     }
// }

// class Rabbit extends Animals {
//     name = "rabbit"
//     run() {
//         console.log(`${this.name} is running`);
//     }
// }
// class Fish extends Animals {
//     name = "fish"
//     swim() {
//         console.log(`${this.name} is swimming`);
//     }
// }
// class Parrot extends Animals {
//     name = "parrot"
//     fly() {
//         console.log(`${this.name} is flying`);
//     }
// } 

// const rabbit = new Rabbit();
// const fish = new Fish();
// const parrot = new Parrot();



// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();
// fish.swim()
// parrot.fly();



// super - keyword is used in classes to call the constructor or access the properties and methods of a parent .
//   this = object
//   super = the parent

// benefits of using the constructor if there is any property that the clildren all sharing in common we can sed them to the constructorof the parent

// using super keyword we can extend a method from the parent.


// class Animals {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     alive = true;
//     eat() {
//         console.log("I am eating");
//     }
//     sleep() {
//         console.log("I am sleeping");
//     }
//     move(speed) {
//         console.log(`The ${this.name} is moves at a speed of ${speed}  mph`);
//     }
// }

// class Rabbit extends Animals {
//     constructor(name, age, runSpeed) {
//         super(name, age);  // calling parent constructor
//         this.runSpeed = runSpeed;
//     }
//     name = "rabbit"
//     run() {
//         console.log(`${this.name} is running`);
//         super.move(this.runSpeed);
//     }


// }
// class Fish extends Animals {
//     constructor(name, age, swimSpeed) {
//         super(name, age);  // calling parent constructor
//         this.swimSpeed = swimSpeed;
//     }
//     name = "fish"
//     swim() {
//         console.log(`${this.name} is swimming`);
//         super.move(this.swimSpeed);
//     }
// }
// class Parrot extends Animals {
  
//     constructor(name, age, flySpeed) {
//         super(name, age);  // calling parent constructor
//         this.flySpeed = flySpeed;
//     }

//     name = "parrot"
//     fly() {
//         console.log(`${this.name} is flying`);
//         super.move(this.flySpeed)
//     }
// } 


// const rabbit = new Rabbit("Fluffy", 2, 25);
// const fish = new Fish("nemo", 3, 12);
// const parrot = new Parrot("ram", 1, 30);

// console.log(rabbit.alive);

// rabbit.eat();

// rabbit.sleep();

// rabbit.run();
// fish.swim();
// parrot.fly();

// getter and setter


// getter - special method that makes a property readable
// setters - special method that makes a property writable


// validate and modify a value when reading/writing a property 

// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     set width(newwidth) {
//         if(newwidth > 0) {
//             this._width = newwidth;
//         } else {
//             console.error("width must be +ve num");
            
//         }
//     }
//     set height(newheight) {
//         if(newheight > 0) {
//             this._height = newheight;
//         } else {
//             console.error("height must be +ve num");
            
//         }
//     }

//     get width() {
//         return `${this._width.toFixed(2)} cm`;
//     }
//     get height() {
//         return `${this._height.toFixed(2)}cm`;
//     }

//     getArea() {
//         return (this._width * this._height).toFixed(2);
//     }

// }

// const rectangle = new Rectangle(3, 4);


// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.getArea());





// Class Shape {
   
// }

// child 
// square() - proprties and methods
// circle() - proprties and methods
// cylinder() - proprties and methods



// class Person {
//     constructor(firstname, lastname, age) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//     }

//     set firstname(newFirstName) {
//         if(typeof newFirstName === "string" && newFirstName.length > 0)  {
//              this._firstname = newFirstName;
//         } else {
//             console.error("Invalid firstname, it must be non-empty string"); 
//         }
//     }
//     set lastname(newLastName) {
//         if(typeof newLastName === "string" && newLastName.length > 0)  {
//              this._lastname = newLastName;
//         } else {
//             console.error("Invalid LastName, it must be non-empty string"); 
//         }
//     }

//     set age(newAge) {
//         if(typeof newAge === "number" && newAge >= 0)  {
//              this._age = newAge;
//         } else {
//             console.error("Invalid age, it must be a positive num"); 
//         }
//     }
 
//     get firstname() {
//         return this._firstname;
//     }
//     get lastname() {
//         return this._lastname;
//     }
//     get age() {
//         return this._age;
//     }
    
// }


// const person = new Person("thiloth", "ram", 28);

// console.log(person.firstname, person.lastname, person.age);


























// Destructing - extract values from arrays and objects then assign them to variables in a convenient way .

// [] - to perform array destructuring

// {} - to perform object destructuring


// swap the values of two variable

// let a = 10;

// let b = 20;

// [a, b] = [b, a];

// console.log(a);

// console.log(b);


// swap 2 two elements in array 

// const colors = ["red", "green", "blue", "yellow", "white"];

// [colors[0], colors[4]] = [colors[4], colors[0]];

// console.log(colors);

// assign array elements to variables 
// that how to assign array elements to varaibles using destrcturing

// const colors = ["red", "green", "blue", "yellow", "white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);

// console.log(secondColor);

// console.log(thirdColor);

// console.log(extraColors);

// Extract values from objects 

// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     job: "Cook",
// }
// const person2 = {
//     firstName: 'Ram',
//     lastName: 'siva',
//     age: 27,
// }


// const {firstName, lastName, age, job} = person1;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// const {firstName, lastName, age, job = "unemployed"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);


// Destructure in function parameters 


// function displayPerson({firstName, lastName, age, job}) {
//      console.log(`${firstName} ${lastName}`);
//      console.log(`${age}`);
//      console.log(`${job}`);   
// }

// const person1 = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 30,
//     job: "Cook",
// }
// const person2 = {
//     firstName: 'Ram',
//     lastName: 'siva',
//     age: 27,
// }


// displayPerson(person2);


// nested objects - objects inside of other object.

// allows us to represent more complex data structures
//  child object is enclosed by parent object

// person{Address{}, ContactInfo{}}
// ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}


// array of objects 

// const friuts = [{name: "apple", color: "red"}, {}, {}, {}, {}, {}, {}]

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



















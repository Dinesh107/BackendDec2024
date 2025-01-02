
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

// const fruits =  [{name: "apple", color: "red", calories: 95}, 
//                  {name: "orange", color: "orange", calories: 45}, 
//                  {name: "banana", color: "yellow", calories: 105},
//                  {name: "coconut", color: "white", calories: 159},
//                  {name: "pineapple", color: "yellow", calories: 46}];






//  fruits.push({name:"grapes", color: "purple", calories: 45});
//  fruits.pop({name:"grapes", color: "purple", calories: 45});
//  fruits.splice(1, 2);

// for each 
// fruits.forEach(fruit => console.log(fruit.calories));

// map -> wll return the new array

// const fruitNames = fruits.map(fruits => fruits.name);
// console.log(fruitNames);
// const fruitColors = fruits.map(fruits => fruits.color);
// console.log(fruitColors);


// filter - will return the array after using each element and checking the condition

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// console.log(lowCalFruits);
// const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
// console.log(highCalFruits);


// reduce method - this will return single value 

// const maxFruit = fruits.reduce((max, fruit) => fruit.calories >= max.calories ? fruit : max);

// console.log(maxFruit);

//  console.log(fruits);
                
// console.log(friuts[1].calories);
     



// sorting() - method used to sort elements of an array in place,
// sorts elements as strings in lexicographic order, not alphabetical order.
// lexicographic = (apphabet + number + symbols) as strings



// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// let numbers = [1, 3, 6, 4, 5, 2, 7, 9, 8, 10];

// const people = [{name: "navin", age: 21, gpa: 8.0}, 
//                 {name: "thiloth", age: 22, gpa: 9.0}, 
//                 {name: "siva", age: 51, gpa: 7.0}, 
//                 {name: "ram", age: 27, gpa: 5.0}];

// fruits.sort();
// numbers.sort((a,b) => a - b);
// numbers.sort((a,b) => b - a);

// people.sort((a, b) => a.age - b.age);
// console.log(people);

// people.sort((a, b) => b.age - a.age);
// console.log(people);

// people.sort((a, b) => a.gpa - b.gpa);
// console.log(people);
// people.sort((a, b) => b.gpa - a.gpa);
// console.log(people);


// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);
// people.sort((a, b) => b.name.localeCompare(a.name));
// console.log(people);

// console.log(people);

// setTimeout - function in javascript that allows us to schedule the excecution of a function after an amount of the(milliseconds) times are approximate (varies based workload of the js runtime env)

// setTimeout(callback, delay)



// function sayHello() {
//     window.alert("hello");
// }

// setTimeout(sayHello, 3000); // after 3 seconds the above function will be executed.

// setTimeout(function(){
//     window.alert("hello");
// }, 3000)

// setTimeout(() => window.alert("hello"), 3000);


// cleartimeout() = function to cancel before it triggers 


// const timeoutId = setTimeout(() => window.alert("hello"), 3000);

// clearTimeout(timeoutId);


// let timeoutId;

// function startTimer() {
//     timeoutId = setTimeout(()=>window.alert("hello"), 3000);
//     console.log("timer started");
// }

// function clearTimer() {
//     clearTimeout(timeoutId);
//     console.log("timer cleared");
// }



// ES6 - an external file that conatains reusable code that can be imported into other javascript files.
// write reusable code for many different apps.
// can contains varaibles, classes, functions and more
// introduced a prat ecmascript 2015 update 


// synchronous  - exectes line by line consecutively in sequencial manner code that waits for an operation to complete


// console.log("Tast 1");
// console.log("Tast 2");
// console.log("Tast 3");


// Asynchronous - allows multiple operations to be performed concurrently without waiting,
// Doesn't block the executuon flow and allow the program to continue 




//(i/o operation, network requests, fetching data)

// handle with :- callback, promises, Async/Await

// function func1(callback) {
//     setTimeout(() => { console.log("Task 1")
//         callback();
//     }, 3000);
// }

// function func2() {
//     console.log("Tast 2");
//     console.log("Tast 3");
//     console.log("Tast 4");
// }

// func1(func2);

// ErrorHandling - an object is created to represent a problem that occurs often with user input or established a coonections.


// console.log(x);

// Network issues
// Promise rejection
// security errors

// console.log("You reach the end of the program");



// try{}
// catch {}
// finally{}


// try {
//     const dividend =Number(window.prompt("Enter the dividend:"));
//     const divisor = Number(window.prompt("Enter the divisor: "));
    
//     if(divisor == 0) {
//         throw new Error("You can't divide by zero")
//     }
//     if(isNaN(dividend) || isNaN(divisor)) {
//         throw new Error("Please enter valid numbers, must be numb");
//     }

//     const result = dividend / divisor;
    
//     console.log(result);
// }
// catch(error) {
//     console.error("An error occurred:", error);
// }

// console.log("program ended");


// DOM - Document Object model 
// Object{} that represents the page you see in the web browser and provides us with an API to interact with it.
// web browser constructs the DOM when it loads an HTML document and structure all the elements in tree-like representation.
// Javascript can access the DOM to dynamically 
// change the content, structure and style of style page


// const username = "Ram Kumar";

// const welcomeMsg = document.getElementById("welcome-msg");

// welcomeMsg.textContent += username === "" ? `Guest` : username;

// console.dir(document);

// document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";


// elements selectors = method used to target and manipulate HTML elements, that allows us to select one or multiple elements from the DOM (Document object model)

// 1) document.getElementById()    returns element or null
// 2) document.getElementsClassName() returns HTML Collection
// 3) document.getElementsByTagName() returns HTML Collection
// 4) document.querySelector()   returns first element or null
// 5) document.querySelectorAll() returns NODELIST


// const myHeading = document.getElementById("my-headinggg");

// myHeading.style.backgroundColor =  "red";
// myHeading.style.textAlign = "center";

// console.log(myHeading);

// const fruits = document.getElementsByClassName("fruits");

// friuts[2].style.backgroundColor = "red";

// for(let fruit of friuts) {
//     fruit.style.backgroundColor = "red";
// }

// Array.from(fruits).forEach(fruit => {
//     fruit.style.background = "red";
// });

// console.log(friuts);




// const h4Elements = document.getElementsByTagName('h4');
// const liElements = document.getElementsByTagName('li');


// h4Elements[].style.backgroundColor = "red";
// h4Elements[].style.backgroundColor = "red";

// for(let liElement of liElements) {
//     liElement.style.backgroundColor = "lightgreen";
// }


// const element = document.querySelector(".fruits");
// const element = document.querySelector("h4");
// const element = document.querySelector("li");
// const element = document.querySelector("ul");
// const element = document.querySelector("ol");

// element.style.backgroundColor = "lightgreen";

// console.log(element);


// const fruits = document.querySelectorAll(".fruits");
// const foods = document.querySelectorAll("li");

// console.log(fruits);
// console.log(food);

// fruits[2].style.backgroundColor = "lightgreen";
// foods[5].style.backgroundColor = "lightgreen";

// foods.forEach(food => {
//     food.style.backgroundColor = "lightgreen";
// })


// year passed out 2014
// greens document = 3.5 years exp 
// 2019 - 2022 

// original exp - 2022 Jan - 2022 nov -  11 months - 10.5lpa + 50k bonus

// 2 years gap - 2023, 2024






















// DOM Navigation - the process of navigating through the structure of an HTML document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// .firstElementChild

// const elements1 = document.getElementById("fruits");

// const firstChild = elements1.firstElementChild;

// firstChild.style.backgroundColor = "lightgreen";

// const elements2 = document.getElementById("veggies");

// const firstChild = elements2.firstElementChild;

// firstChild.style.backgroundColor = "lightgreen";

// const elements3 = document.getElementById("deserts");

// const firstChild = elements3.firstElementChild;

// firstChild.style.backgroundColor = "lightgreen";

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "lightgreen";
// })


// .lastElementChild

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement => {
 
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "lightgreen";

// });

// console.log(ulElements);



// .nextElementSibling

// const element = document.getElementById("apple");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightgreen";

// const element = document.getElementById("pie");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightgreen";

// const element = document.getElementById("foods");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "lightgreen";

// .previousElementSibling


// const element = document.getElementById("foods");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "lightgreen";

// .parentElement

// const element = document.getElementById("deserts");
// const parent = element.parentElement;
// console.log(parent);


// parent.style.backgroundColor = "lightgreen";


// .children

// const element = document.getElementById("deserts");

// const children = element.children;

// console.log(children);

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "lightgreen";
// })

// Add and change HTML 

// h1 Ex1

// step 1 CREATE THE ELEMENT

// const newH1 = document.createElement("h1");

// const newListItem = document.createElement("li");
// newListItem.id = "coconut";
// newListItem.style.fontWeight = "bold";
// newListItem.style.backgroundColor = "lightgreen";
// STEP 2 ADD ATTRIBUTEs/PROPERTIES


// newListItem.textContent = "grape";

// newH1.textContent = "I like veg briyani";
// newH1.id = "myH1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";

// Step 3 APPEND ELEMENTS TO DOM

// document.body.append(newListItem);
//document.body.prepend(newListItem);
// document.getElementById("fruits").appendChild(newListItem);
// document.getElementById("fruits").prepend(newListItem);
// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").appendChild(newH1);
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);
// const box1 = document.getElementById("box1");
// document.body.insertBefore(newH1, box1);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENTS

// document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);
// document.getElementById("fruits").removeChild(newListItem);


// event listners = listen for specfic events to create interactive web pages 

// events: click, mouseover, mouseout, keypress

// Mouse Events 

// .addEventListner(event, callback);
// .addEventListner(event, annonymous);
// .addEventListner(event, arrow function);


// const myBox = document.getElementById("myBox");
// const myBtn = document.getElementById("myBtn");

// function changeColor(event) {
//     console.log(event);   
    // event.target.style.backgroundColor = "lightgreen";
    // event.target.textContent = "Clicked!😃";
// }

// myBox.addEventListener("click", changeColor);

// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Clicked!😃";
// // });
// myBox.addEventListener("click", event => {
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Clicked!😃";
// });

// myBox.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "dont't do it😃";
// })

// myBox.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "lightseagreen";
//     event.target.textContent = "Click Me 🙂";
// })



// myBtn.addEventListener("click", event => {
//   myBox.style.backgroundColor = "lightgreen";
//   myBox.textContent = "Clicked!😃";
// });

// myBtn.addEventListener("mouseover", event => {
//     myBox.style.backgroundColor = "tomato";
//     myBox.textContent = "dont't do it😃";
// })

// myBtn.addEventListener("mouseout", event => {
//     myBox.style.backgroundColor = "lightseagreen";
//     myBox.textContent = "Click Me 🙂";
// })


// key events - keypress 
// events: keydown, keyup
// document.addEventListener(event, callback);



// const myBox = document.getElementById("myBox");
// const moveAmount = 10;
// let x = 0;
// let y = 0;


// document.addEventListener("keydown", event => {
//     // console.log(event.key);
//     if(event.key.startsWith("Arrow")) {
//         switch(event.key) {
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }

//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// })

// document.addEventListener("keydown", event => {
//    myBox.textContent = "😃";
//    myBox.style.backgroundColor = "tomato";
// })

// document.addEventListener("keyup", event => {
//    myBox.textContent = "🙂"
//    myBox.style.backgroundColor = "lightblue";
// })


// document.addEventListener("keydown", event => {
//     console.log(event.key);
// console.log(`key down = ${event.key}`);
// })

// document.addEventListener("keyup", event => {
//     console.log(`key up = ${event.key}`);
// })























// Node List - Static collection of HTML elements by (id, class, elemennt)
// can be created by using queryselectoeAll()
// similar to an array but no (map, filter, reduce)
// nodelist won't update to automatiaclly reflect changes


// let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// buttons.forEach(button => {
//    button.style.backgroundColor = "green";
//    button.textContent += "🙂";
// });


// click event

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.background = "tomato";
//     });
// });

// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.background = "lightblue";
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.background = "green";
//     })
// })


// ADD an element 
// const newButton = document.createElement("button"); // step1

// newButton.textContent = "Button 5";// step 2 add attributes 
// newButton.classList = "myButtons";

// document.body.append(newButton)  // step 3 now we need to append to the dom

// console.log(buttons);


// let newButton = document.createElement("button"); // step1

// newButton.textContent = "Button 5";// step 2 add attributes 
// newButton.classList = "myButtons";

// document.body.append(newButton)  // step 3 now we need to append to the dom

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

// Remove an Element

// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.remove();
//         buttons = document.querySelectorAll(".myButtons");
//         console.log(buttons);
//     });
// })














// class List - element property in javascript used to interact with an elemnts list of classes (css classes), allows us to make reusable classes for many elements. across web pages.


// add()
// remoeve()
// toogle (remove if present, add if not)
// replace (oldClass, newClass)
// contains();


// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");

// myButton.addEventListener("click", (event) => {

//      if(event.target.classList.contains("disabled")) {
//          event.target.textContent += "🙂"
//      } else {
//         event.target.classList.replace("enabled", "disabled");
//      }

   
// })

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })

// myButton.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })
// myButton.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// })

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");


// myButton.classList.add("hover");





















// callback hell - situation in js where callbacks are nested with other callbacks to the degree where the code is difficult to read. old pattern to handle asynchronous functions.
// a(function (resultFromA)) {
//     b(resultFromA, function (resultFromB) {
//         c(resultFromB, function (resultFromC) {
//             d(resultFromC, function (resultFromD) {
//                 e(resultFromD, function (resultFromE) {
//                     f(resultFromE);
//                 });
//             });
//         });
//     });
// }

// use promises = async/await to avoid the callback hell 

// function task1(callback) {
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);  
// }
// function task2(callback) {
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     }, 1000); 
    
// }
// function task3(callback) {
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     }, 3000); 
    
// }
// function task4(callback) {
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     }, 1500); 
    
// }

// task1(() => {
//     task2(() => {
//         task3(() => {
//             task4(() => {
//                 console.log("All tasks completed");
//             });
//         });
//     });
// })







// Async/await - Async - makes a function return a promise 
// await - makes a async function wait for a promise promise.

// allows us to write asynchronous code in a synchronous manner, aynsc doess't have resoleve or reject parameters everything after await is placed event queue.
















// promises - Object that manages asynchronous operation. Wrap a promise object around {asynchronous code}
// "I promise to return the value"
// Pending - Resolved or Rejected

// new Promise(resolve, reject) => {asynchronous code}

// Do the chores in order

// 1) walk the pet
// 2) clean the house
// 3) take out the trash 


// function walkDog() {
//      return new Promise((resolve, reject) => {
//         setTimeout(() => {
    
//             const dogWalked = false;

//             if(dogWalked) {
//                 resolve("You walk the dog 🐈");
//             } else {
//                 reject("The dog didn't walk");
//             }  
//         }, 1500);
//     })
// }
// function cleanKitchen() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const kitchenCleand = true;

//             if(kitchenCleand) {
//                 resolve("you clean the kitchen 🖌️");
//             } else {
//                 reject("The kitchen is not clean");
//             }  
//         }, 2500);
//     })
// }

// function takeOutTrash() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const trashTakenOut = true;
//             if(trashTakenOut) {
//                 resolve("You take out the trash 🚮");
//             } else {
//                 reject("The trash is not taken out");
//             }  
//         }, 1000)
//     })
// }


// walkDog(() => {
//     cleanKitchen(() => {
//         takeOutTrash(() => {
//             console.log("You finished all the chores!!");
//         });
//     });
// });


// walkDog().then(value =>{ console.log(value); return cleanKitchen()})
//          .then(value => { console.log(value); return takeOutTrash()})
//          .then(value => { console.log(value); console.log("You finished all the chores!!!");})
//          .catch(error => { console.error(error); });


// async function doChores() {
   
//    try {
//     const walkDogResult = await walkDog();
//     console.log(walkDogResult);
//     const cleanKitchenResult = await cleanKitchen();
//     console.log(cleanKitchenResult);
//     const takeOutTrashResult = await takeOutTrash();
//     console.log(takeOutTrashResult);
//     console.log("You finished all the chores!!!");
//    }
//    catch(error) {
//     console.error(error);
//    }
// }

// doChores();



// json files - (Javascript object notation), data-interchange format used for exchanging data b/w server and web app JSON files 

// {key:value} or [value1, value2, value3] 


// JSON.stringify() - converts a js object to json string  
// JSON.parse() - converts JSON string to JS object



// const names = ["Ram", "Vicky", "John", "Aslam"];

// const person = {"name": "Ram","age": 29,"isEmployes": true,"hobbies": ["football", "books reading", "cooking"]}



// const jsonString = JSON.stringify(names);
// console.log(names);
// console.log(jsonString);

// const jsonString = JSON.stringify(person);
// console.log(person);
// console.log(jsonString);

// const people = [ {"name": "Ram","age": 29,"isEmployes": true}, 
//                  {"name": "Shyam", "age": 32, "isEmployes": false},
//                  {"name": "Gopal","age": 31,"isEmployes": true}]

// const jsonString = JSON.stringify(people);
// console.log(people);
// console.log(jsonString);

// const jsonNames = `["Ram", "Vicky", "John", "Aslam"]`;

// const jsonPerson = `{"name": "Ram","age": 29,"isEmployes": true,"hobbies": ["football", "books reading", "cooking"]}`

// const jsonPeople = `[{"name": "Ram","age": 29,"isEmployes": true}, 
//                      {"name": "Shyam", "age": 32, "isEmployes": false},
//                      {"name": "Gopal","age": 31,"isEmployes": true
//                      }]`;

//const parsedData = JSON.parse(jsonNames);

// console.log(jsonNames);
// console.log(parsedData);


// const parsedData = JSON.parse(jsonPerson);

// console.log(jsonPerson);
// console.log(parsedData);


// const parsedData = JSON.parse(jsonPeople);

// console.log(jsonPeople);
// console.log(parsedData);
                  


// fetching - it is function

// fetch("as relative file path" or "absolute file path")

// fetch("person.json")
//      .then(response => response.json())
//      .then(value => console.log(value))


// fetch("names.json")
//      .then(response => response.json())
//      .then(value => console.log(value))


// fetch("people.json")
//      .then(response => response.json())
//      .then(values => values.forEach(value => console.log(value)))
//      .catch(error => console.error(error));






// fetch data from an API - finction used for making HTTP requests to fetch resourses.
// (JSON style data, images, files)

// simplifies asynchronous data fetching in js and used for interacting with APIs to retrive and send data asynchronously over the web

// fetch(url, {method: 'POST'})
// fetch(url, {method: 'GET'})
// fetch(url, {method: 'DELETE'})
// fetch(url, {method: 'PUT'})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu/")
//       .then(response => {
//         if(!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}, sorry could not fetch the resourses`);
//         }
//         return response.json();
//       })
//       .then(data => console.log(data))
//       .catch(error => console.error(error));

fetchData();

async function fetchData() {
    try {
      const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, sorry could not fetch the resourses`);
      } 
      const data = await response.json();
      console.log(data);
      const pokemonImage = data.sprites.front_default;
      const imageEle = document.getElementById("pokemonImages");
      imageEle.src = pokemonImage;
      imageEle.style.display = "block";
    } catch(error) {
       console.log(error);
    }
}
























// ES6 Modules

// import {PI, getCircumference, getArea, getVoloume} from './mathUtil.js';

// console.log(PI);

// const circum = getCircumference(10);
// const area = getArea(10);
// const vol = getVoloume(10);

// console.log(`${circum.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm^2`);
// console.log(`${vol.toFixed(2)}cm^3`);
















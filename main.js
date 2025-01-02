// function log(message) {
//    console.log(message);  
// }
// log(`hello, welcme to js code`);
// function doSomething() {
// for (var i = 0; i < 5; i++) {
//    console.log(i); 
// } 
// for (let i = 0; i < 5; i++) {
//    console.log(i); 
// } 
//    for (let i = 0; i < 5; i++) {
//       console.log(i); 
//    } 
//    console.log(`finnaly with let: ${i}`);
// }
// doSomething();
// types 
// let count;
// count ='b';
// count = true;
// count = 1;
// let a:number;
// let b:string;
// let c:boolean;
// let d:any;
// let e:number[] = [1,2,3];
// let f:any[] = [1,2,3, 'r', true];
// const colorRed = 0;
// const colorBlue = 1;
// const colorGreen = 2;
// enum 
// enum Color{Red = 101, Blue = 102, Green = 103};
// let backgroundColor = Color.Green;
// type assertions 
// let color;
// color = 'red';
// let endsWithD = (<string> color).endsWith('d');
// let color;
// color = 'red';
// let AlternativeEndsWithD = (color as string).endsWith('d');
// let log = function(message) {
//     console.log(message);
// }
var doLog = function (message) { return console.log(message); };

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

// let doLog = (message) => console.log(message);

// interface

// let draw = (x:number, y:number, z:number) => {

// }

// interface Point{
// x:number;
// y:number;
// z:number;
//     draw:() => void;
// }

// let drawRectangle = (point:Point) => {

// }

// // draw({x:6 , y:2, z:3});

// drawRectangle = (point:Point) => {
//     point.draw();
// }

// let someFunction = () => {

// }

// drawRectangle({x:1, y:2, z:3, draw:someFunction});

// class Point {

//   constructor(private x?: number, public y?: number, public z?: number) {

//   }

//   private draw = (): any => {
//     console.log("X:" + this.x + " y:" + this.y + " z:" + this.z);
//   };

//   drawRectangle = ():any => {
//     console.log(`drawing rectangle`);
//     this.draw();
//   };

//   get X() {
//     return this.x;
//   }

//   set X(value) {
//     this.x = value;
//   }

// }

// let shape = new Point(1);
// shape.draw();

// let shape2 = new Point(2);
// shape2.draw();

// import { Point } from "./point";
// import { Point } from "@angular/core";

// let shape = new Point(1, 2, 3);
// shape.X = 5;
// console.log("X: ", shape.X);

//shape.drawRectangle();

// Constructors

"use script";
// In javascript this will refers to the object
//In this refers to the context, where a piece of code  , such as function body supposed to run.



 console.log(this); //GEC


 function callrajaBabu(){
	console.log('Inside Raja Babu Call', this);
 }

 callrajaBabu();

 function fatherOfFAther(){
	const name = 'bachha';
 }

//  function CalculatSum(){
	// console.log(result);
	// var a = 5;
	// let b = 10;
	// const c = 15;
	// var result = a + b + c;
//  }
// 
//  CalculatSum(5 + 5 +8); //undefined
//   function =>  action === function
//   we write the block of code to perform any action or task , is called function.
//   and we can use it so many times.through calling the function

//  function declaration  

function functionName(){
	// action
}

// write a function to multiply a number with two;

function multiplyByTwo(number){
	var result = number * 2;
	console.log('multByTwo',result);
}
multiplyByTwo(30);
multiplyByTwo(60);
multiplyByTwo(33); // calling function or invoked function


// create a function in which a number is  divide by 3;

function divideByThree(number){
	var result = number / 3;
	return result;
}
var ans = divideByThree(33);
console.log(ans);

var ans2 = divideByThree(66);
console.log(ans2);


// if there is no return in js function it will return undefined


function callme(){
console.log('checkerr');

}

console.log(callme()); // undefined

var result = callme();
console.log('func Call',result); // undefined



// example
// <INTERVIEWWWWWW>
function getName(){
	var b = 'Nargis';
	return
	b; // it will give error bcoz javascript does not execute any code after the return
}

var ans = getName();
console.log('get name',ans);

//another example

function printData(data){
	console.log(data)
}

console.log('print data')
printData("print data")
printData(2);
printData(true);
printData({z:2});
printData([1,2,5]);
printData("Nargis");
printData();

// question :- create a function which will take first argument as a value and second as multiplier you need to return this multiply by two if, there is passed argument otherwise u should considered it 2;

function multiplyByTwoOr2(num , multiplier=5){
 var result = num * multiplier;
 return result;
}

var ans = multiplyByTwoOr2(10);
console.log(ans);

// another example

// <INTERVIEWWWWWW>
function getNumber(){
	return ; '3554122' // after return's semicolon it will not check anything
}

var ans = getNumber();
console.log(ans);


// TYPES OF FUNCTIONS

// 1)  anonymous function :- The function which has no name is called anonymous function. we cannot write anonymous function is like a normal function we have to write it with a variable.
 var a = function(){
	console.log( 'anonymous',"Nargis");
 }

 a();

 // another example

 var c = function getname(){
	console.log('surprise!!!')
 }

console.log(c) // getname function
console.log(c()); // it give both surprise and undefined also 
// console.log(getname); // it will givve error





//   HIGHER ORDER FUNCTION &&&& CALL BACK FUNCTION

//example 1

// here the (multipyThree) function who accept teh other function as a parameter is called HIGHER ORDER FUNCTION
function multipyThree(func , a){ 
	console.log(func);
	var result  = func(30, 30);
	return result*a;
}

function multiplyTwodigit(a, b){
	return a*b;

}
multipyThree(multiplyTwodigit , 30); // here we are passing function as an arguments (multiplyTwodigit), which is called CALL BACK FUNCTION. 



//example 2

 //this function is called HIGHER ORDER FUNCTION.
function a(b){
	console.log(b);
	b();
}


// the  whole function which is call or invoked in (a) is called  call back function..
a(function(){
	console.log("hiiiiiii");
})


///setTimeOut

// setTimeout is a higher order function becoz it accept another function as a parameter
// setTimeout(myfunction(),2000)

//another example

function callBack(){
	console.log("Hey my name is nargis");
}

setTimeout(callBack, 3000)

//function declaration 

function declare(){
	console.log('Hey')
}
function declare(){
	console.log('hey2')
}
console.log(typeof declare);

declare();



//IIFE(immediately Invoked Function)
//The function is called as soon as function is created. this types of function does not need explicit call or invoked.

//syntax
(function(a,b,c){
	console.log("hey i m immediately invoekd function" ,a,b,c);
})(10,20,30); // this is calling of iife...we can call it only at once..we cannot call it many times like other function...thats'why their data is not present in memeory so we can save  memory....


//rtypes of function 
// 1) Call Back function
// 2) Higher order function
// 3) Anonymous function
// 4) function declaration 
// 5) function expression
// 6) return undefined
// 7) IIFE (Immedietely invoked function expression)
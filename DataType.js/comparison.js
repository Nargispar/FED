// comparison b/w string and string

console.log('abc' > 'D'); //true
console.log('a'>'d');     // false
console.log('A' > 'd');   // false
console.log('abc' > 'd')  //false
console.log('dolly' <= 'do'); //false

//comparison between boolean and number
// here first boolean converted into int (number) true = 1, false = 0;

console.log('bollean result start',true < 0); //false
console.log(true > 0); // true
console.log(false <= 0); // true
console.log(false > 1); // false

// String and number
var checker;
var checker2 = undefined;

console.log('checker start',checker); //unde
console.log(checker2); //unde
console.log('dataTypeOf Undefine',typeof(undefined)); //undefined

//if we try to convert undefined into a boolean it will give a FALSE

//null

console.log('typeof null =>',typeof(null)) //object

//diff between null and undefined
//       null  and undefined :-  
// 1)   null is an object and undefined is an undefined datatypes.
// 2)   null is assigned by developer and undefined can be assigned by developer and javascript also give value as undefined when variable not initialised;   
// 

console.log('boolean null =>',Boolean(null));


//Null is an object in nature but not primitive datatype why;

let employee ={};
console.log(employee);
console.log(employee instanceof Object);
console.log(null instanceof Object);

//ABOUT NULL MYTH

//null is primitive data , not an object it is misleading. 
//console.log(null instanceof Object);: This line checks whether null is an instance of Object. However, null is a primitive value and not an object. Therefore, null is not an instance of Object, and the result is false.
// The confusion arises from the fact that when you use the typeof operator on null, it returns 'object', which is somewhat misleading. This behavior is actually a long-standing bug in JavaScript that cannot be fixed without breaking existing code.


// NaN => NaN is considered as a number in javascript its datatype IS A NUMBER 

console.log('NAN is a typeof =>',typeof(NaN)); // number

// when u check a NAN typeOf it will give a number ,,
// but when u check a instance of it will give a false,,
console.log('NaN instanceof =>',NaN instanceof Number); // false
console.log('23 =>',23 instanceof Number); // true

//questions
console.log('questiona nd answer')
console.log(Number('1'));
console.log(Number(false));

console.log(Boolean('false'));
console.log(Boolean(false));
console.log('13'- 11);
console.log(35 + -'3' -false + true +'80');

console.log('true or false')
console.log(true == 1); //true
console.log(false == null); //false
console.log(null == undefined); //true
console.log(undefined == NaN); //false
console.log(undefined == 0); //false
console.log(null <= 1); //true
console.log(null <= 'Hey');
console.log(NaN == false); //false
console.log(undefined == 'undefined'); //false
console.log(null == 'null'); // false
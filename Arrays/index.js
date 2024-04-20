
let array = []; // declaration of array and assigning the empty array
console.log(array);

const array2 = [1,2,2,3,5]; // the is numbers of array.
console.log(array2);

const array3 = ['hello',1,5,'Nargis',8,9,'Perveen']
console.log(array3);

var dataArray = ["Hey", 1,2,3,{},[5,6,'hii']];
console.log(dataArray);


//  NOTE :-
// Array can take all types of value.
// Array is non-primitive data type . And non primitive data type is pass as refernce in memeory in nay of function and at the time of assigment, So when u modiefied the pass value Original array will be modified

function modifiedArray (arr){
	for(var i =0 ;i < arr.length ; i++){
		arr[i] = arr[i]%2 ? true: false;
	}
	console.log(arr);
}
let array4= [1,2,3,4,5,6,7];
modifiedArray(array4); // here aruments array is pass by refernce.

console.log(array4);


// Dynamic length
// Array have dynamic length we can increase the element and decrease the element also through the push and pop.

const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr.length); // 8

const arr2 = [];
arr2.length = 12;
console.log(arr2[0]);
console.log(arr2);


//indexOutOfBoundIndex => in java you will get this error if u try to access the index whicj is greater than length 
// Javascript does not give error if you try to access the index  greater than ir equal to length 
//it will give undefined as output.


 //Map , filter , forEach , reduce , find , findIndex , some  , every  , splice  , slice , shift , unshift , pop , push

// toString()
// Join()
// split()
// push 
// pop
// shift 
// unshift 
// slice 
// splice
// forEach
// reduce
// find
// filter
// Map
// find
// findIndex
// some  
// every


// []=> this will give 0 when we apply any arithmetic operation 
var result  = +[]+ 'Hello' ;
console.log(result);

// parseInt convert first array element into the number
// +operator convert empty array into 0 but it will give NaN IF there is any element inside the array

// In boolean empty array is truthy value 

// (1) push Method -> it will add the elemnet in last
const array6 = [5,6,9,2,3];
array6.push(10); 
console.log(array6);// [5,6,9,2,3,10]

//(2) pop method -> it will remove element from last;
array6.pop();
console.log(array6);//[5,6,9,2,3]


// (3)Join Method

// toString(); // By default behaviour of join

//toString and join both are used to convert array into number of string into there will be the result comma separated 
// but in the case of join this is default behaviour you can choose which separator u want to give

let array01 = [1,2,3];

// array01.join();
// array01.toString();
console.log(array01);
console.log(Boolean([])) 



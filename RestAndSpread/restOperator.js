console.log("what is rest Operator and sread operator");

// rest and spread operator are define by three dots(...data)
// this is the rest operator (rest parameter);

function myFunction(...param){
	console.log(...param);
	let multiply = 1;
	for(let i of param){
		multiply = multiply * i;
	}
}

myFunction(7,8,9,5,4);
myFunction(1,10,10);
myFunction(1,10);



console.log("example of rest");
function exampleRest(a,b,...z){
	console.log(a,b,z);
}
exampleRest(12,3,5,7,8,9,5,7);

// spread operator is judt opposite to the rest operator.

const array = [1,2,3,4,5,6];
console.log(...array);
console.log(array);

const array2 = ['hi','hello','hey','kemchho'];
console.log(...array2);
console.log(array2);
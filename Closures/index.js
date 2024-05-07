// const userName = 'Nargis';
// const OrgName = 'Newton School';
// 
// function outer(){
// 
	// const data1 = 30;
	// const data2 = 40;
	// function inner(){
		// 
		// const innerData = 50;
		// const innerData2 = 60;
	// }
// 
// }
// outer();

function increament(){
	let count = 0;
	// function addOne(){
		// count++;
		// return count;
	// }
	// addOne();
	return function(){
		count++;
		return count;
	}
}
var func = increament();
var res = func();
var res1 = func();
var res2 = func();
console.log(res , res1 , res2);

function parent(){
	const name = 'nargis';
	function child(){
		let a = 10;
		let b = 20;
		let c = 30;
		function grandchild(){
			console.log('hey', a, name, b);
		}
		grandchild();
	}child();
}
const parentCall = parent();
console.log(parentCall);

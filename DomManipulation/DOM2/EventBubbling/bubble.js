


function myCar(){
	const res = document.getElementById('mySelect').value;
	document.getElementById('demo').innerHTML = "you selected" + res;
}

const arr = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

const merge = [...arr, ...arr2];
console.log(merge)
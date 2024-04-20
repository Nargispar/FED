// console.log('This is basic of array');

const array = []; // this is empty array
const array2 = [1,2,3,4,5,6,7,9];
console.log(array2); // it will give whole array;

for(let i =0;i<array2.length;i++){
	 console.log(array[i]); //it will also give whole array
}
console.log('for of loop')
 for(let item of array2){
	console.log(item); // it will give whole value.
 }

 console.log('for in loop')
 for(let item in array2){
	console.log(item);
 }

 const array3 = [1,2,3,4,'Nargis','Munazir'];
 console.log(array3);

console.log('using map')
 array3.map(elem =>{
 console.log(elem)
 })

 console.log('using filter')
  const result = array3.filter(elem => {
	console.log(elem);
  })
  

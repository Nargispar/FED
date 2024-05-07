const student = {
	name:"Nargis perveen",
	orgName : "Newton School",
	email:"abc@gmail.com",
	address:"tata",
	"Bank Balance" : '100'
}
var values =  Object.values(student);
console.log(values); //[Nargis perveen , Newton school. abc@gmail.com,tata,100]

var Key = Object.keys(student);
console.log(Key); // [name, orgname,address, email, bank balance]

var result = Object.entries(student);
console.log(result);


console.log(student.email); 
console.log(student['address']);

var addressKey = 'address';
var nameKey = 'name';
console.log(student.nameKey);
console.log(`%c How to get all  the value of object`,'color: yellow; font-size: 20px')

// creating object using object constructor....

var person = new Object({
	name:'Nargis',
	lastname:'Perveen',
	add:'Millat Nagar',
	bank:'HDFC Bank'
});
console.log(person);

var person2  = new Object({name: 'xyz' , lastName: 'rat'});
console.log(person2);

// using forEach in Object...................

var coleague = {
	name:'Nargis',
	email:'nargissp360@gmail.com',
	add:'Hyderabad',
	Designation:'Senior software Eng'
}

var entries = Object.entries(coleague);
console.log(entries); // it will give array of array

entries.forEach((elem, index)=>{
	console.log('elem', elem[0],'value', elem[1]);
	console.log('elem', elem);
})


////////////////How to add the key and update the ley in object/////////////////

var man = {

}
man.name = 'Munazir';
//appending the dynamic key
var key = 'age';
man.key = 26;
man['age'] = 26;
man['bank balance'] = 100;


console.log('before', man);
delete man.age;
delete man.name;
console.log('after',man);



var emlployee = {
	name:'azhar',
	add:'tata',
	age:20,
	deg:'Inter',
	bank:'1cr'
}
 let res = emlployee['name'];
 console.log(res);


 var array = [10,12,23,94,51];

 // loops using in objects

// for .. in => it will give index of object
// for.. of => it will give value of object
// for(let i=0;i<n;i++);
//forEach(callbackFunc, elem);

// we are using for in loop first in array and then it will used in object

for(let index in  array){
	console.log(index, array[index]);
}
// for object

for(let index in emlployee){
	console.log(index, emlployee[index]);
}

// for of loop
var array2 = [5,6,9,8,7];
for(let index of array2){
	console.log(index); // [5,6,9,8,7];
}
var emp = {
	name:'ashraf',
    add:'tata',
    age:20,
    deg:'Inter',
    bank:'1cr'
}

// for(let index of emp){
	// console.log(emp);
// }
// 
// In javascript almost everything is object
// Array are object 
// All except primitive dataTypes are also object
//Object are object.
// number, boolean, String can be object if we can create it with new keywords ,,, ex => new String, new Numbers etc;

//checking typeof all things

function addme(){
	console.log('hey');
}
console.log('function =>', typeof addme); //function.

var array2 = [];
console.log('array =>', typeof array2); // object

const string = new String();
console.log('string =>', typeof string); //object

const num = new Number();
console.log('number =>', typeof num);

const boolean = new Boolean();
console.log('boolean =>', typeof boolean);




function objectExample(){
	const country = 'India';
	console.log('I love my country');
}

objectExample.city = '  jamshedpur';
console.log(objectExample.city); // jamshedpur

delete objectExample['city'];
console.log(objectExample.city); // undefined


objectExample.cityNames = ['delhi','kolkata','Mumbai','banglore','Hyderabad'];

console.log(objectExample.cityNames);

//// spread operator in Object/////////////////////////

var empl = {
	name:'NArgis',
	roll:1,
	sub:'Maths',
	Designation:'senior software dev',
	salary:12,
}

var spreadEmpl = {...empl}; // deep copy of object , if not nested object.
console.log(spreadEmpl);


// Example of Nested Loops......................................


var students = {
	name:"Nargis",
	address :{
		country:{
			state:{
				city:{
					District:{
						pin:{
							area:{
								landMark:{
									House_No: 187-425-78/4
								}
							}
						}
					}
				}
			}
		}
	}
}

console.log(students.House_No);

var emp1 = {
	name:"Nargis",
	address:{
		value:'Hyderabad',
		area:{

		}
	}
}

console.log(emp1.address.value);


// how to update the object


emp1.address.value = "Aao kabhi haveli pr";

console.log(emp1.address.value);


const BscStudent = {
	...empl,
	gender:'female',
	rank:'first'
}
console.log(...BscStudent.gender);

var cseStudent = {
	name1:"Munazir",
	class1:"Phd",
	Designation1:"Doctor",
	rank1:'first',
	gender1:'male',
	address1:'Hyd'

}

const mergeStudent = {...cseStudent , ...BscStudent};
console.log(mergeStudent);

const  area = {
	a:{
		b:{
			c:{
				d:{
					e:{
						value:'NAr',
					}
				}
			}
		}
	}
}
console.log('before updating', area.a.b.c.d.value);
area.a.b.c.d.value = 'dddd';

console.log('after updating',area.a.b.c.d.value);

clg

function UserName(firstName, lastName, age){
	const user = {
		firstname : firstName,
		lastname:lastName,
		age:age

	}
	return user;
}
function UserName(firstname, lastname, age){
	const user = {
		firstname,
		lastname,
		age

	}
	return user;
}
//encapsulation

function capsule(){
	const person = {
		name:"NArgis",
		add:"Hyd",
		age:23,
		getMore: function abc(){
			console.log('Hey i m in capsule')
		}

	}
	return person;
}
let res = capsule();
console.log(res);



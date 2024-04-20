

function main(){
	const res = document.getElementById('heading');
	res.innerText = 'My name is Nargis';
	res.style.fontSize = '40px'
	res.style.color = 'red'	

}
function checked(){
	const element = document.getElementsByClassName('check');
	console.log(element);
	for(let node of element){
		node.innerText = 'hiii';
	}
	
}

function checked2(){
	const element2 = document.getElementById('checking');
	console.log(element2);
	// for(let node2 of element2){
		element2.innerText = 'same';
	}


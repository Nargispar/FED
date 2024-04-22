main();
function main(){
	let divNode = document.createElement('h2');
	divNode.innerText = 'Using innerText'
	divNode.textContent = 'Using textContent'
	// console.log(divNode);
	document.body.appendChild(divNode);
	
}

// createElement();
// function createElement(){
	// const Node = document.createElement('div');
	// const Node2 = document.createElement('span');
	// Node.innerText = 'Hello I m Nargis'
	// Node2.textContent = 'Hello everyOne'
	// document.body.appendChild(Node);
	// document.body.appendChild(Node2);
	// 
// }
// 
// createbox();
// function createbox(){
	// const box = document.createElement('div');
	// box.style.padding = '40px'
	// box.style.backgroundColor = 'red'
	// box.style.color = 'white'
	// box.style.border = '2px dotted greenYellow'
	// box.innerText = 'Hey How Are You'
	// box.style.textAlign = 'center'
	// box.style.fontSize = '40px'
    // document.body.appendChild(box);
	// 
// }
// 
box1();
function box1 (){
	let under = box2();
	const boxx1 = document.createElement('div');
	boxx1.style.height = '400px'
	boxx1.style.width = '400px'
	boxx1.style.padding ='70px'
	boxx1.style.margin = '10px'
	boxx1.style.backgroundColor ='black'
	boxx1.style.border ='3px solid red'
	boxx1.appendChild(under);
	document.body.appendChild(boxx1)

}

box2();
function box2 (){
	const boxx2 = document.createElement('div');
	boxx2.style.height ='80px'
	boxx2.style.width ='80px'
	boxx2.style.backgroundColor ='yellow'
	boxx2.style.border ='3px solid blue'
	return boxx2
}

bigBox();
function bigBox(){
	const bigBox = document.createElement('div');
	bigBox.style.height = '500px'
	bigBox.style.width = '500px'
	bigBox.style.padding = '20px'
	bigBox.style.margin = '20px'
	bigBox.style.borderRadius = '50%'
	bigBox.style.backgroundColor = 'red'
	const small = smallBox();
	bigBox.appendChild(small);
	document.body.appendChild(bigBox);

}

function smallBox(){
	const smallBox = document.createElement('div');
	smallBox.style.height = '100px'
    smallBox.style.width = '100px'
    smallBox.style.padding = '20px'
    smallBox.style.margin = '20px'
	smallBox.style.borderRadius = '50%'
    smallBox.style.backgroundColor = 'green'
	smallBox.style.marginTop = '35%'
    smallBox.style.marginLeft = '35%'
	const mini = miniBox();
	smallBox.appendChild(mini);
	return smallBox;

}
function miniBox(){
	const miniBox = document.createElement('div');
	miniBox.style.height = '50px'
    miniBox.style.width = '50px'
	// miniBox.style.justifyContent = 'center'
	// miniBox.style.alignItems = 'center'
	// miniBox.style.display = 'flex'
	miniBox.style.marginTop = '30%'
	miniBox.style.marginLeft = '30%'
    // miniBox.style.padding = '2px'
    // miniBox.style.margin = '2px'
	miniBox.style.borderRadius = '50%'
	miniBox.innerText = 'center'
	miniBox.style.color = 'white'
    miniBox.style.backgroundColor = 'black'
	miniBox.style.textAlign = 'center'
	return miniBox;

}

//...............................................
circle();
function circle(){
	const bigCircle = document.createElement('div');
	bigCircle.style.height = '400px'
	bigCircle.style.width = '400px'
	bigCircle.style.backgroundColor = 'red'
	bigCircle.style.border = '2px solid blue'
	bigCircle.style.borderRadius = '50%'
	const med = mediumCircle();
	bigCircle.appendChild(med);
	document.body.appendChild(bigCircle);

}


function mediumCircle(){
	const medCircle = document.createElement('div');
	medCircle.style.height = '200px'
	medCircle.style.width = '200px'
	medCircle.style.backgroundColor = 'black'
	medCircle.style.border = '2px solid blue'
	medCircle.style.borderRadius = '50%'
	medCircle.style.margin = 'auto'
	// document.body.appendChild(medCircle);
	return medCircle;

}

function smallCircle(){
	const smCircle = document.createElement('div');
	smCircle.style.height = '200px'
	smCircle.style.width = '200px'
	smCircle.style.backgroundColor = 'black'
	smCircle.style.border = '2px solid blue'
	smCircle.style.borderRadius = '50%'
	smCircle.style.margin = 'auto'
	// document.body.appendChild(medCircle);
	return smCircle;

}
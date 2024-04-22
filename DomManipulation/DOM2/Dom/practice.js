
// // main();
// // function  main () {
// //    const bigCircleNode =  createBigCircle();
//     // const mediumCicrleNode =  createMediumCircle();
//     // const SmallCircleNode= createSmallCircle();
//     // mediumCicrleNode.appendChild(SmallCircleNode)
//     // bigCircleNode.appendChild(mediumCicrleNode)
// // }

// function createBigCircle () {
//     const divNode =  document.createElement('div'); // creating node 
//     divNode.classList.add('circle'); // this is how you can add classname in dynamic css
//     divNode.classList.add('big');
//     // adding this node into the body
//     document.body.appendChild(divNode) // here we have added divNode inside the body
// 	const mediumCicrleNode =  createMediumCircle();
//     return divNode;

// }

// function createMediumCircle () {
//     const divNode =  document.createElement('div'); // creating node 
//     divNode.classList.add('circle'); // this is how you can add classname in dynamic css
//     divNode.classList.add('medium');
// 	bigCircleNode.appendChild(mediumCicrleNode)
//     return divNode
// }

// function createSmallCircle () {
//     const divNode =  document.createElement('div'); // creating node 
//     divNode.classList.add('circle'); // this is how you can add classname in dynamic css
//     divNode.classList.add('small');
//     divNode.textContent = 'Center';
//     divNode.classList.add('text');
// 	mediumCicrleNode.appendChild(SmallCircleNode)
//     return divNode
// }
 function changeCircleColor(e){
    const change = document.getElementById('input1')
    change.style.background = e.target.value;
 }
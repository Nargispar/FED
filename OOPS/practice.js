// function call(...array){
// 
// }
// console.log(call.length); //0
// 
// var a = [1,2,3];
// a[10] = 99;
// 
// console.log(a[6]); //undefined
// console.log(a.length); // 11
// 
// 
// var z = 1, y = z = typeof y;
// console.log(y);
// 
// 
// console.log(typeof absvgytdhkd);

//hoisting

var foo = 1;
(function call(foo){
	console.log(foo)
	foo = 2;
	// console.log(window.foo);
	console.log(foo);
	var foo = 3;
	console.log(foo);
	// console.log(window.foo);
})();

// let dev = 'Newton';
// 
// function a(){
	// let dev = 'checker';
	// return function(){
		// console.log(dev);
	// }
// }
//  dev = "let_learn";
// a()()
// 
//Another example

// var obj ={
	// a:"Vishal",
	// b:"Sharma",
	// func:(function foo(){return this.a;},function bar(){return this.b;})
// }
// console.log(obj.func);
// 
var obj = {
    a: "Vishal",
    b: ("Sharma"), //  Raj 
    func: (function foo(){ return this.a; }, function bar(){ return this.b;})
  }
  console.log(obj.func()) 

  const likeMe = ('hey','i m cool','great');
  console.log(likeMe);

  var a = "Nargis";
  let b = "perveen";

  console.log(this.a);
  console.log(this.b);

  function call1(a,b,undefined,undefined){
	console.log('vishal sharma');
  }
  console.log(call1.length);
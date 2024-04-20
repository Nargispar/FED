
const students  = [{ name: 'Chapri' ,hindi: 40 , english: 60,math: 50, chemistry:90}, { name: 'Chaprayin' ,hindi: 50 , english: 50,math: 30, chemistry:60},{ name: 'Legend' ,hindi:33 , english: 33,math: 33, chemistry:33} , { name: 'Ultra Legend' ,hindi: 0 , english: 0,math: 0, chemistry:0} , { name: 'Thanos' ,hindi: 100 , english: 100,math: 100, chemistry:100}]

const studentsResult  =  students.map();


studentsResult =  [{ name: 'Chapri' ,hindi: 40 , english: 60,math: 50, chemistry:90, result: 'PASS'}, { name: 'Chaprayin' ,hindi: 50 , english: 50,math: 30, result: 'Failed', chemistry:60},{ name: 'Legend' ,hindi:33 , english: 33,math: 33, chemistry:33, result: 'Pass'}  , { name: 'Ultra Legend' ,hindi: 0 , english: 0,math: 0, chemistry:0} , { name: 'Thanos' ,hindi: 100 , english: 100,math: 100, chemistry:100}]

const studentResult = students.map(students =>{
	let totalMarks = students.hindi + students.english + students.math + students.chemistry;
})
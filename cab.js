// var obj={num:3}
// // function addToThis(a,b,c)
// // {
// //   return this.num+a+b+c;
// // }


// // var arr=[2,4,6]
// // // console.log(addToThis.apply(obj,arr));
// // // console.log(addToThis.call(obj,3));
// // var bound=addToThis.bind(obj);
// console.log(bound( 2,4,6));



// var obj={age:20};
// function age()
// {
//   return this.age;
// }

// var bound=age.bind(obj);
// console.log(bound());


//=============bind===========

// let multiply=function(x,y)
// {
//     console.log(x*y);
// }

// let multiplyByTwo=multiply.bind(this,2);
// multiplyByTwo(3);


//===============closures=============

// let multiply=function(x,y)
// {
//   return function y()
//   {
//     return function z()
//     {
//       console.log(x*y);
//     }
//   }
// }
// let multiplyByTwo=multiply(2);
// multiplyByTwo(3);

  
  
  
  
  
  
function fun1()

{
  console.log('fun 1 is called');

return function fun2()

{
  console.log('fun 2 is called');

  return function fun3()

{

	console.log('fun 3 is called');

}

}

}

fun1()()();
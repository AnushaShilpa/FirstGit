var obj={num:3}
// function addToThis(a,b,c)
// {
//   return this.num+a+b+c;
// }


// var arr=[2,4,6]
// // console.log(addToThis.apply(obj,arr));
// // console.log(addToThis.call(obj,3));
// var bound=addToThis.bind(obj);
console.log(bound( 2,4,6));



var obj={age:20};
function age()
{
  return this.age;
}

var bound=age.bind(obj);
console.log(bound());
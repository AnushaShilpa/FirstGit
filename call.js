


// document.getElementById('clickme').addEventListener("click",function DOMCONTENTLOADED()
// {
//   console.log("DOM LOADEDED")
// })


const studentobj = 
{

	'yash': 26,

	'vaibhav': 24,

	'rajesh' : 25,

	};

  // let sum=0;
  // const arr2=Object.values(studentobj)
  //  //console.log(arr2)
  // arr2.forEach((arr)=>{
  //   //console.log(arr);
  //   sum+=arr;
     
  // });
 // console.log(sum);
// 
function findaverageage(studentObj)
{
  const keys=Object.keys(studentObj);
  let totalage=0;
  for(const student of keys)
  {
        totalage+=studentObj[student];
  }

  //console.log(totalage)
  averageAge=totalage/keys.length;



   return averageAge;
}
console.log(findaverageage(studentobj));




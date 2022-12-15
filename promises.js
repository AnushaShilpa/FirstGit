// const posts=[
//   {title:"post one",body:"this is post one",createdAT:new Date().getSeconds()},
//   {title:"post two",body:"this is post two",createdAT:new Date().getSeconds()}
// ];

// function getPosts()
// {
  
//     setInterval(() => {
//       let output='';
//       for(let i=0;i<posts.length;i++) 
//      {
//       output +=`<li>${posts[i].title},${posts[i].body}, last edited ${(new Date().getSeconds() - posts[i].createdAT)/1000} seconds ago</li>`;
//     }
//     document.body.innerHTML=output;
//     }, 2000);   
  
// }

// getPosts();

// function createPost(post)
// {
  
//   return  new Promise((resolve, reject)=>
//   {
//     setTimeout(()=>
//     {
//       posts.push({...post,createdAT:new Date().getSeconds()});
//       const error=false;
//       if(!error)
//       {
//         resolve();
//       }
//       else{
//         reject("Error:Something Went Wrong");
//       }
//     },1000)

//   });
  
// }


// // function deletePost()
// // {
// //     return new Promise((resolve, reject)=>{
// //       setTimeout(()=>
// //       {
// //         if(posts.length >0)
// //         {
// //           resolve(posts.pop());
// //         }
// //         else{
// //           reject("Array is empty now");
// //         }
        
      
// //       },2000);
// //     });

// // }


// createPost({title:"post three",body:"this is my third post"})
// createPost({title:"post four",body:"this my  fourth post"})
// .then(()=>{
//   getPosts();
//   deletePost().then(()=>{
//     getPosts();
//     deletePost().then(()=>{
//       getPosts();
//       deletePost().then(()=>{
//         getPosts();
//         deletePost().then(()=>{ 
//           getPosts();
//           deletePost().then(()=>{})
//           .catch((err)=>{
//             console.log("inside the catch block",err);
//            })
        
//         })
//       })
//     })

//   })
// })



// // const promise1= Promise.resolve("hello World");
// // const promise2= 10;
// // const promise3= new Promise((resolve, reject)=>
// //     setTimeout(resolve,2000,'GoodBye')
// // );
// // Promise.all([promise1,promise2,promise3]).then(value => console.log(value));



async function  p()
{
try
{
  console.log("a");
  console.log("b");
  const message1= await new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve(console.log("buyimg play station"),1000))});

   // console.log(message1)
   const message2=await new Promise ((resolve ,reject)=>{
      setTimeout(()=> resolve(console.log("palying")),500)});
  console.log("enjoying");
}
catch(err)
{
  console.log(err)
}

}
p();



const posts=[
  {title:"post one",body:"this is post one",createdAT:new Date().getSeconds()},
  {title:"post two",body:"this is post two",createdAT:new Date().getSeconds()}
];

let intervalid=0;

function getPosts()
{
    
    clearInterval(intervalid)
    setInterval(() => {
      let output='';
      for(let i=0;i<posts.length;i++) 
     {
      output +=`<li>${posts[i].title}, last edited ${(new Date().getSeconds()- posts[i].createdAT)/1000} seconds ago</li>`;
    }
    document.body.innerHTML=output;
    }, 2000);   
  
}

getPosts();

function createPost(post,callback)
{
  setTimeout(()=>{
    posts.push({...post,createdAT:new Date().getSeconds()})
    callback();
  },2000)
}

// function create4thPost(post ,callback)
// {
//   setTimeout(()=>{
//     posts.push({...post,createdAT:new Date().getTime()})
//     callback();

//   },2000)

// }
// function creatnextPost(post,callback)
// {
//   setTimeout(()=>{
//     posts.push({...post,createdAT:new Date().getTime()})
//     callback();

//   },2000)

// }
// function lastEditedInSecondsAgo()
// {
   
// }

createPost({title:'post three',body:'this is post three'},getPosts)
createPost({title:'post four',body:'this our fourth post'},getPosts)
createPost({title:'post five',body:'this our fifth post'},getPosts)

// var head=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// // header.style.borderBottom ='solid 3px #000';
 
var title=document.getElementById('heading');
title.style.color='#006f00';
title.style.textTransform='uppercase';


// const addItems = document.querySelector(".title");
// addItems.style.textTransform = "uppercase";
// addItems.style.color = "green";

// const third=document.getElementById('items');
// third.children[2].style.backgroundColor="#00ff00";
// third.style.fontFamily='solid'
// third.style.color='#0000ff'
// third.style.fontSize='25px'

// var items=document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor="#00ff00"
// items.style.fontWeight="bold";
// items.style.fontSize="25px"

// const li=document.getElementsByTagName('li');
// li[2].style.backgroundColor="#00ff00"
// li[1].style.fontWeight="bold";
// li.style.fontSize="25px"

// const item =document.querySelector('.list-group-item');
// item.nextElementSibling.style.backgroundColor="green";


// const thirditem =document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display ="None";


// const items =document.querySelectorAll('.list-group-item');
// items[1].style.backgroundColor="green";

// const items=document.querySelectorAll('li:nth-child(odd)');


// for(var i=0;i<items.length;i++)
// {
//   items[i].style.backgroundColor="green";
// }


const itemlist= document.querySelector('#items');
console.log(itemlist.parentElement);
console.log(itemlist.lastElementChild);
console.log(itemlist.lastChild);
console.log(itemlist.firstElementChild);
console.log(itemlist.firstChild);
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);
console.log(itemlist.previousSibling);
console.log(itemlist.previousElementSibling);
console.log(itemlist.childNodes);


const newDiv = document.createElement("div");
newDiv.className="hello";
newDiv.id="heelo";
newDiv.setAttribute('title','hello div');
const newdivtext= document.createTextNode('hello world');
newDiv.appendChild(newdivtext);
 const header=document.querySelector('header .container');
 const h1=document.querySelector('header h1');
 header.insertBefore(newDiv, h1);

 const li=document.createElement('li');
 

 li.className="hello";
 const content=document.createTextNode('Hello world');
 li.appendChild(content);

  const header=document.querySelector('#items');
  // const ul=document.querySelector('li .list-group-item');
  header.insertAdjacentElement("afterbegin",li);



  





//  console.log(li);
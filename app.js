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
// item.nextElementSibling.style.backgroundColor="#00ff00";


// const thirditem =document.querySelector('.list-group-item:nth-child(3)');
// thirditem.style.display ="None";


const items =document.querySelectorAll('.list-group-item');
items[1].style.backgroundColor="#00ff00";

const items=document.querySelectorAll('li:nth-child(odd)');


for(var i=0;i<items.length;i++)
{
  items[i].style.backgroundColor="#00ff55";
}
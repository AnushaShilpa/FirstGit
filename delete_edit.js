const form=document.getElementById('addForm');
const itemList=document.getElementById ('items');

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);



// console.log(ul);
function addItem(e)
{
  e.preventDefault();
  const newitem=document.getElementById('item').value;
  const li=document.createElement('li');
  li.className="list-group-item";
  li.appendChild(document.createTextNode(newitem));
  itemList.appendChild(li);

  const deletbtn=document.createElement('button');
  const editbtn=document.createElement("button");
  editbtn.className='btn btn-primary btn-sm float-right';
   editbtn.appendChild(document.createTextNode('e'));
  deletbtn.className="btn btn-danger btn-sm float-right delete";
  deletbtn.appendChild(document.createTextNode('X'));
  li.insertAdjacentElement("beforeend",deletbtn);
  li.insertAdjacentElement("beforeend",editbtn);

}

function removeItem(e)
{
   if(e.target.classList.contains('delete'))
   {
    if(confirm("Are You Sure?"))
    {
       const li=e.target.parentElement;
       itemList.removeChild(li);
    }

   }

  
}
// const ul=document.querySelector("#items");
// const li=ul.querySelectorAll(".list-group-item");
// const editbtn=document.createElement("button");
// editbtn.className='btn btn-primary btn-sm float-right';
// editbtn.appendChild(document.createTextNode('e'));
// // li.append(editbtn);
// for(let i=0;i<li.length;i++)
// {
//   li[i].appendChild(editbtn);

// }



// const li=document.querySelector(".list-group-item");
// const editbtn=document.createElement("button");
// editbtn.className='btn btn-primary btn-sm float-right';
// editbtn.appendChild(document.createTextNode('e'));
// li.insertAdjacentElement("beforeend",editbtn);
// itemList.appendChild(li);







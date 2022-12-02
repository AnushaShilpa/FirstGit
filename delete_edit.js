const form=document.getElementById('addForm');
const itemList=document.getElementById ('items');
const filter= document.getElementById('filter');

 

form.addEventListener('submit',addItem);

itemList.addEventListener('click',removeItem);

filter.addEventListener('keyup', filterItems);

// console.log(ul);
function addItem(e)
{
  e.preventDefault();
  const newitem=document.getElementById('item').value;
  const newitem1=document.getElementById('item1').value;
  const li=document.createElement('li');
  li.className="list-group-item";
  li.appendChild(document.createTextNode(newitem));
  li.appendChild(document.createTextNode( newitem1));
  itemList.appendChild(li);

  const deletbtn=document.createElement('button');
  const editbtn=document.createElement("button");
  editbtn.className='btn btn-primary btn-sm float-right';
   editbtn.appendChild(document.createTextNode('edit'));
  deletbtn.className="btn btn-danger btn-sm float-right delete";
  deletbtn.appendChild(document.createTextNode('X'));
  li.insertAdjacentElement("beforeend",deletbtn);
  li.insertAdjacentElement("beforeend",editbtn);

}

///removeitem
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

/// filter

function filterItems(e){
   // convert text to lowercase
   const text = e.target.value.toLowerCase();
   

   // Get lis
   const items = itemList.querySelectorAll('li');
   // Convert to an array
   Array.from(items).forEach(function(item){
      const itemName = item.firstChild.textContent;
      const description=item.children[1].textContent;

     if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1 ) {
       item.style.display = 'block';
     } else {
       item.style.display = 'none';
     }
   });
 }












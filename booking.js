const form=document.getElementById('addForm');
form.addEventListener('submit',addItem);

function addItem(e)
{
  
  e.preventDefault();
  const fname=document.getElementById('fname').value;
  const Email=document.getElementById('Email').value;
  const PHNO=document.getElementById('PHNO').value;
  localStorage.setItem('fname',fname);
  localStorage.setItem('Email',Email);
  localStorage.setItem('PHNO',PHNO);

  
}
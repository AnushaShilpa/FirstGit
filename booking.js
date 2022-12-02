const form=document.getElementById('addForm');
form.addEventListener('submit',addItem);

function addItem(e)
{
  
  e.preventDefault();
  const fname=document.getElementById('fname').value;
  const Email=document.getElementById('Email').value;
  const PHNO=document.getElementById('PHNO').value;
  // localStorage.setItem('fname',fname);
  // localStorage.setItem('Email',Email);
  // localStorage.setItem('PHNO',PHNO);


  const details=
  {
    fname:fname,
    Email:Email,
    PHNO:PHNO

  }

  const my_obj=JSON.stringify(details);
  localStorage.setItem('details',my_obj)
  
}
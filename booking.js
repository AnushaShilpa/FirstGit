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
  localStorage.setItem(details.Email,JSON.stringify(details));
  

  showuser(details);
}

function showuser(user)
{
  const parentNode=document.getElementById('list');
  const childHTML= `<li>${user.fname},${user.Email}</li>`;
  
  parentNode.innerHTML=parentNode.innerHTML+childHTML;
 
}


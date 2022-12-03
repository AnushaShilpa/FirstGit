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
  const details =
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
  
 
  const childHTML= `<li id= ${user.Email}>${user.fname},${user.Email}
              <button onclick=editUser('${user.Email}','${user.fname}','${user.PHNO}') class="btn btn-dark text-white btn-sm float-right">Edit</button>
              <button onclick=deleteUser('${user.Email}') class="btn btn-danger text-white btn-sm float-right"> delete</button>
                                      </li>`;// we can call click like this also
  parentNode.innerHTML=parentNode.innerHTML+childHTML;
  
}

function deleteUser(Email)
{
  localStorage.removeItem(Email);
  removeUSerFromScreen(Email);
}

function removeUSerFromScreen(Email)
{

  const parentNode=document.getElementById('list');
  const child=document.getElementById(Email);
  parentNode.removeChild(child);
}

function editUser(Email,fname,PHNO)
{

  document.getElementById('fname').value=fname;
  document.getElementById('Email').value=Email;
  document.getElementById('PHNO').value=PHNO;

  deleteUser(Email);


}





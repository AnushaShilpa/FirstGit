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
  axios.post("https://crudcrud.com/api/4e23d60be62f48a18362c4/appointmentData",details)
  .then(res=>{
    showuser(res.data)
    console.log(res)
  })
  .catch(err=>{
      document.body.innerHTML=`<li>Something went wrong</li>`
    console.error(err)
  })
// localStorage.setItem(details.Email,JSON.stringify(details));
  
}

function showuser(user)
{
  const parentNode=document.getElementById('list');
  
 
  const childHTML= `<li id= ${user.Email}>${user.fname}${user.Email}
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





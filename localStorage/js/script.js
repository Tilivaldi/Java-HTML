let usersArray = [];
let name ="";
  let surname="";
  let country="";
  let phone="";
  
// localStorage.clear(); при загрузке нполнение из локалсторадж


function addUser() {

  name = document.getElementById("name").value;
  surname = document.getElementById('surname').value;
  country = document.getElementById('country').value;
  phone = document.getElementById('phone').value;
  
  let newUser = {};
  newUser.name = name;
  newUser.surname = surname;
  newUser.country = country;
  newUser.phone = phone;

  usersArray.push(newUser);

  updateStorage();
}

function updateStorage() {
  localStorage.form = JSON.stringify(usersArray);
}


function initArray(){
  if(localStorage.form != null){
    usersArray = JSON.parse(localStorage.form);
  }
}

function saveToDraft(){
  let name = document.getElementById("name").value;
  let surname = document.getElementById('surname').value;
  let country = document.getElementById('country').value;
  let phone = document.getElementById('phone').value;
  
  let newUser = {};
  newUser.name = name;
  newUser.surname = surname;
  newUser.country = country;
  newUser.phone = phone;

  usersArray.push(newUser);

  updateStorage();

  
}

if (localStorage.getItem(form)!=null){
  let userDraft = JSON.parse(localStorage.getItem(form));
  document.getElementById("name").value = userDraft.name;
}
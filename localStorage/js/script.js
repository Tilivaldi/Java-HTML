let usersArray = [];
let id=0;
let SaveToDraft = 0;
let name = "";
let surname = "";
let country = "";
let phone = "";
// localStorage.clear(); при загрузке нполнение из локалсторадж

function initArray() {
  if (localStorage.form != null) {
    usersArray = JSON.parse(localStorage.form);
  }
  console.log(SaveToDraft);
  let userNewArray = JSON.parse(localStorage.form)
  let count = 0;
  for (let key in userNewArray) {
    count++
  }  
  
  document.getElementById("name").value = userNewArray[count-1].name;
  document.getElementById("surname").value = userNewArray[count-1].surname;
  document.getElementById("country").value = userNewArray[count-1].country;
  document.getElementById("phone").value = userNewArray[count-1].phone;
  // if (SaveToDraft===1){
  //   let userNewArray = JSON.parse(localStorage.form)
  //   let count = 0;
  //   for (let key in userNewArray) {
  //     count++
  //   }  
    
  //   document.getElementById("name").value = userNewArray[count-1].name;
  //   document.getElementById("surname").value = userNewArray[count-1].surname;
  //   document.getElementById("country").value = userNewArray[count-1].country;
  //   document.getElementById("phone").value = userNewArray[count-1].phone;
  // }
  
}

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
  newUser.id=id;
  usersArray.push(newUser);
  id++;
  updateStorage();
}

function updateStorage() {
  localStorage.form = JSON.stringify(usersArray);
}



function saveToDraft() {

  
  name = document.getElementById("name").value;
  surname = document.getElementById('surname').value;
  country = document.getElementById('country').value;
  phone = document.getElementById('phone').value;

  let newUser = {};
  newUser.name = name;
  newUser.surname = surname;
  newUser.country = country;
  newUser.phone = phone;
  newUser.id=id;
  usersArray.push(newUser);
  id++;
  SaveToDraft = 1;
  updateStorage();


}










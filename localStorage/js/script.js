let users = []; 
// localStorage.clear();
    function addUser(){
      const formElement = document.getElementById('form1');
      var forms = document.forms;
      
      let name = document.getElementById('name');
      let surname = document.getElementById('surname');
      let country = document.getElementById('country');
      let phone = document.getElementById('phone');

 

      let newUser = {};

      newUser.name = name;
      newUser.surname = surname;
      newUser.country = country;
      newUser.phone = parseInt(phone); 

      users.push(newUser); 

      updateStorage(); //обновляем localStorage после изменения массива

      updateUserList();
      function updateStorage(){

        localStorage.users = JSON.stringify(users);
  
      }

    }


let users = [

  {name: "Aibek", login: "aibek01", password: "ai123"},

  {name: "Ilyas", login: "ilyas05", password: "il123"},

  {name: "Eldar", login: "eldar07", password: "el123"}

];

 

// сперва переведем в json формат

let jsonValue = JSON.stringify(users);

console.log('\n--- after array to JSON ---');

console.log(jsonValue);

 

// затем заново преобразуем в массив объектов

let usersArray = JSON.parse(jsonValue);

console.log('\n--- after JSON to array ---');

 

// выведем данные массива

for(let u of usersArray){

        console.log('name: ' + u.name + ' login: ' + u.login);

}
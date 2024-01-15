const form = document.querySelector('form')
let usersArray = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
localStorage.setItem('users', JSON.stringify(usersArray))
const data = JSON.parse(localStorage.getItem('users'))
const liMaker = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

form.addEventListener('submit', function(e) {
  e.preventDefault()
  usersArray.push(input.value)
  localStorage.setItem('users', JSON.stringify(usersArray))
  liMaker(input.value)
  input.value = ''
})
data.forEach(item => {
  liMaker(item)
})

function addUser(){
  localStorage.clear()
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild)
  }
}
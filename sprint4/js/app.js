// Простой объект для хранения пользователей
const users = [
    { email: 'user@example.com', password: 'password123'},
    // Добавьте других пользователей по аналогии
];

// Функция для авторизации пользователя
function login(email, password) {
    const user = users.find(u => u.email === email && u.password === password);
    return user;
}

// Функция для сохранения текущего пользователя в localStorage
function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

// Функция для получения текущего пользователя из localStorage
function getCurrentUser() {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
}

// Функция для отображения информации о пользователе на странице профиля
function displayUserProfile() {
    const user = getCurrentUser();
    if (user) {
        const profileInfo = document.getElementById('profileInfo');
        profileInfo.innerHTML = `<p>Email: ${user.email}</p>
                                  <p>Name: ${user.name}</p>
                                  <p>Country: ${user.country}</p>
                                  <p>Birthday: ${user.birthday}</p>`;
    }
}

// Инициализация отображения информации о пользователе при загрузке страницы профиля
displayUserProfile();

// Обработчик формы входа
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const user = login(email, password);
    if (user) {
        // Если вход успешен, перейти на страницу профиля
        showProfile(user);
        updateMenu(user.name);
        window.location.href = 'profile.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
});

// Функция для обновления меню после авторизации
function updateMenu(userName) {
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const tweetsLink = document.getElementById('tweetsLink');

    if (userName) {
        // Если пользователь авторизован, меняем Login на имя пользователя
        loginLink.textContent = userName;
        registerLink.style.display = 'none'; // Скрываем Register, так как пользователь уже зарегистрирован
    } else {
        // Если пользователь не авторизован, возвращаем Login и показываем Register
        loginLink.textContent = 'Login';
        registerLink.style.display = 'inline-block';
    }
}

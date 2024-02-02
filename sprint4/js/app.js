
const users = [
    { email: 'tilvaldi@mail.ru', password: '123', name: 'User Name', country: 'Kazakhstan', birthday: '1990-01-01' },
   
];

function getCurrentUser() {
    const userString = localStorage.getItem('currentUser');
    return userString ? JSON.parse(userString) : null;
}

function setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

function updateMenu() {
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const tweetsLink = document.getElementById('tweetsLink');
    const profileLink = document.getElementById('profileLink');

    if (loginLink && registerLink && tweetsLink && profileLink) {
        const currentUser = getCurrentUser();

        if (currentUser) {
            if (loginLink.style) loginLink.style.display = 'none';
            if (registerLink) registerLink.textContent = 'Logout';
            if (tweetsLink) tweetsLink.style.display = 'inline-block';
            if (profileLink) profileLink.style.display = 'inline-block';
        } else {
            if (loginLink && loginLink.style) loginLink.style.display = 'inline-block';
            if (registerLink) registerLink.textContent = 'Register';
            if (tweetsLink) tweetsLink.style.display = 'none';
            if (profileLink) profileLink.style.display = 'none';
        }
    }
}


function checkAuthentication() {
    const user = getCurrentUser();

    if (window.location.pathname.endsWith("index.html")) {
        const loginForm = document.getElementById('loginForm');

        if (loginForm) {
            loginForm.addEventListener('submit', function (event) {
                event.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    setCurrentUser(user);  
                    updateMenu();  
                    window.location.href = 'profile.html';  
                } else {
                    alert('Invalid email or password. Please try again.');
                }
            });
        }
    }

  
    if (user && window.location.pathname.endsWith("profile.html")) {
        displayUserProfile();
    } else {
        updateMenu();
    }
}

checkAuthentication();

function logout() {
    localStorage.removeItem('currentUser');  
    updateMenu(); 
    window.location.href = 'index.html';  
}


function displayUserProfile() {
    const user = getCurrentUser();
    const profileInfo = document.getElementById('profileInfo');

    if (profileInfo && user) {
        profileInfo.innerHTML = `<p>Email: ${user.email}</p>
                                  <p>Name: ${user.name}</p>
                                  <p>Country: ${user.country}</p>
                                  <p>Birthday: ${user.birthday}</p>`;
    }
}
displayUserProfile();

function registerUser(email, password, name, country, birthday) {
    const newUser = { email, password, name, country, birthday };
    users.push(newUser);
    setCurrentUser(newUser);
}


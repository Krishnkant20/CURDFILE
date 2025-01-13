// Show Signup form
function showSignup() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}

// Show Login form
function showLogin() {
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('signup-container').style.display = 'none';
}

// Signup Logic
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;
    const Email = document.getElementById('signup-email').value;


    // Check if the user already exists in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.some(user => user.username === username)) {
        document.getElementById('signup-message').textContent = 'Username already exists!';
    } else {
        users.push({ username, password });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('signup-message').textContent = 'Signup successful! You can now login.';
    }
});

// Login Logic
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Check if the user exists in localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Redirect to welcome page
        localStorage.setItem('currentUser', username);
        window.location.href = "welcome.html";
    } else {
        document.getElementById('login-message').textContent = 'Invalid username or password!';
    }
});



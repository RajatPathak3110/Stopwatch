// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simple validation: username and password must not be empty
  if (username && password) {
    // For simplicity, assume any non-empty username and password is valid
    // Replace this with real validation logic if needed
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = 'stopWatch.html';  // Redirect to the stopwatch page (index.html)
  } else {
    alert('Please enter both username and password');
  }
});
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', function() {
  localStorage.removeItem('isLoggedIn');  // Remove the login status
  window.location.href = 'login.html';  // Redirect to the login page
});
// login.js
const authorizedUsers = [
  { username: "user1", password: "password1", userId: "user1" },
  { username: "user2", password: "password2", userId: "user2" },
  { username: "admin", password: "admin123", userId: "admin" }
];

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get the username and password from the form
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the user is authorized
  const user = authorizedUsers.find(u => u.username === username && u.password === password);

  if (user) {
    // Store the userId in localStorage (for session tracking)
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userId', user.userId); // Store the user's specific ID

    // Redirect to the user's specific stopwatch page
    window.location.href = `${user.userId}.html`;  // Redirect to user-specific page (e.g., user1.html)
  } else {
    alert('Invalid credentials');
  }
});
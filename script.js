function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Your credentials here
  const correctUsername = "admin";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "todo.html";
  } else {
    document.getElementById("error").innerText = "Invalid name or password.";
  }
}

function checkLogin() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

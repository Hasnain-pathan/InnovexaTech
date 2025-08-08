function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Change these to your own secret credentials
  const correctUsername = "admin";
  const correctPassword = "12345";

  if (username === correctUsername && password === correctPassword) {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "todo.html";
  } else {
    const errorMsg = document.getElementById("error-msg");
    errorMsg.textContent = "Invalid name or password!";
    errorMsg.style.color = "#ff6b6b";
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

document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simple validation
  if (username === "" || password === "") {
    document.getElementById("message").textContent = "Please enter both username and password.";
  } else {
    // Perform login validation (dummy example)
    if (username === "admin" && password === "password") {
      document.getElementById("message").textContent = "Login successful!";
    } else {
      document.getElementById("message").textContent = "Invalid username or password.";
    }
  }
});

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <script>
    function redirectToAnotherWebsite() {
      var email = "example@example.com";
      var password = "password123";
      var enteredEmail = document.getElementById("email").value;
      var enteredPassword = document.getElementById("password").value;

      if (enteredEmail === email && enteredPassword === password) {
        window.location.replace("https://www.example.com");
      } else {
        alert("Incorrect email or password");
      }
    }
  </script>
</head>
<body>
  <h2>Login</h2>
  <form>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
    </div>
    <div>
      <button type="button" onclick="redirectToAnotherWebsite()">Login</button>
    </div>
  </form>
</body>
</html>

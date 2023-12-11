function redirectToAnotherWebsite() {
  var email = "admin@lucid.com";
  var password = "LUCID-ADMIN";
  var enteredEmail = document.getElementById("email").value;
  var enteredPassword = document.getElementById("password").value;

  if (enteredEmail === email && enteredPassword === password) {
    window.location.replace("https://lucid.cyclic.app/");
  } else {
    // Incorrect email or password, do nothing
  }
}

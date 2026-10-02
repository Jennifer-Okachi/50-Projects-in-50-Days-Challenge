const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const terms = document.getElementById("terms").checked;

  if (name === "" || email === "" || password === "" || confirmPassword === "") {
    message.textContent = "Please fill in all required fields.";
    message.style.color = "red";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return;
  }

  if (!terms) {
    message.textContent = "Please agree to the Terms and Conditions.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Registration successful!";
  message.style.color = "green";

  form.reset();
});
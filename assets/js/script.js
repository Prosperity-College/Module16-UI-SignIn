const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitButton = document.querySelector('input[type="submit"]');
const resultContainer = document.createElement("div");
const revokeButton = document.createElement("button");

window.onload = checkLogin;

resultContainer.style.marginTop = "20px";
resultContainer.style.fontFamily = "Montserrat", "sans-serif";
resultContainer.style.fontSize = "16px";
resultContainer.style.fontWeight = "600";

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (username === "root" && password === "root") {
    resultContainer.innerHTML = "You are now logged in";
    resultContainer.style.color = "green";
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    usernameInput.disabled = true;
    passwordInput.disabled = true;
    submitButton.disabled = true;
    revokeButton.style.display = "block";
    const form = submitButton.closest("form");
    form.appendChild(revokeButton);
  } else {
    resultContainer.innerHTML = "Invalid username or password";
    resultContainer.style.color = "red";
  }

  const form = submitButton.closest("form");
  form.appendChild(resultContainer);
});

function checkLogin() {
  if (localStorage.getItem("loggedIn") === "true") {
    resultContainer.innerHTML = "You are already logged in";
    resultContainer.style.color = "green";
    revokeButton.style.display = "block";
    usernameInput.value = localStorage.getItem("username");
    passwordInput.value = localStorage.getItem("password");
    usernameInput.disabled = true;
    passwordInput.disabled = true;
    submitButton.disabled = true;
  } else {
    resultContainer.innerHTML = "";
    revokeButton.style.display = "none";
    usernameInput.disabled = false;
    passwordInput.disabled = false;
    submitButton.disabled = false;
  }
  const form = submitButton.closest("form");
  form.appendChild(revokeButton);
  form.appendChild(resultContainer);
}

revokeButton.textContent = "Sign out";
revokeButton.style.display = "none";
revokeButton.addEventListener("click", function (event) {
  event.preventDefault();
  checkLogin();
  localStorage.removeItem("loggedIn");
  resultContainer.innerHTML = "You have now signed out";
  resultContainer.style.color = "red";
  revokeButton.style.display = "none";
  usernameInput.disabled = false;
  passwordInput.disabled = false;
  submitButton.disabled = false;
  usernameInput.value = "";
  passwordInput.value = "";
});
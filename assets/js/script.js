const usernameInput = document.querySelector('input[type="text"]');
const passwordInput = document.querySelector('input[type="password"]');
const submitButton = document.querySelector('input[type="submit"]');
const resultContainer = document.createElement("div");

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
  } else {
    resultContainer.innerHTML = "Invalid username or password";
    resultContainer.style.color = "red";
  }

  const form = submitButton.closest("form");
  form.appendChild(resultContainer);
});
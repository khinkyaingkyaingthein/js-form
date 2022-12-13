let togglePassword = document.querySelector("#togglePassword");
let password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
  let type = password.type;
  type = type === "password" ? "text" : "password";
  password.setAttribute("type", type);
  togglePassword.classList.toggle("bi-eye");
});
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

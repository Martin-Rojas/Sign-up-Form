const password = document.getElementById(`password`);
const confirmPassword = document.getElementById("confirm-password");

const erroMassage = document.getElementById(`password-confirm`);

confirmPassword.addEventListener("focusout", () => {
  if (password.value === confirmPassword.value) {
    console.log("son iguales");
    console.log(confirmPassword.value);
    console.log(password.value);
  } else {
    const text = document.createTextNode("This just got added");
    erroMassage.appendChild(text);
  }
});

const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const registerBtn = document.getElementById("registerBtn");

registerBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  registerBtn.disabled = true;
  const { data, error } = await client.auth.signUp({
    email: userEmail.value,
    password: userPassword.value,
  });
  if (error) {
    document.getElementById("signupHelper").innerHTML = error;
    console.log(error);
    registerBtn.disabled = false;
  } else {
    console.log(data);
    window.location.replace("./success.html");
  }
});

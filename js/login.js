const userEmail = document.getElementById("userEmail");
const userPassword = document.getElementById("userPassword");
const loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  loginBtn.disabled = true;
  const isEmailValid = isValidEmail(userEmail.value);
  const isPasswordValid = isValidPassword(userPassword.value);
  if (isEmailValid) {
    console.log("valid email address.");
    if (isPasswordValid) {
      console.log("password ok");
      const { data, error } = await client.auth.signInWithPassword(
        {
          email: userEmail.value,
          password: userPassword.value,
        },
        {
          redirectTo: window.location.origin,
        }
      );
      if (error) {
        document.getElementById("loginHelper").innerHTML = error;
        console.log(error);
        loginBtn.disabled = false;
      } else {
        document.getElementById("loginHelper").innerHTML = "";
        console.log(data);
        window.location.replace("/index.html");
        loginBtn.disabled = false;
      }
    } else {
      console.log("not a valid password");
      loginBtn.disabled = false;
    }
  } else {
    console.log("not a valid email address.");
    loginBtn.disabled = false;
  }
});

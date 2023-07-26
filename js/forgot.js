const resetPasswordBtn = document.getElementById("resetPasswordBtn");

resetPasswordBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const userEmail = document.getElementById("userEmail").value;
  const isValid = isValidEmail(userEmail);
  if (isValid) {
    console.log("valid email address.");
    const { data, error } = await client.auth.resetPasswordForEmail(userEmail, {
      redirectTo: "http://cripto.tools/update-password.html",
    });

    if (error) {
      console.log(error);
    } else {
      console.log(data);
      window.location.replace("./reset-email.html");
    }
  } else {
    console.log("not a valid email address.");
  }
});

const updatePasswordBtn = document.getElementById("updatePassword");

updatePasswordBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const newPassword = document.getElementById("newPassword").value;
  const { data, error } = await client.auth.updateUser({ password: newPassword });

  if (error) {
    console.log(error);
  } else {
    console.log(data);
    window.location.replace("./reset-success.html");
  }
});

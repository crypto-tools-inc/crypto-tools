const logoutBtn = document.getElementById("logoutBtn");

logoutBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  const { error } = await client.auth.signOut();
  window.location.replace("/index.html");
});

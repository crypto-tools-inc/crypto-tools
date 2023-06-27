// Check if the user is logged in or not
checkSession();

function userLogged() {
  console.log("user logged in");
  if (window.location.pathname == "/login.html") {
    window.location.replace("/index.html");
  }
}

function userNotLogged() {
  console.log("user not logged in");
  removeUserCommand();
  if (window.location.pathname == "/bookmarks/") {
    return;
  }
  if (window.location.pathname !== "/login.html") {
    window.location.replace("/login.html");
  }
}

async function checkSession() {
  const { data, error } = await client.auth.getSession();
  if (data.session == null) {
    userNotLogged();
    user_id = null;
  } else {
    userLogged();
    console.log("userID:", data.session.user.id);
    if (document.getElementById("displayUserEmail")) {
      document.getElementById("displayUserEmail").innerHTML = data.session.user.email;
    }
    user_id = data.session.user.id;
  }
}

async function removeUserCommand() {
  document.getElementById("userLogged").hidden = true;
  document.getElementById("userNotLogged").hidden = false;
}

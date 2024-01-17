// Check if the user is logged in or not
checkSession();

function userLogged() {
  console.log("user logged in");
  if (window.location.pathname == "/login.html") {
    window.location.replace("/index.html");
  }
}

function userNotLogged() {
  user_id = null;
  console.log("user not logged in");
  removeUserCommand();
  if (window.location.pathname == "/bookmarks/") {
    return;
  }
  if (window.location.pathname == "/suggest/index.html") {
    window.location.replace("/login.html");
  }
  if (window.location.pathname == "/account/index.html") {
    window.location.replace("/login.html");
  }
  // if (window.location.pathname !== "/login.html") {
  //   window.location.replace("/login.html");
  // }
}

async function checkSession() {
  const { data, error } = await client.auth.getSession();
  if (data.session == null) {
    userNotLogged();
  } else {
    userLogged();
    console.log("userID:", data.session.user.id);
    if (document.getElementById("displayUserEmail")) {
      document.getElementById("displayUserEmail").innerHTML = data.session.user.email;
    }
    user_email = data.session.user.email;
    user_id = data.session.user.id;
  }
}

async function removeUserCommand() {
  if (document.getElementById("userLogged")) {
    document.getElementById("userLogged").hidden = true;
  }
  if (document.getElementById("userNotLogged")) {
    document.getElementById("userNotLogged").hidden = false;
  }
}

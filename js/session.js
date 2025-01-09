// Declare global variables
let user_id = null;
let user_email = null;

// Check if the user is logged in or not
window.addEventListener("DOMContentLoaded", async (event) => {
  await checkSession();
});

function userLogged() {
  if (window.location.pathname == "/login.html") {
    window.location.replace("/index.html");
  }
}

function userNotLogged() {
  user_id = null;
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
}

async function checkSession() {
  try {
    const { data, error } = await client.auth.getSession();
    if (data.session == null) {
      userNotLogged();
    } else {
      userLogged();
      if (document.getElementById("displayUserEmail")) {
        document.getElementById("displayUserEmail").innerHTML = data.session.user.email;
      }
      user_email = data.session.user.email;
      user_id = data.session.user.id;
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    userNotLogged();
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

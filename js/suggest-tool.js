window.addEventListener("load", function () {
  let inputTimestamp = document.getElementById("inputTimestamp");
  var now = new Date();
  var utcString = now.toISOString().substring(0, 19);
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var day = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  var localDatetime = year + "-" + (month < 10 ? "0" + month.toString() : month) + "-" + (day < 10 ? "0" + day.toString() : day) + "T" + (hour < 10 ? "0" + hour.toString() : hour) + ":" + (minute < 10 ? "0" + minute.toString() : minute) + utcString.substring(16, 19);
  var datetimeField = document.getElementById("myDatetimeField");
  inputTimestamp.value = localDatetime;
});

function previewImage() {
  var preview = document.getElementById("imagePreview");
  var file = document.getElementById("formFile").files[0];
  var reader = new FileReader();

  reader.onloadend = function () {
    preview.innerHTML = '<img class="img-fluid rounded" src="' + reader.result + '" width="150" height="150" />';
  };

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.innerHTML = "No image selected";
  }
}

let addProject = document.getElementById("addProject");
addProject.addEventListener("click", async function () {
  addProject.disabled = true;

  const logo = document.getElementById("formFile");
  let name = document.getElementById("inputName").value;
  let description = document.getElementById("inputDescription").value;
  let website = document.getElementById("inputWebsite").value;
  let twitter = document.getElementById("inputTwitter").value;
  let discord = document.getElementById("inputDiscord").value;
  let telegram = document.getElementById("inputTelegram").value;
  let medium = document.getElementById("inputMedium").value;
  let reddit = document.getElementById("inputReddit").value;
  let mirror = document.getElementById("inputMirror").value;
  let github = document.getElementById("inputGithub").value;
  let category = document.getElementById("inputCategory").value;
  let timestamp = document.getElementById("inputTimestamp").value;
  let checkboxes = document.querySelectorAll('input[name="networkSelect"]');
  let network = [];
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      network.push(checkbox.value);
    }
  });

  console.log(name, description, website, twitter, discord, telegram, medium, reddit, mirror, github, category, network);

  // Upload file using standard upload
  async function uploadFile() {
    const { data, error } = await client.storage.from("logos").upload(logo.files[0].name, logo.files[0]);
    if (error) {
      console.log(error);
      addProject.disabled = false;
    } else {
      console.log(data);
      window.location.href = "/suggest/complete.html";
      addProject.disabled = false;
    }
  }

  const { data, error } = await client
    .from("queue")
    .insert([
      {
        name: name,
        logo: logo.files[0].name,
        description: description,
        website: website == "" ? null : website,
        network: network,
        social_twitter: twitter == "" ? null : twitter,
        social_discord: discord == "" ? null : discord,
        social_mirror: mirror == "" ? null : mirror,
        social_github: github == "" ? null : github,
        social_telegram: telegram == "" ? null : telegram,
        social_medium: medium == "" ? null : medium,
        social_reddit: reddit == "" ? null : reddit,
        upvotes: "0",
        category: category,
        date_added: timestamp,
        user_id: user_id,
        user_email: user_email,
      },
    ])
    .select();
  if (error) {
    console.log(error);
    addProject.disabled = false;
  }
  if (data) {
    console.log(data);
    addProject.disabled = false;
  }
  uploadFile();
});

// Vanilla JS
document.addEventListener("keydown", function () {
  if (event.keyCode === 191) {
    document.getElementById("searchContent").focus();
    return false;
  }
});

function searchContent() {
  // Declare variables
  var input = document.getElementById("searchContent");
  var filter = input.value.toLowerCase();
  var ul = document.getElementById("section-elements");
  var li = ul.getElementsByClassName("card");

  // Loop through all list items, and hide those who don't match the search query
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByClassName("card-title")[0];
    var b = li[i].getElementsByClassName("card-text")[0];

    if (a.innerHTML.toLowerCase().indexOf(filter) > -1 || b.innerHTML.toLowerCase().indexOf(filter) > -1) {
      li[i].parentElement.style.display = "";
    } else {
      li[i].parentElement.style.display = "none";
    }
  }
}

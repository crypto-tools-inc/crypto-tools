// JQuery
// $(document).ready(function () {
//   $('#navbar').load('../include/navbar.html');
//   var pageTitle = $('title').text();
//   $('#section-title').text(pageTitle);
//   getContent();
// });

// Vanilla JS
document.addEventListener("DOMContentLoaded", function () {
  fetch("../include/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("#navbar").innerHTML = data;
    });

  var pageTitle = document.querySelector("title").textContent;
  document.querySelector("#section-title").textContent = pageTitle;
  getContent();
});

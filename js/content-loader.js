$(document).ready(function () {
  $('#navbar').load('../include/navbar.html');
  var pageTitle = $('title').text();
  $('#section-title').text(pageTitle);
  getContent();
});

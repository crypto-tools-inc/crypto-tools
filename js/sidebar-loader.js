  $('#sidebar-wrapper').load('../include/sidebar.html');
  $('#main-navbar').load('../include/navbar.html');
  var pageTitle = $('title').text();
  $('#section-title').text(pageTitle);
$(document).ready(function () {
  getContent();
});

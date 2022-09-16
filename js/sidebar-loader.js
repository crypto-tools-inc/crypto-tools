  $('#sidebar-wrapper').load('../include/sidebar.html');
  var pageTitle = $('title').text();
  $('#section-title').text(pageTitle);
$(document).ready(function () {
  getContent();
});

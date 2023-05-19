// JQuery
// $("#sidebar-wrapper").load("../include/sidebar.html");
// var pageTitle = $("title").text();
// $("#section-title").text(pageTitle);

// window.addEventListener("DOMContentLoaded", (event) => {
//   // Toggle the side navigation
//   const sidebarToggle = document.body.querySelector("#sidebarToggle");
//   if (sidebarToggle) {
//     // Uncomment Below to persist sidebar toggle between refreshes
//     // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
//     //     document.body.classList.toggle('sb-sidenav-toggled');
//     // }
//     sidebarToggle.addEventListener("click", (event) => {
//       event.preventDefault();
//       document.body.classList.toggle("sb-sidenav-toggled");
//       localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
//     });
//   }
// });

// $(document).ready(function () {
//   getContent();
// });

// $("#page-content-wrapper").scroll(function () {
//   var y = $(this).scrollTop();
//   if (y > 200) {
//     $("#backToTop").fadeIn();
//   } else {
//     $("#backToTop").fadeOut();
//   }
// });

// Vanilla JS
// Load the sidebar
fetch("../include/sidebar.html")
  .then((response) => response.text())
  .then((text) => {
    document.querySelector("#sidebar-wrapper").innerHTML = text;
  });

// Set the page title
var pageTitle = document.querySelector("title").textContent;
document.querySelector("#section-title").textContent = pageTitle;

window.addEventListener("DOMContentLoaded", (event) => {
  // Toggle the side navigation
  const sidebarToggle = document.body.querySelector("#sidebarToggle");
  if (sidebarToggle) {
    // Uncomment Below to persist sidebar toggle between refreshes
    // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
    // document.body.classList.toggle('sb-sidenav-toggled');
    // }
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem("sb|sidebar-toggle", document.body.classList.contains("sb-sidenav-toggled"));
    });
  }
});

// Call the getContent function when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  getContent();
});

// Listen for scroll events on the #page-content-wrapper element
document.querySelector("#page-content-wrapper").addEventListener("scroll", function () {
  var y = this.scrollTop;
  if (y > 200) {
    document.querySelector("#backToTop").style.display = "block";
  } else {
    document.querySelector("#backToTop").style.display = "none";
  }
});

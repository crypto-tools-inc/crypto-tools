// JQuery
// function getCategories() {
//   $.ajaxSetup();
//   // FETCHING DATA FROM JSON FILE
//   $.getJSON("data/categories.json", function (data) {
//     var item = "";
//     // ITERATING THROUGH OBJECTS
//     $.each(data, function (key, value) {
//       //CONSTRUCTION OF ROWS HAVING
//       // DATA FROM JSON OBJECT
//       // console.log(value.name);
//       item += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
//       item += '<a class="text-decoration-none" href="' + value.link + '">';
//       item += '<div class="card card-slide-up text-center">';
//       item += '<div class="card-body">';
//       item += '<img class="m-3" src=img/icons/' + value.icon + ' width="42" height="42">';
//       item += '<h5 class="semi-bold">' + value.title + "</h5>";
//       item += '<p class="text-muted small m-0">' + value.description + "</p>";
//       item += "</div></div></a></div>";

//       //INSERTING ROWS INTO TABLE
//       $("#section-categories").html(item);
//     });
//   });
// }

// Vanilla JS
function getCategories() {
  // FETCHING DATA FROM JSON FILE
  fetch("data/categories.json")
    .then((response) => response.json())
    .then((data) => {
      var item = "";
      // ITERATING THROUGH OBJECTS
      data.forEach(function (value) {
        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        item += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
        item += '<a class="text-decoration-none" href="' + value.link + '">';
        item += '<div class="card card-slide-up text-center">';
        item += '<div class="card-body">';
        item += '<img class="m-3" src=img/icons/' + value.icon + ' width="42" height="42">';
        item += '<h5 class="semi-bold">' + value.title + "</h5>";
        item += '<p class="text-muted small m-0">' + value.description + "</p>";
        item += "</div></div></a></div>";
      });

      //INSERTING ROWS INTO TABLE
      document.querySelector("#section-categories").innerHTML = item;
    });
}

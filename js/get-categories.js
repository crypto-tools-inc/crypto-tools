function getCategories() {

  $.ajaxSetup();
  // FETCHING DATA FROM JSON FILE
  $.getJSON('data/categories.json', function (data) {
    var item = '';
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {

      //CONSTRUCTION OF ROWS HAVING
      // DATA FROM JSON OBJECT
      // console.log(value.name);
      item += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
      item += '<a class="text-decoration-none" href="' + value.link + '">';
      item += '<div class="card card-slide-up text-center">';
      item += '<div class="card-body">';
      item += '<h5 class="semi-bold">' + value.title + '</h5>';
      item += '<p class="text-muted small m-0">' + value.description + '</p>';
      item += '</div></div></a></div>';

      //INSERTING ROWS INTO TABLE
      $('#section-categories').html(item);
    });
  })
}
